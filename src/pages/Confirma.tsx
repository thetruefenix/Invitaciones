import { useRef, useState, type FormEvent } from "react";
import Layout from "../components/Layout";
import useReveal from "../hooks/useReveal";
import { useLang } from "../i18n/LanguageContext";
import { RSVP_ENDPOINT } from "../config/rsvp";

type Status = { message: string; state: "" | "success" | "error" };
type FieldElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
type CountryCode = {
  iso: string;
  label: string;
  dial: string;
  min: number;
  max: number;
};

const field =
  "w-full px-4 py-[0.9rem] border border-line-strong bg-white/85 text-text font-[inherit] mobile:text-base";
const labelClass =
  "grid gap-[0.45rem] font-serif text-[0.95rem] leading-[1.4]";
const panel =
  "bg-white/40 border border-line shadow-soft p-6 tablet:p-4";
const countryCodes: CountryCode[] = [
  { iso: "CL", label: "Chile", dial: "+56", min: 9, max: 9 },
  { iso: "AR", label: "Argentina", dial: "+54", min: 10, max: 10 },
  { iso: "AU", label: "Australia", dial: "+61", min: 9, max: 9 },
  { iso: "BR", label: "Brasil / Brazil", dial: "+55", min: 10, max: 11 },
  { iso: "CO", label: "Colombia", dial: "+57", min: 10, max: 10 },
  { iso: "MX", label: "Mexico", dial: "+52", min: 10, max: 10 },
  { iso: "PE", label: "Peru", dial: "+51", min: 9, max: 9 },
  { iso: "US", label: "USA / Canada", dial: "+1", min: 10, max: 10 },
  { iso: "ES", label: "Espana / Spain", dial: "+34", min: 9, max: 9 },
];

const getCountryCode = (iso: string) =>
  countryCodes.find((country) => country.iso === iso) ?? countryCodes[0];

export default function Confirma() {
  useReveal();
  const { t } = useLang();

  const formRef = useRef<HTMLFormElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const pendingRef = useRef(false);
  const fallbackRef = useRef<number | null>(null);

  const [status, setStatus] = useState<Status>({ message: "", state: "" });
  const [submitting, setSubmitting] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("CL");

  const phoneLengthMessage = (country: CountryCode) => {
    const length =
      country.min === country.max ? String(country.min) : `${country.min}-${country.max}`;
    return `${t.confirma.phoneLength} ${country.label} ${country.dial}: ${length} ${t.confirma.digits}.`;
  };

  const clearFieldError = (event: FormEvent<FieldElement>) => {
    event.currentTarget.setCustomValidity("");
  };

  const showRequiredError = (event: FormEvent<FieldElement>) => {
    const input = event.currentTarget;
    input.setCustomValidity(t.confirma.requiredField);
  };

  const onCountryChange = (event: FormEvent<HTMLSelectElement>) => {
    const select = event.currentTarget;
    select.setCustomValidity("");
    setSelectedCountry(select.value);
  };

  const validatePhone = (input: HTMLInputElement, countryIso: string) => {
    const country = getCountryCode(countryIso);
    const value = input.value.trim();
    input.setCustomValidity("");

    if (!value) {
      input.setCustomValidity(t.confirma.requiredField);
      return false;
    }

    if (!/^[0-9]+$/.test(value)) {
      input.setCustomValidity(t.confirma.phoneFormat);
      return false;
    }

    if (value.length < country.min || value.length > country.max) {
      input.setCustomValidity(phoneLengthMessage(country));
      return false;
    }

    return true;
  };

  const onPhoneInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    input.setCustomValidity("");
    input.value = input.value.replace(/\D/g, "");
  };

  const showPhoneError = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    validatePhone(input, selectedCountry);
  };

  const showEmailError = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    input.setCustomValidity(
      input.validity.valueMissing ? t.confirma.requiredField : t.confirma.emailFormat
    );
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

  const onIframeLoad = () => {
    if (!pendingRef.current) return;
    finish();
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    const country = form.elements.namedItem("codigoPais") as HTMLSelectElement | null;
    const phoneLocal = form.elements.namedItem("telefonoLocal") as HTMLInputElement | null;
    const phoneFull = form.elements.namedItem("telefono") as HTMLInputElement | null;

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

    if (phoneLocal && country && !validatePhone(phoneLocal, country.value)) {
      event.preventDefault();
      phoneLocal.reportValidity();
      setStatus({ message: t.confirma.invalidFields, state: "error" });
      return;
    }

    if (!form.checkValidity()) {
      event.preventDefault();
      form.reportValidity();
      setStatus({ message: t.confirma.invalidFields, state: "error" });
      return;
    }

    if (phoneLocal && country && phoneFull) {
      phoneFull.value = `'${getCountryCode(country.value).dial} ${phoneLocal.value.trim()}`;
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
            <input type="hidden" name="telefono" />

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

            <label className={labelClass}>
              {t.confirma.countryCode}
              <select
                className={field}
                name="codigoPais"
                value={selectedCountry}
                onChange={onCountryChange}
                onInvalid={showRequiredError}
                required
              >
                {countryCodes.map((country) => (
                  <option key={country.iso} value={country.iso}>
                    {country.label} ({country.dial})
                  </option>
                ))}
              </select>
            </label>

            <label className={labelClass}>
              {t.confirma.phone}
              <input
                className={field}
                type="tel"
                name="telefonoLocal"
                inputMode="numeric"
                pattern="[0-9]+"
                title={t.confirma.phoneFormat}
                autoComplete="tel"
                onInput={onPhoneInput}
                onInvalid={showPhoneError}
                required
              />
            </label>

            <label className={labelClass}>
              {t.confirma.email}
              <input
                className={field}
                type="email"
                name="correo"
                title={t.confirma.emailFormat}
                autoComplete="email"
                onInput={clearFieldError}
                onInvalid={showEmailError}
                required
              />
            </label>

            <label className={labelClass}>
              {t.confirma.attending}
              <select
                className={field}
                name="confirmacion"
                required
                defaultValue=""
                onChange={clearFieldError}
                onInvalid={showRequiredError}
              >
                <option value="">{t.confirma.selectOption}</option>
                <option value="Si, asistire">{t.confirma.yes}</option>
                <option value="No podre asistir">{t.confirma.no}</option>
              </select>
            </label>

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
              className="inline-flex items-center justify-center min-h-[46px] mt-4 px-[1.35rem] py-[0.82rem] border border-text text-text bg-transparent font-serif text-base cursor-pointer w-full transition-[background-color,color,transform] duration-200 hover:bg-text hover:text-bg hover:-translate-y-px disabled:opacity-70 disabled:cursor-wait"
              type="submit"
              disabled={submitting}
            >
              {t.confirma.submit}
            </button>
            <p
              className="min-h-6 m-0 font-serif leading-[1.7] data-[state=success]:text-success data-[state=error]:text-error"
              aria-live="polite"
              {...(status.state ? { "data-state": status.state } : {})}
            >
              {status.message}
            </p>
          </form>

          <div className={`${panel} grid content-start gap-4`}>
            <h3 className="m-0 mb-3 font-serif text-[1.1rem]">
              {t.confirma.helpTitle}
            </h3>
            <p className="m-0 font-serif leading-[1.7]">{t.confirma.helpCopy}</p>
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
