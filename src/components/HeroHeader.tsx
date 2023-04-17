import img from "../assets/Deco_1.jpg";
import ScrollButton from "./ScrollButton";

function HeroHeader() {
  return (
    <header className="hero-header">
      <img src={img} alt="main banner that represents a home" />
      <h1>Atelier Lume</h1>
      <h2>Décoratrice d'intérieur</h2>
      <ScrollButton />
    </header>
  )
}

export default HeroHeader;