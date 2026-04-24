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
      <section className="registry-section reveal">
        <div className="section-heading">
          <p className="section-kicker">{t.regalos.kicker}</p>
          <h2>{t.regalos.title}</h2>
          <p className="section-copy">{t.regalos.copy}</p>
        </div>

        <div className="registry-browser reveal">
          <div className="browser-chrome">
            <span className="chrome-dot chrome-dot--red" />
            <span className="chrome-dot chrome-dot--yellow" />
            <span className="chrome-dot chrome-dot--green" />
            <span className="chrome-url">novios.falabella.com</span>
          </div>

          <a
            className="browser-preview"
            href={REGISTRY_URL}
            target="_blank"
            rel="noreferrer"
            aria-label={t.regalos.ariaLabel}
          >
            <div className="preview-content">
              <svg
                className="preview-icon"
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
              <p className="preview-title">{t.regalos.previewTitle}</p>
              <p className="preview-names">Gabriela &amp; Diego</p>
              <span className="preview-cta">{t.regalos.previewCta}</span>
            </div>
            <div className="preview-hover-overlay">
              <span>{t.regalos.previewHover}</span>
            </div>
          </a>
        </div>
      </section>
    </Layout>
  );
}
