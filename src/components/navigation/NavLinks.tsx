import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/tarifs", label: "Prestations / Tarifs" },
  { to: "/contact", label: "Contact" },
  { to: "/admin", label: "Admin" }
];

const activeStyle = {
  fontWeight: "bold"
}

function NavLinks(): JSX.Element {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("UserContext not properly initialized")
  }

  const { user } = userContext;

  return (
    <ul className="nav-links">
      {navLinks.map((link) => {
        if (link.label === "Admin" && !user) {
          return null;
        }

        return (
          <li key={link.label}>
            <NavLink
              to={link.to}
              end
              style={({ isActive }) => isActive ? activeStyle : {}}
            >
              {link.label}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default NavLinks;
