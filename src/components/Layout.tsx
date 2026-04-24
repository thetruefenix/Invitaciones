import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useLang } from "../i18n/LanguageContext";

type LayoutProps = {
  page: string;
  title: string;
  children: ReactNode;
};

export default function Layout({ page, title, children }: LayoutProps) {
  const { t } = useLang();

  useEffect(() => {
    document.title = title;
    document.body.dataset.page = page;
    return () => {
      delete document.body.dataset.page;
    };
  }, [page, title]);

  const nextStep =
    page === "home"
      ? { to: "/detalles", label: t.guide.home }
      : page === "detalles"
        ? { to: "/regalos", label: t.guide.detalles }
        : page === "regalos"
          ? { to: "/confirma", label: t.guide.regalos }
          : null;

  return (
    <>
      <Header />
      <main className="container-narrow">{children}</main>
      <Footer />
      {nextStep ? (
        <Link
          className="hidden tablet:inline-flex fixed left-1/2 bottom-[calc(0.85rem+env(safe-area-inset-bottom))] z-40 -translate-x-1/2 items-center justify-center min-h-[42px] min-w-[min(260px,calc(100vw-3rem))] px-5 rounded-full bg-text text-bg font-serif text-[0.92rem] no-underline shadow-soft border border-text/10 transition-transform duration-200 active:scale-[0.98]"
          to={nextStep.to}
          aria-label={nextStep.label}
        >
          {nextStep.label}
        </Link>
      ) : null}
    </>
  );
}
