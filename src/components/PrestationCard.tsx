import deco_1 from "../assets/Deco_1.jpg";

function PrestationCard(): JSX.Element {
  return (
    <div className="prestation-card">
      <img src={deco_1} alt="picture of a home" />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum quia in quibusdam ducimus voluptatem. Iste rerum veritatis neque, dolore fuga repudiandae itaque eveniet sint, nam omnis debitis nisi, assumenda odit?</p>
    </div>
  )
}

export default PrestationCard;