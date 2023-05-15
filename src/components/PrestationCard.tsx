import deco_1 from "../assets/Deco_1.jpg";

function PrestationCard({ index }: number): JSX.Element {
  return (
    <ul className={index % 2 === 0 ? "prestation-card" : "prestation-card_reverse"}>
        <li>
          <img src={deco_1} alt="picture of a home" />
        </li>
        <li>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum quia in quibusdam ducimus voluptatem. Iste rerum veritatis neque, dolore fuga repudiandae itaque eveniet sint, nam omnis debitis nisi, assumenda odit?</p>
        </li>
    </ul>
  )
}

export default PrestationCard;