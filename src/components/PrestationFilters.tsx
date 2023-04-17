import { IoSearchOutline } from "react-icons/io5";
import { BsFilter } from 'react-icons/bs';

function PrestationFilters(): JSX.Element {
  return (
    <section className="prestation-header">
      <h1>
        Mes prestations
      </h1>

      <ul className="prestation-header_filters">
        <li>
          <IoSearchOutline className="loupe" />
          <select name="selector">
            <option value="">Selectionnez</option>
            <option value="Pâté 2">Pâté 2</option>
          </select>
        </li>

        <li>
          <BsFilter className="loupe" />
          <select name="selector">
            <option value="">Selectionnez</option>
            <option value="Pâté 2">Pâté 2</option>
          </select>
        </li>
      </ul>
    </section>
  );
}

export default PrestationFilters;
