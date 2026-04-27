import { useRef, useState, type FormEvent } from "react";
import Layout from "../components/Layout";
import useReveal from "../hooks/useReveal";
import { useLang } from "../i18n/LanguageContext";
import { RSVP_ENDPOINT } from "../config/rsvp";

type Status = { message: string; state: "" | "success" | "error" };
type FieldElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

const field =
  "w-full px-4 py-[0.9rem] rounded-[1.1rem] border border-line-strong bg-white/85 text-text font-[inherit] mobile:text-base";
const labelClass =
  "grid gap-[0.45rem] font-serif text-[0.95rem] leading-[1.4]";
const panel =
  "rounded-[1.8rem] bg-white/40 border border-line shadow-soft p-6 tablet:p-4";
const radioCard =
  "group flex items-center gap-4 rounded-[1.15rem] border border-line-strong bg-white/70 px-4 py-4 cursor-pointer transition-[border-color,background-color,transform,box-shadow] duration-200 hover:border-text/45 hover:bg-white/90 hover:-translate-y-px";

export default function Confirma() {
  useReveal();
  const { t } = useLang();

  const formRef = useRef<HTMLFormElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const pendingRef = useRef(false);
  const fallbackRef = useRef<number | null>(null);

  const [status, setStatus] = useState<Status>({ message: "", state: "" });
  const [submitting, setSubmitting] = useState(false);

  const clearFieldError = (event: FormEvent<FieldElement>) => {
    event.currentTarget.setCustomValidity("");
  };

  const showRequiredError = (event: FormEvent<FieldElement>) => {
    const input = event.currentTarget;
    input.setCustomValidity(t.confirma.requiredField);
  };

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

  const failPending = () => {
    pendingRef.current = false;
    if (fallbackRef.current) {
      window.clearTimeout(fallbackRef.current);
      fallbackRef.current = null;
    }
    setSubmitting(false);
    setStatus({ message: t.confirma.deliveryPending, state: "error" });
  };

  const onIframeLoad = () => {
    if (!pendingRef.current) return;
    finish();
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    const confirmation = form.querySelector<HTMLInputElement>(
      'input[name="confirmacion"]:checked'
    );

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

    if (!confirmation) {
      event.preventDefault();
      const firstRadio = form.querySelector<HTMLInputElement>(
        'input[name="confirmacion"]'
      );
      firstRadio?.focus();
      setStatus({ message: t.confirma.missingFields, state: "error" });
      return;
    }

    if (!form.checkValidity()) {
      event.preventDefault();
      form.reportValidity();
      setStatus({ message: t.confirma.invalidFields, state: "error" });
      return;
    }

    form.action = RSVP_ENDPOINT;
    pendingRef.current = true;
    if (fallbackRef.current) window.clearTimeout(fallbackRef.current);
    setSubmitting(true);
    setStatus({ message: t.confirma.sending, state: "" });

    fallbackRef.current = window.setTimeout(() => {
      if (!pendingRef.current) return;
      failPending();
    }, 12000);
  };

  return (
    <Layout page="confirma" title={t.titles.confirma}>
      <section className="reveal py-12 pb-[4.5rem] tablet:py-8 tablet:pb-12">
        <div className="max-w-[760px] mx-auto mb-8 text-center tablet:mb-[1.4rem]">
          <h2 className="m-0 font-script font-normal text-[clamp(2.8rem,5vw,4.6rem)] leading-[1.2] mobile:text-[clamp(2.4rem,11vw,3.2rem)]">
            {t.confirma.title}
          </h2>
          <p className="m-0 font-serif font-normal">{t.confirma.copy}</p>
        </div>

        <div className="reveal grid grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-6 max-w-[980px] mx-auto tablet:grid-cols-1 tablet:gap-4">
          <form
            ref={formRef}
            className={`${panel} grid gap-4`}
            id="rsvpForm"
            method="post"
            target="rsvp-submit-frame"
            noValidate
            onSubmit={onSubmit}
          >
            <input type="hidden" name="source" value="website" />
            <input type="hidden" name="telefono" value="No solicitado" />
            <input type="hidden" name="correo" value="No solicitado" />

            <label className={labelClass}>
              {t.confirma.name}
              <input
                className={field}
                type="text"
                name="nombre"
                autoComplete="given-name"
                onInput={clearFieldError}
                onInvalid={showRequiredError}
                required
              />
            </label>

            <label className={labelClass}>
              {t.confirma.lastName}
              <input
                className={field}
                type="text"
                name="apellido"
                autoComplete="family-name"
                onInput={clearFieldError}
                onInvalid={showRequiredError}
                required
              />
            </label>

            <fieldset className="grid gap-3 border-0 p-0 m-0">
              <legend className="font-serif text-[0.95rem] leading-[1.4] mb-1">
                {t.confirma.attending}
              </legend>

              <label className={radioCard}>
                <input
                  className="sr-only peer"
                  type="radio"
                  name="confirmacion"
                  value="Si, asistire"
                  onChange={clearFieldError}
                />
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-line-strong bg-transparent transition-colors duration-200 peer-checked:border-text peer-checked:bg-text/5">
                  <span className="h-2.5 w-2.5 rounded-full bg-text scale-0 transition-transform duration-200 peer-checked:scale-100" />
                </span>
                <span className="font-serif text-[1rem] text-text/90">
                  {t.confirma.yes}
                </span>
              </label>

              <label className={radioCard}>
                <input
                  className="sr-only peer"
                  type="radio"
                  name="confirmacion"
                  value="No podre asistir"
                  onChange={clearFieldError}
                />
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-line-strong bg-transparent transition-colors duration-200 peer-checked:border-text peer-checked:bg-text/5">
                  <span className="h-2.5 w-2.5 rounded-full bg-text scale-0 transition-transform duration-200 peer-checked:scale-100" />
                </span>
                <span className="font-serif text-[1rem] text-text/90">
                  {t.confirma.no}
                </span>
              </label>
            </fieldset>

            <label className={labelClass}>
              {t.confirma.message}
              <textarea
                className={`${field} min-h-[120px] resize-y`}
                name="mensaje"
                rows={4}
                placeholder={t.confirma.optional}
              />
            </label>

            <button
              className="inline-flex items-center justify-center min-h-[46px] mt-4 px-[1.35rem] py-[0.82rem] rounded-full border border-text text-text bg-transparent font-serif text-base cursor-pointer w-full transition-[background-color,color,transform] duration-200 hover:bg-text hover:text-bg hover:-translate-y-px disabled:opacity-70 disabled:cursor-wait"
              type="submit"
              disabled={submitting}
            >
              {t.confirma.submit}
            </button>
            {status.message ? (
              <div
                className="rounded-[1.25rem] border px-4 py-4 font-serif leading-[1.7] data-[state=success]:border-success/35 data-[state=success]:bg-success/10 data-[state=success]:text-success data-[state=error]:border-error/25 data-[state=error]:bg-error/10 data-[state=error]:text-error"
                aria-live="polite"
                {...(status.state ? { "data-state": status.state } : {})}
              >
                {status.message}
              </div>
            ) : (
              <div aria-live="polite" className="min-h-2" />
            )}
          </form>

          <div className={`${panel} grid content-start gap-4`}>
            {status.state === "success" ? (
              <div className="rounded-[1.5rem] border border-success/20 bg-success/10 px-5 py-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-success/15 text-success text-[1.4rem]">
                  &#10003;
                </div>
                <h3 className="m-0 mt-4 font-serif text-[1.25rem] leading-[1.3]">
                  {t.confirma.successTitle}
                </h3>
                <p className="m-0 mt-3 font-serif leading-[1.75] text-text/85">
                  {t.confirma.successCopy}
                </p>
                <p className="m-0 mt-3 font-serif italic leading-[1.7] text-text/72">
                  {t.confirma.successNote}
                </p>
              </div>
            ) : (
              <>
                <h3 className="m-0 mb-3 font-serif text-[1.1rem]">
                  {t.confirma.helpTitle}
                </h3>
                <p className="m-0 font-serif leading-[1.7]">{t.confirma.helpCopy}</p>
              </>
            )}
          </div>
        </div>

        <div className="reveal max-w-[760px] mx-auto mt-10">
          <div className="rounded-[1.8rem] border border-line bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(247,243,238,0.94))] px-7 py-7 text-center shadow-[0_18px_45px_rgba(78,78,78,0.05)]">
            <p className="m-0 font-script text-[clamp(2rem,4vw,3rem)] leading-[1.1] text-text/86">
              {t.confirma.farewellTitle}
            </p>
            <p className="m-0 mt-3 font-serif text-[1rem] leading-[1.8] text-text/78">
              {t.confirma.farewellCopy}
            </p>
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
