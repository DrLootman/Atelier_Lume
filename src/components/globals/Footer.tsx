import ScrollButton from "../ScrollButton";
import arrow from "../../assets/Arrow.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { BiUpArrowCircle } from "react-icons/bi";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer_informations_list">
        <li>
          <p>Camille BERNARDINI</p>
        </li>
        <li>
          <p>06 - 64 - 24 - 39 - 73</p>
        </li>
        <li>
          <p>latelierlume@gmail.com</p>
        </li>
      </ul>

      <ul className="footer_icons_list">
        <li>
          <NavLink to="https://www.facebook.com">
            <FaFacebook />
          </NavLink>
        </li>
        <li>
          <NavLink to="https://www.instagram.com/latelierlume?igshid=YTQwZjQ0Nml0OA==">
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
        <BiUpArrowCircle size={70} />
      </div>
    </footer>
  );
}

export default Footer;
