import { NavLink, Link } from "react-router-dom";
import useScrolled from "../hooks/useScrolled";
import { useLang } from "../i18n/LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const scrolled = useScrolled(10);
  const { t } = useLang();

  const links = [
    { to: "/home", label: t.nav.home },
    { to: "/detalles", label: t.nav.detalles },
    { to: "/regalos", label: t.nav.regalos },
    { to: "/confirma", label: t.nav.confirma },
  ];

  const navLinkBase =
    "relative text-text text-base font-serif no-underline after:content-[''] after:absolute after:left-0 after:-bottom-[0.35rem] after:w-full after:h-px after:bg-text after:scale-x-0 after:origin-center after:transition-transform after:duration-200 hover:after:scale-x-100 tablet:text-[0.9rem] mobile:text-[0.85rem]";

  return (
    <header
      className={`sticky top-0 z-30 border-b border-[rgba(232,224,216,0.75)] backdrop-blur-md transition-[background-color,box-shadow] duration-200 ${
        scrolled ? "bg-[rgba(247,245,242,0.95)] shadow-topbar" : "bg-[rgba(247,245,242,0.82)]"
      }`}
    >
      <div className="container-narrow min-h-[74px] flex items-center justify-between gap-4 tablet:min-h-0 tablet:pt-3 tablet:pb-[0.85rem] tablet:flex-col tablet:gap-2">
        <Link
          className="font-script text-5xl leading-none whitespace-nowrap no-underline text-text tablet:text-[clamp(2.2rem,9vw,2.8rem)] mobile:text-[clamp(2rem,11vw,2.4rem)]"
          to="/home"
        >
          Gabriela & Diego
        </Link>
        <nav className="flex items-center gap-[1.6rem] tablet:w-full tablet:justify-center tablet:flex-wrap tablet:gap-x-4 tablet:gap-y-2 mobile:gap-x-3 mobile:gap-y-[0.4rem]">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `${navLinkBase}${isActive ? " after:scale-x-100" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <LanguageToggle className="mobile:order-3" />
      </div>
    </header>
  );
}
