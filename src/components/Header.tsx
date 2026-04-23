import { NavLink, Link } from "react-router-dom";
import useScrolled from "../hooks/useScrolled";

const links: { to: string; label: string }[] = [
  { to: "/home", label: "Home" },
  { to: "/detalles", label: "Detalles" },
  { to: "/regalos", label: "Regalos" },
  { to: "/confirma", label: "Confirmación" },
];

export default function Header() {
  const scrolled = useScrolled(10);

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
      </div>
    </header>
  );
}
