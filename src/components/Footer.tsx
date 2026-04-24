import { useLang } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="container-narrow py-9 pb-14 text-center border-t border-line tablet:pt-[1.6rem] tablet:pb-[2.4rem]">
      <p className="m-0 font-serif font-normal">{t.footer.line1}</p>
      <p className="m-0 font-serif font-normal">{t.footer.line2}</p>
    </footer>
  );
}
