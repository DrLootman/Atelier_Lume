import Cards from "./Cards";
import firstImgCard from "../assets/Deco_2.jpg";
import useTitleOnScroll from "../utils/useTitleOnScroll";
import { NavLink } from "react-router-dom";

function HomeCards() {
  const titleClassName = useTitleOnScroll("home-cards");

  return (
    <section className="home-cards">
      <h2 className={`home-cards${titleClassName}`}>Mes créations</h2>
      <ul className="home-cards_cards">
        <Cards firstImg={firstImgCard} />
        <Cards firstImg={firstImgCard} />
        <Cards firstImg={firstImgCard} />
      </ul>
      <NavLink className="home-cards_button" to={"/prestations"}>
        En voir plus
      </NavLink>
    </section>
  );
}

export default HomeCards;
