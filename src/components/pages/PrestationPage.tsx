import PrestationHeader from "../PrestationHeader";
import PrestationCard from "../PrestationCard";
import PrestationCategoryName from "../PrestationCategoryName";

const tab = [1, 2, 3, 4, 5, 6];

function PrestationPage() {
  return (
    <>
    {tab.map((el) => {
      return (
        <section>
          <PrestationHeader />
          <PrestationCategoryName />
          {tab.map((el) => (
            <PrestationCard key={el} index={el} />
          ))}
        </section>

      )
    })
    }
    </>
  );
}

export default PrestationPage;
