import { NavLink } from "react-router-dom";
import { useState } from "react";
import Cards from "./Cards";
import firstImgCard from "../assets/Deco_2.jpg";
import useTitleOnScroll from "../utils/useTitleOnScroll";
import useGet from "../utils/useGet";
import { ImageUrlI } from "../utils/interfaces/interfaces";
import { useConfirm } from "./confirmModal/ConfirmContext";

function HomeCards() {
  const [imageUrl, setImageUrl] = useState<ImageUrlI[]>([]);

  useGet<ImageUrlI>("api/creation", setImageUrl);

  const titleClassName = useTitleOnScroll("home-cards");

  return (
    <section className="home-cards">
      <h2 className={`home-cards${titleClassName}`}>Mes créations</h2>

      <ul className="home-cards_cards">
        {imageUrl?.map((el): JSX.Element => {
          return <Cards photo_url={el.photo_url} label={el.label} key={el.id} />;
        })}
      </ul>
      
      <NavLink className="home-cards_button" to={"/realisations"}>
        En voir plus
      </NavLink>
    </section>
  );
}

export default HomeCards;
