import { PrestationCardI } from "../utils/interfaces/prestation";

function PrestationCard({ index, URL, paragraph }: PrestationCardI): JSX.Element {
  return (
    <ul className={index % 2 === 0 ? "prestation-card" : "prestation-card_reverse"}>
        <li>
          <img src={`http://localhost:8000${URL}`} alt="picture of a home" />
        </li>
        <li>
          <p>{paragraph}</p>
        </li>
    </ul>
  )
}

export default PrestationCard;