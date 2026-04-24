import { useLang } from "../i18n/LanguageContext";

export default function LanguageToggle({
  className = "",
}: {
  className?: string;
}) {
  const { lang, toggle, t } = useLang();

  const optionBase =
    "relative z-[1] appearance-none border-0 bg-transparent px-4 py-[0.4rem] min-w-[2.6rem] cursor-pointer font-serif text-[0.78rem] tracking-[0.14em] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-text focus-visible:outline-offset-2 focus-visible:rounded-full mobile:px-[0.8rem] mobile:py-[0.34rem] mobile:text-[0.72rem]";

  return (
    <button
      type="button"
      className={`relative inline-flex items-center p-[3px] border border-line-strong rounded-full bg-surface/85 backdrop-blur-[6px] shadow-pill select-none${
        className ? ` ${className}` : ""
      }`}
      aria-label={t.toggle.aria}
      onClick={toggle}
    >
      <span
        className={`absolute top-[3px] left-[3px] w-[calc(50%-3px)] h-[calc(100%-6px)] rounded-full bg-text pointer-events-none transition-transform duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          lang === "en" ? "translate-x-full" : "translate-x-0"
        }`}
        aria-hidden="true"
      />
      <span className={`${optionBase} ${lang === "es" ? "text-surface" : "text-text"}`}>
        ES
      </span>
      <span className={`${optionBase} ${lang === "en" ? "text-surface" : "text-text"}`}>
        EN
      </span>
    </button>
  );
}
