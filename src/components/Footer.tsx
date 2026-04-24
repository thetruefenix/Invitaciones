import { useLang } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <p>{t.footer.line1}</p>
      <p>{t.footer.line2}</p>
    </footer>
  );
}
