const weddingDate = new Date("2027-02-11T16:30:00-03:00");

const parts = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};

function format(value) {
  return String(value).padStart(2, "0");
}

function updateCountdown() {
  if (!parts.days || !parts.hours || !parts.minutes || !parts.seconds) {
    return;
  }

  const now = new Date();
  const diff = weddingDate.getTime() - now.getTime();

  if (diff <= 0) {
    parts.days.textContent = "000";
    parts.hours.textContent = "00";
    parts.minutes.textContent = "00";
    parts.seconds.textContent = "00";
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  parts.days.textContent = String(days).padStart(3, "0");
  parts.hours.textContent = format(hours);
  parts.minutes.textContent = format(minutes);
  parts.seconds.textContent = format(seconds);
}

if (parts.days && parts.hours && parts.minutes && parts.seconds) {
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

const topbar = document.querySelector(".topbar");
const reveals = document.querySelectorAll(".reveal");
const currentPage = document.body.dataset.page;
const isIntroPage = document.body.classList.contains("intro-message-page");
const introShell = document.querySelector(".intro-message-shell");
const rsvpForm = document.getElementById("rsvpForm");
const rsvpSubmitFrame = document.getElementById("rsvpSubmitFrame");
const rsvpSubmitButton = document.getElementById("rsvpSubmitButton");
const rsvpStatus = document.getElementById("rsvpStatus");
let pendingRsvpSubmit = false;
let rsvpFallbackTimer = null;

function goToHome() {
  window.location.href = "home/index.html";
}

if (isIntroPage) {
  const openIntro = () => {
    if (document.body.classList.contains("intro-opened")) {
      return;
    }

    document.body.classList.add("intro-opened");
    goToHome();
  };

  if (introShell) {
    introShell.addEventListener("click", openIntro);
  }

  window.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openIntro();
    }
  });
}

function setRsvpStatus(message, state = "") {
  if (!rsvpStatus) {
    return;
  }

  rsvpStatus.textContent = message;
  if (state) {
    rsvpStatus.dataset.state = state;
  } else {
    delete rsvpStatus.dataset.state;
  }
}

if (rsvpSubmitFrame) {
  rsvpSubmitFrame.addEventListener("load", () => {
    if (!pendingRsvpSubmit) {
      return;
    }

    pendingRsvpSubmit = false;
    if (rsvpFallbackTimer) {
      window.clearTimeout(rsvpFallbackTimer);
      rsvpFallbackTimer = null;
    }
    if (rsvpSubmitButton) {
      rsvpSubmitButton.disabled = false;
    }
    if (rsvpForm) {
      rsvpForm.reset();
    }
    setRsvpStatus("Gracias, tu confirmacion fue enviada.", "success");
  });
}

if (rsvpForm) {
  rsvpForm.addEventListener("submit", (event) => {
    const endpoint = window.RSVP_CONFIG && window.RSVP_CONFIG.endpoint
      ? String(window.RSVP_CONFIG.endpoint).trim()
      : "";

    if (!endpoint) {
      event.preventDefault();
      setRsvpStatus("Falta configurar el endpoint del formulario.", "error");
      return;
    }

    const requiredFields = Array.from(rsvpForm.querySelectorAll("[required]"));
    const hasEmptyRequired = requiredFields.some((field) => !String(field.value || "").trim());

    if (hasEmptyRequired) {
      event.preventDefault();
      setRsvpStatus("Completa los campos obligatorios antes de enviar.", "error");
      return;
    }

    rsvpForm.action = endpoint;
    pendingRsvpSubmit = true;
    if (rsvpFallbackTimer) {
      window.clearTimeout(rsvpFallbackTimer);
    }
    if (rsvpSubmitButton) {
      rsvpSubmitButton.disabled = true;
    }
    setRsvpStatus("Enviando confirmacion...", "");

    rsvpFallbackTimer = window.setTimeout(() => {
      if (!pendingRsvpSubmit) {
        return;
      }

      pendingRsvpSubmit = false;
      if (rsvpSubmitButton) {
        rsvpSubmitButton.disabled = false;
      }
      if (rsvpForm) {
        rsvpForm.reset();
      }
      setRsvpStatus("Gracias, tu confirmacion fue enviada.", "success");
    }, 2500);
  });
}

document.querySelectorAll("[data-nav]").forEach((link) => {
  if (link.dataset.nav === currentPage) {
    link.classList.add("is-active");
    link.setAttribute("aria-current", "page");
  }
});

requestAnimationFrame(() => {
  document.body.classList.add("is-ready");
});

function updateTopbar() {
  if (!topbar) {
    return;
  }

  topbar.classList.toggle("scrolled", window.scrollY > 10);
}

if (reveals.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    {
      threshold: 0.14,
    }
  );

  reveals.forEach((element) => observer.observe(element));
}

updateTopbar();
window.addEventListener("scroll", updateTopbar, { passive: true });
