import { useState } from "react";
import CarouselContainer from "./CarouselContainer";
import { NavLink } from "react-router-dom"
import useTitleOnScroll from "../utils/useTitleOnScroll";
import useGet from "../utils/useGet";
import { InspirationImageI } from "../utils/interfaces/interfaces";
// import { Carousel } from "react-responsive-carousel";

function HomeCarousel(): JSX.Element {
  const [data, setData] = useState<InspirationImageI[]>([]);
  
  useGet("api/inspiration", setData);
  
  const titleClassName = useTitleOnScroll("home-carousel");
  return (
    <div className="home-carousel">
      <h2 className={`home-carousel${titleClassName}`}>Des idées en 3D</h2>

      {data.length &&
        <CarouselContainer data={data} />
      }
      
      <NavLink className="home-carousel_button" to={"/realisations"}>
        En savoir plus
      </NavLink>
    </div>
  )
}

export default HomeCarousel;