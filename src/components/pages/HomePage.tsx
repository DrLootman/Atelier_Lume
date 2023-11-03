import HeroHeader from "../HeroHeader";
import Presentation from "../Presentation";
import HomeCards from "../HomeCards";
import HomeCarousel from "../HomeCarousel";
import useGet from "../../utils/useGet";
import { useState } from "react";
import { PersonnalInfosI } from "../../utils/interfaces/interfaces";
import HomeBoards from "../HomeBoards";

function HomePage(): JSX.Element {
  const [personnalInfos, setPersonnalInfos] = useState<PersonnalInfosI[]>([]);

  useGet("api/personnalInfos", setPersonnalInfos);

  return (
    <>
      <HeroHeader />
      {personnalInfos.length > 0 &&
        <Presentation 
          photo_url={personnalInfos[0].photo_url}
          profile_paragraph={personnalInfos[0].profile_paragraph}
        />
      }
      <HomeCards />
      <HomeBoards />
      <HomeCarousel />
    </>
  )
}

export default HomePage;
