import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import useScrolled from "../hooks/useScrolled";
import { useLang } from "../i18n/LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const scrolled = useScrolled(10);
  const { t } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 840) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { to: "/home", label: t.nav.home },
    { to: "/detalles", label: t.nav.detalles },
    { to: "/regalos", label: t.nav.regalos },
    { to: "/confirma", label: t.nav.confirma },
  ];

  const navLinkBase =
    "relative text-text text-base font-serif no-underline after:content-[''] after:absolute after:left-0 after:-bottom-[0.35rem] after:w-full after:h-px after:bg-text after:scale-x-0 after:origin-center after:transition-transform after:duration-200 hover:after:scale-x-100";

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 border-b border-[rgba(232,224,216,0.75)] backdrop-blur-md transition-all duration-300 ${scrolled || isOpen ? "bg-[rgba(247,245,242,0.95)] shadow-topbar" : "bg-[rgba(247,245,242,0.82)]"
        }`}
    >
      <div className="container-narrow h-[74px] flex items-center justify-between gap-4 tablet:h-[64px]">

        {/* Logo */}
        <Link
          className="font-script text-[2.5rem] leading-none whitespace-nowrap no-underline text-text tablet:text-[2.2rem] relative z-20"
          to="/home"
          onClick={() => setIsOpen(false)}
        >
          Gabriela & Diego
        </Link>

        {/* Desktop Nav */}
        <nav className="flex items-center gap-[1.6rem] tablet:hidden">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `${navLinkBase}${isActive ? " after:scale-x-100 font-medium" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Language Toggle */}
        <div className="tablet:hidden">
          <LanguageToggle />
        </div>

        {/* Hamburger Button (Tablet/Mobile only) */}
        <button
          className="hidden tablet:flex flex-col justify-center items-center w-10 h-10 bg-transparent border-0 cursor-pointer relative z-20"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <div className="relative w-6 h-[18px]">
            <span className={`absolute left-0 w-full h-[2px] bg-text rounded-full transition-all duration-300 ease-in-out ${isOpen ? "top-[8px] rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-[8px] w-full h-[2px] bg-text rounded-full transition-all duration-300 ease-in-out ${isOpen ? "opacity-0 scale-0" : ""}`} />
            <span className={`absolute left-0 w-full h-[2px] bg-text rounded-full transition-all duration-300 ease-in-out ${isOpen ? "top-[8px] -rotate-45" : "top-[16px]"}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-[100%] left-0 w-full bg-[rgba(247,245,242,0.98)] backdrop-blur-xl border-b border-[rgba(232,224,216,0.75)] shadow-soft transition-all duration-300 ease-in-out overflow-hidden hidden tablet:block ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center py-6 px-4 gap-6">
          <nav className="flex flex-col items-center gap-5 w-full">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg text-text font-serif no-underline transition-colors ${isActive ? "font-bold text-[#5d5957]" : ""}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="w-12 h-px bg-line-strong my-1"></div>

          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
