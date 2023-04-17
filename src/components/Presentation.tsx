import avatar from "../assets/Profile_Img.jpg";

function Presentation() {
  return (
    <section className="presentation">
      <img src={avatar} alt="avatar" />
      <p>
        Je suis Camille, une décoratrice d'intérieur passionnée par
        l'aménagement et la mise en scène des espaces de vie. J'ai récemment
        obtenu mon diplôme en architecture intérieure et j'ai depuis travaillé
        avec différents clients pour créer des designs intérieurs sur mesure qui
        répondent à leurs besoins et reflètent leur personnalité.
      </p>
    </section>
  );
}

export default Presentation;
