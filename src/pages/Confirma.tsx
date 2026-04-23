import { useRef, useState, type FormEvent } from "react";
import Layout from "../components/Layout";
import useReveal from "../hooks/useReveal";
import { RSVP_ENDPOINT } from "../config/rsvp";

type Status = { message: string; state: "" | "success" | "error" };

export default function Confirma() {
  useReveal();

  const formRef = useRef<HTMLFormElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const pendingRef = useRef(false);
  const fallbackRef = useRef<number | null>(null);

  const [status, setStatus] = useState<Status>({ message: "", state: "" });
  const [submitting, setSubmitting] = useState(false);

  const finish = () => {
    pendingRef.current = false;
    if (fallbackRef.current) {
      window.clearTimeout(fallbackRef.current);
      fallbackRef.current = null;
    }
    setSubmitting(false);
    formRef.current?.reset();
    setStatus({ message: "Gracias, tu confirmacion fue enviada.", state: "success" });
  };

  const onIframeLoad = () => {
    if (!pendingRef.current) return;
    finish();
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (!RSVP_ENDPOINT) {
      event.preventDefault();
      setStatus({ message: "Falta configurar el endpoint del formulario.", state: "error" });
      return;
    }

    const required = Array.from(form.querySelectorAll<HTMLInputElement | HTMLSelectElement>("[required]"));
    const empty = required.some((f) => !String(f.value || "").trim());
    if (empty) {
      event.preventDefault();
      setStatus({ message: "Completa los campos obligatorios antes de enviar.", state: "error" });
      return;
    }

    form.action = RSVP_ENDPOINT;
    pendingRef.current = true;
    if (fallbackRef.current) window.clearTimeout(fallbackRef.current);
    setSubmitting(true);
    setStatus({ message: "Enviando confirmacion...", state: "" });

    fallbackRef.current = window.setTimeout(() => {
      if (!pendingRef.current) return;
      finish();
    }, 2500);
  };

  return (
    <Layout page="confirma" title="Confirma aca | Gabriela & Diego">
      <section className="confirm-section reveal">
        <div className="section-heading">
          <h2>Confirma aca</h2>
          <p className="section-copy">
            Confírmanos tu asistencia para acompañarnos en este día tan especial.
          </p>
        </div>

        <div className="rsvp-shell reveal">
          <form
            ref={formRef}
            className="rsvp-form"
            id="rsvpForm"
            method="post"
            target="rsvp-submit-frame"
            noValidate
            onSubmit={onSubmit}
          >
            <input type="hidden" name="source" value="website" />

            <label>
              Nombre
              <input type="text" name="nombre" autoComplete="given-name" required />
            </label>

            <label>
              Apellido
              <input type="text" name="apellido" autoComplete="family-name" required />
            </label>

            <label>
              Teléfono
              <input type="tel" name="telefono" autoComplete="tel" required />
            </label>

            <label>
              Correo
              <input type="email" name="correo" autoComplete="email" required />
            </label>

            <label>
              ¿Confirmas asistencia?
              <select name="confirmacion" required defaultValue="">
                <option value="">Selecciona una opción</option>
                <option value="Si, asistire">Sí, asistiré</option>
                <option value="No podre asistir">No podré asistir</option>
              </select>
            </label>

            <label>
              Mensaje adicional
              <textarea name="mensaje" rows={4} placeholder="Opcional" />
            </label>

            <button className="button-link" type="submit" disabled={submitting}>
              Enviar confirmación
            </button>
            <p
              className="form-status"
              aria-live="polite"
              {...(status.state ? { "data-state": status.state } : {})}
            >
              {status.message}
            </p>
          </form>

          <div className="rsvp-help">
            <h3>Nos haría muy felices verte allá</h3>
            <p>
              Cada persona que nos acompaña forma parte de esta historia, y tu presencia harí este
              día todavía más especial para nosotros.
            </p>
          </div>
        </div>

        <iframe
          ref={iframeRef}
          name="rsvp-submit-frame"
          hidden
          title="Envio RSVP"
          onLoad={onIframeLoad}
        />
      </section>
    </Layout>
  );
}
