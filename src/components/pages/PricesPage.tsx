import HeaderTitle from "../HeaderTitle";

export default function PricesPage() {
  return (
    <>
      <HeaderTitle title="Mes Prestations" />

      <ul className="prestations_list">
          <li>
            <article>
              <h2>Visite Conseil</h2>
              <h3>120 €</h3>
              <p>RDV 1H30 (physique ou visio)</p>
              <p>Discussion autour de votre projet. Conseils pour réaménager une pièce, pour disposer, agencer différemment un espace. Conseils quant au choix des matériaux, proposition de coloris de peinture, idées pour cloisonner ou décloisonner un espace sans travaux...</p>
            </article>
          </li>
          <li>
            <article>
              <h2>E-book déco</h2>
              <h3>260 €</h3>
              <p>Plusieurs rendez-vous</p>
              <p>Discussion autour de votre projet, compte rendu de notre échange et de votre projet par écrit, réalisation d'une planche inspiration / décoration, d'une planche matériaux, d'une planche mobilier.</p>
            </article>
          </li>
          <li>
            <article>
              <h2>Agencement, décoration et visuel 3D</h2>
              <h3>570 €</h3>
              <p>Plusieurs rendez-vous</p>
              <p>Prestation identique à la deuxième, avec une shopping liste, des vues en modélisation 3D par pièce pour avoir une idée concrète du rendu.</p>
            </article>
          </li>
          <li>
            <article>
              <h2>La shopping liste</h2>
              <h3>150 €</h3>
              <p>Sans rendez-vous</p>
              <p>Je donne vie à vos inspirations. A partir de photos de décoration qui vous plaisent et que vous me faites parvenir, j'établis une liste shopping déco complète en fonction de votre budget, avec les références des produits, leurs prix et le coût global.</p>
            </article>
          </li>
        </ul>
    </>
  )
}