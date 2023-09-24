import PrestationHeader from "../HeaderTitle";
import PrestationCard from "../PrestationCard";
import PrestationCategoryName from "../PrestationCategoryName";
import { useState, useEffect } from "react";
import useGet from "../../utils/useGet";
import {
  CategoryWithRealisationArticlesI,
  RealisationArticleI,
} from "../../utils/interfaces/interfaces";

function PrestationPage() {
  const [data, setData] = useState<CategoryWithRealisationArticlesI[]>([]);

  useGet<CategoryWithRealisationArticlesI>("api/realisation", setData);

  return (
    <>
      <PrestationHeader title={"Mes réalisations"} />
      {data?.map((el: CategoryWithRealisationArticlesI) => {
        return (
          <section key={el.id}>
            <PrestationCategoryName categoryName={el.photo_category_name} />
            {el.realisationArticles.map((infos: RealisationArticleI): JSX.Element => (
                    <PrestationCard
                      key={infos.id}
                      index={infos.id}
                      URL={infos.URL}
                      paragraph={infos.paragraph}
                    />
                )
            )}
          </section>
        );
      })}
    </>
  );
}

export default PrestationPage;
