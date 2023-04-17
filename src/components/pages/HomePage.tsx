import HeroHeader from "../HeroHeader";
import Presentation from "../Presentation";
import HomeCards from "../HomeCards";
import HomeCarousel from "../HomeCarousel";

function HomePage(): JSX.Element {
  return (
    <>
      <HeroHeader />
      <Presentation />
      <HomeCards />
      <HomeCarousel />
    </>
  )
}

export default HomePage;
