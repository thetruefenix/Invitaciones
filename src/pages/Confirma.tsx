import { useRef, useState, type FormEvent } from "react";
import Layout from "../components/Layout";
import useReveal from "../hooks/useReveal";
import { useLang } from "../i18n/LanguageContext";
import { RSVP_ENDPOINT } from "../config/rsvp";

type Status = { message: string; state: "" | "success" | "error" };

export default function Confirma() {
  useReveal();
  const { t } = useLang();

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
    setStatus({ message: t.confirma.success, state: "success" });
  };

  const onIframeLoad = () => {
    if (!pendingRef.current) return;
    finish();
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (!RSVP_ENDPOINT) {
      event.preventDefault();
      setStatus({ message: t.confirma.missingEndpoint, state: "error" });
      return;
    }

    const required = Array.from(
      form.querySelectorAll<HTMLInputElement | HTMLSelectElement>("[required]")
    );
    const empty = required.some((f) => !String(f.value || "").trim());
    if (empty) {
      event.preventDefault();
      setStatus({ message: t.confirma.missingFields, state: "error" });
      return;
    }

    form.action = RSVP_ENDPOINT;
    pendingRef.current = true;
    if (fallbackRef.current) window.clearTimeout(fallbackRef.current);
    setSubmitting(true);
    setStatus({ message: t.confirma.sending, state: "" });

    fallbackRef.current = window.setTimeout(() => {
      if (!pendingRef.current) return;
      finish();
    }, 2500);
  };

  return (
    <Layout page="confirma" title={t.titles.confirma}>
      <section className="confirm-section reveal">
        <div className="section-heading">
          <h2>{t.confirma.title}</h2>
          <p className="section-copy">{t.confirma.copy}</p>
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
              {t.confirma.name}
              <input type="text" name="nombre" autoComplete="given-name" required />
            </label>

            <label>
              {t.confirma.lastName}
              <input type="text" name="apellido" autoComplete="family-name" required />
            </label>

            <label>
              {t.confirma.phone}
              <input type="tel" name="telefono" autoComplete="tel" required />
            </label>

            <label>
              {t.confirma.email}
              <input type="email" name="correo" autoComplete="email" required />
            </label>

            <label>
              {t.confirma.attending}
              <select name="confirmación" required defaultValue="">
                <option value="">{t.confirma.selectOption}</option>
                <option value="Si, asistire">{t.confirma.yes}</option>
                <option value="No podre asistir">{t.confirma.no}</option>
              </select>
            </label>

            <label>
              {t.confirma.message}
              <textarea name="mensaje" rows={4} placeholder={t.confirma.optional} />
            </label>

            <button className="button-link" type="submit" disabled={submitting}>
              {t.confirma.submit}
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
            <h3>{t.confirma.helpTitle}</h3>
            <p>{t.confirma.helpCopy}</p>
          </div>
        </div>

        <iframe
          ref={iframeRef}
          name="rsvp-submit-frame"
          hidden
          title={t.confirma.iframeTitle}
          onLoad={onIframeLoad}
        />
      </section>
    </Layout>
  );
}
