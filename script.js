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
