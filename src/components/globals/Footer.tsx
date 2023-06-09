import ScrollButton from "../ScrollButton";
import arrow from "../../assets/Arrow.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer_informations_list">
        <li>
          <p>Camille BERNARDINI</p>
        </li>
        <li>
          <p>06 - ?? - ?? - ?? - ??</p>
        </li>
        <li>
          <p>camillebernardini@hotmail.com</p>
        </li>
      </ul>

      <ul className="footer_icons_list">
        <li>
          <NavLink to="https://www.facebook.com">
            <FaFacebook />
          </NavLink>
        </li>
        <li>
          <NavLink to="https://www.instagram.com">
            <AiFillInstagram />
          </NavLink>
        </li>
        <li>
          <NavLink to="https://www.twitter.com">
            <AiFillTwitterCircle />
          </NavLink>
        </li>
      </ul>

      <div className="footer_scroll_top">
        <h1>Youpi</h1>
      </div>
    </footer>
  );
}

export default Footer;
