import { useState } from "react";
import CarouselContainer from "./CarouselContainer";
import { NavLink } from "react-router-dom"
import useTitleOnScroll from "../utils/useTitleOnScroll";
import useGet from "../utils/useGet";
import { InspirationImageI } from "../utils/interfaces/interfaces";
import { Carousel } from "react-responsive-carousel";

function HomeCarousel(): JSX.Element {
  const [data, setData] = useState<InspirationImageI[]>([]);
  const titleClassName = useTitleOnScroll("home-carousel");

  useGet("api/inspiration", setData);

  return (
    <div className="home-carousel">
      <h2 className={`home-carousel${titleClassName}`}>Des idées en 3D</h2>

      <CarouselContainer data={data} />

      <NavLink className="home-carousel_button" to={"/prestations"}>
        En savoir plus
      </NavLink>
    </div>
  )
}

export default HomeCarousel;