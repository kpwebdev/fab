import { useOutletContext } from "react-router-dom";
import CardOrderTable from "../../components/cardOrderTable.component";

const AllOrders = () => {
  const { data } = useOutletContext();
  return (
    <div>
      <ul>
        {data
          .filter(({ card }) => card !== null)
          .map(({ card }, idx) => {
            return (
              <li key={idx} className="t-bg-f-primary-99 t-p-f-8 t-rounded-f-8">
                <CardOrderTable card={card} />
                <div className="t-flex t-gap-f-8 t-mt-f-16">
                  <a
                    href={card.cardImageFront}
                    target="_blank"
                    className="f-btn-sm f-btn-primary"
                    // download={`${data.fullName
                    //   .trim()
                    //   .split(" ")
                    //   .join("-")}-card-front.png`}
                    download="card-front.png"
                  >
                    Download Front
                  </a>
                  <a
                    href={card.cardImageBack}
                    target="_blank"
                    className="f-btn-sm f-btn-primary"
                    // download={`${data.fullName
                    //   .trim()
                    //   .split(" ")
                    //   .join("-")}-card-back.png`}
                    download="card-back.png"
                  >
                    Download Back
                  </a>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default AllOrders;
