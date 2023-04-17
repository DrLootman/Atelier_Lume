import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/prestations", label: "Prestations" },
  { to: "/planches", label: "Planches" },
  { to: "/contact", label: "Contact" },
];

function NavLinks(): JSX.Element {
  return (
    <ul className="nav-links">
      {navLinks.map((link) => {
        return (
          <li key={link.label}>
            <NavLink to={link.to} >
              {link.label}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default NavLinks;
