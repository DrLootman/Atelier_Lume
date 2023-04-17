import Cards from "./Cards";
import firstImgCard from "../assets/Deco_2.jpg";

function HomeCards() {
  return (
    <ul className="home-cards">
      <Cards firstImg={firstImgCard}/>
      <Cards firstImg={firstImgCard}/>
      <Cards firstImg={firstImgCard}/>
    </ul>
  )
}


export default HomeCards;