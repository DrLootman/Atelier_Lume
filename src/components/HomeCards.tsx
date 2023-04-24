import Cards from "./Cards";
import firstImgCard from "../assets/Deco_2.jpg";
import useTitleOnScroll from "../utils/useTitleOnScroll";

function HomeCards() {
  const titleClassName = useTitleOnScroll();
  console.log(titleClassName);

  return (
    <section className="home-cards">
      <h1 className={`home-cards${titleClassName}`}>Mes créations</h1>
      <ul className="home-cards_cards">
        <Cards firstImg={firstImgCard} />
        <Cards firstImg={firstImgCard} />
        <Cards firstImg={firstImgCard} />
      </ul>
      <button type="button" className="home-cards_button">En voir plus</button>
    </section>
  );
}

export default HomeCards;
