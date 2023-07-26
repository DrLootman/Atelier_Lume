import { CategoryNameI } from "../utils/interfaces/prestation";

function PrestationCategoryName({ categoryName }: { categoryName: string }) {
  return (
    <h2 id="prestation_category_name">{categoryName}</h2>
  )
}

export default PrestationCategoryName;