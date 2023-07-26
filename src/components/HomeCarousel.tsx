import ImageCarousel from "./Carousel";
import { NavLink } from "react-router-dom"
import useTitleOnScroll from "../utils/useTitleOnScroll";
import Photo1 from "../assets/Modelisation_3D_1.jpg";
import Photo2 from "../assets/Modelisation_3D_2.jpg";
import Photo3 from "../assets/Modelisation_3D_3.jpg";
import Photo4 from "../assets/Modelisation_3D_4.jpg";

const images = [
  {
    id: 1,
    URL: Photo1,
    legend: "Maison atypique"
  },
  {
    id: 2,
    URL: Photo2,
    legend: "Appartement témoin"
  },
  {
    id: 3,
    URL: Photo3,
    legend: "Mon cul sur la commode"
  },
  {
    id: 4,
    URL: Photo4,
    legend: "Pourquoi j'existe ?"
  }
]

function HomeCarousel(): JSX.Element {
  const titleClassName = useTitleOnScroll("home-carousel");

  return (
    <div className="home-carousel">
      <h2 className={`home-carousel${titleClassName}`}>Des idées en 3D</h2>
      <ImageCarousel images={images}/>
      <NavLink className="home-carousel_button" to={"/prestations"}>
        En savoir plus
      </NavLink>
    </div>
  )
}

export default HomeCarousel;