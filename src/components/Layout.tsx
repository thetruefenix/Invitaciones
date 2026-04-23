import { useEffect, type ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  page: string;
  title: string;
  children: ReactNode;
};

export default function Layout({ page, title, children }: LayoutProps) {
  useEffect(() => {
    document.title = title;
    document.body.dataset.page = page;
    return () => {
      delete document.body.dataset.page;
    };
  }, [page, title]);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
