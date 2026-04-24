import Layout from "../components/Layout";
import useReveal from "../hooks/useReveal";
import { useLang } from "../i18n/LanguageContext";

const REGISTRY_URL =
  "https://novios.falabella.com/info-evento/evento?codigoEvento=2104394";

export default function Regalos() {
  useReveal();
  const { t } = useLang();

  return (
    <Layout page="regalos" title={t.titles.regalos}>
      <section className="reveal py-12 pb-[4.5rem] tablet:py-8 tablet:pb-12">
        <div className="max-w-[760px] mx-auto mb-8 text-center tablet:mb-[1.4rem]">
          <p className="m-0 font-serif text-base tracking-[0.01em]">
            {t.regalos.kicker}
          </p>
          <h2 className="m-0 font-script font-normal text-[clamp(2.8rem,5vw,4.6rem)] leading-[1.2] mobile:text-[clamp(2.4rem,11vw,3.2rem)]">
            {t.regalos.title}
          </h2>
          <p className="m-0 font-serif font-normal">{t.regalos.copy}</p>
        </div>

        <div className="reveal max-w-[560px] mx-auto rounded-[10px] overflow-hidden shadow-[0_30px_70px_rgba(78,78,78,0.08),0_0_0_1px_#e8e0d8]">
          <div className="flex items-center gap-[0.45rem] px-4 py-[0.65rem] bg-[#e8e0d8] border-b border-line-strong">
            <span className="w-[11px] h-[11px] rounded-full flex-shrink-0 bg-[#c2ac97]" />
            <span className="w-[11px] h-[11px] rounded-full flex-shrink-0 bg-[#c2ac97]" />
            <span className="w-[11px] h-[11px] rounded-full flex-shrink-0 bg-[#c2ac97]" />
            <span className="ml-2 flex-1 bg-white/65 border border-line-strong rounded-[4px] px-[0.65rem] py-[0.2rem] font-serif text-[0.72rem] text-text whitespace-nowrap overflow-hidden text-ellipsis">
              novios.falabella.com
            </span>
          </div>

          <a
            className="group relative flex items-center justify-center min-h-[260px] no-underline text-text overflow-hidden cursor-pointer bg-[linear-gradient(145deg,#fdf8f3_0%,#f0e8df_100%)] tablet:min-h-[200px]"
            href={REGISTRY_URL}
            target="_blank"
            rel="noreferrer"
            aria-label={t.regalos.ariaLabel}
          >
            <div className="flex flex-col items-center gap-[0.6rem] text-center p-8 transition-opacity duration-200 group-hover:opacity-30">
              <svg
                className="w-12 h-12 text-text opacity-60"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 12 20 22 4 22 4 12" />
                <rect x="2" y="7" width="20" height="5" />
                <line x1="12" y1="22" x2="12" y2="7" />
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
              </svg>
              <p className="m-0 font-serif text-[1.1rem] font-normal tracking-[0.06em] uppercase">
                {t.regalos.previewTitle}
              </p>
              <p className="m-0 font-serif text-[1.45rem] font-normal italic text-text tablet:text-[1.2rem]">
                Gabriela &amp; Diego
              </p>
              <span className="inline-block mt-2 px-[1.4rem] py-[0.6rem] border border-text font-serif text-[0.88rem] tracking-[0.04em] transition-colors duration-200">
                {t.regalos.previewCta}
              </span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-text/80 text-surface font-serif text-base tracking-[0.05em] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <span>{t.regalos.previewHover}</span>
            </div>
          </a>
        </div>
      </section>
    </Layout>
  );
}
