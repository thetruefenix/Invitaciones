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
const rsvpForm = document.getElementById("rsvp-form");
const rsvpStatus = document.getElementById("rsvp-status");
const rsvpEndpoint = window.RSVP_CONFIG?.endpoint || "";

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
updateTopbar();
window.addEventListener("scroll", updateTopbar, { passive: true });

async function submitRsvp(event) {
  event.preventDefault();

  if (!rsvpForm || !rsvpStatus) {
    return;
  }

  const formData = new FormData(rsvpForm);
  const payload = {
    nombre: String(formData.get("nombre") || "").trim(),
    apellido: String(formData.get("apellido") || "").trim(),
    telefono: String(formData.get("telefono") || "").trim(),
    correo: String(formData.get("correo") || "").trim(),
    confirmacion: String(formData.get("confirmacion") || "").trim(),
    mensaje: String(formData.get("mensaje") || "").trim(),
    source: window.location.href,
  };

  if (!payload.nombre || !payload.apellido || !payload.telefono || !payload.correo || !payload.confirmacion) {
    rsvpStatus.textContent = "Completa nombre, apellido, teléfono, correo y confirmación.";
    rsvpStatus.dataset.state = "error";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(payload.correo)) {
    rsvpStatus.textContent = "Ingresa un correo válido.";
    rsvpStatus.dataset.state = "error";
    return;
  }

  if (!rsvpEndpoint) {
    rsvpStatus.textContent = "Falta configurar el endpoint del RSVP en rsvp-config.js.";
    rsvpStatus.dataset.state = "error";
    return;
  }

  const submitButton = rsvpForm.querySelector('button[type="submit"]');
  const sourceField = rsvpForm.querySelector('input[name="source"]');

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = "Enviando...";
  }

  if (sourceField) {
    sourceField.value = window.location.href;
  }

  rsvpForm.action = rsvpEndpoint;
  rsvpForm.method = "POST";
  rsvpForm.target = "rsvp-hidden-frame";

  try {
    rsvpForm.submit();
    rsvpStatus.textContent = "Confirmación enviada. Si no ves cambios en unos segundos, revisa la hoja de Google y tu correo.";
    rsvpStatus.dataset.state = "success";
    rsvpForm.reset();
  } catch (error) {
    rsvpStatus.textContent = error.message || "Ocurrió un error al enviar la confirmación.";
    rsvpStatus.dataset.state = "error";
  } finally {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = "Enviar confirmación";
    }
  }
}

if (rsvpForm) {
  rsvpForm.addEventListener("submit", submitRsvp);
}
