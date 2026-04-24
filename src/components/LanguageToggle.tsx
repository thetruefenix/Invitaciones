import { useLang } from "../i18n/LanguageContext";

export default function LanguageToggle({
  className = "",
}: {
  className?: string;
}) {
  const { lang, toggle, t } = useLang();

  return (
    <button
      type="button"
      className={`lang-toggle${className ? ` ${className}` : ""}`}
      aria-label={t.toggle.aria}
      onClick={toggle}
    >
      <span
        className="lang-toggle-thumb"
        data-lang={lang}
        aria-hidden="true"
      />
      <span className={`lang-toggle-option${lang === "es" ? " is-active" : ""}`}>
        ES
      </span>
      <span className={`lang-toggle-option${lang === "en" ? " is-active" : ""}`}>
        EN
      </span>
    </button>
  );
}
