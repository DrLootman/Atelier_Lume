import PrestationHeader from "../PrestationHeader";
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
      <PrestationHeader />
      {data?.map((el: CategoryWithRealisationArticlesI) => {
        return (
          <section>
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
