import PrestationHeader from "../PrestationHeader";
import PrestationCard from "../PrestationCard";
import PrestationCategoryName from "../PrestationCategoryName";
import { useState, useEffect } from "react";
import useGet from "../../utils/useGet";

function PrestationPage() {
  const [data, setData] = useState([]);

  useGet("api/realisation", setData);

  console.log("Mes données :", data);

  return (
    <>
      <PrestationHeader />
      {data?.map((el) => {
        return (
          <section>
            <PrestationCategoryName categoryName={el.photo_category_name} />
            {data[0].realisationArticles.map((infos) => (
              <PrestationCard
                key={infos.id}
                index={infos.id}
                URL={infos.URL}
                paragraph={infos.paragraph}
              />
            ))}
          </section>
        );
      })}
    </>
  );
}

export default PrestationPage;
