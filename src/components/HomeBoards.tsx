import useTitleOnScroll from "../utils/useTitleOnScroll";
import PlancheInspi1 from "../assets/PlancheInspi1.jpg";
import PlancheInspi2 from "../assets/PlancheInspi2.jpg";

export default function HomeBoards() {

  return (
    <>
      <h2 className={`home-boards_title`}>Planches d'inspiration et de mobilier</h2>

      <ul className="home_boards">
        <li>
          <img src={PlancheInspi1} alt="Première planche d'inspiration" />
        </li>
        <li>
          <img src={PlancheInspi2} alt="Seconde planche d'inspiration" />
        </li>
      </ul>
    </>
  )
}