import { useState, useEffect } from "react";
import useScroll from "../../utils/useScroll";
import NavLinks from "../navigation/NavLinks";
import logo from "../../assets/Logo-rm-bg.png";

function NavBar(): JSX.Element {
  const className = useScroll();

  return (
    <nav className={className}>
      <img src={logo} alt="logo" />
      <NavLinks />
    </nav>
  );
}

export default NavBar;
