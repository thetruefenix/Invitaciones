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

  return (
    <header className={`topbar${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">
        <Link className="brand" to="/home">
          Gabriela & Diego
        </Link>
        <nav className="nav">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => (isActive ? "is-active" : undefined)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <LanguageToggle />
      </div>
    </header>
  );
}
