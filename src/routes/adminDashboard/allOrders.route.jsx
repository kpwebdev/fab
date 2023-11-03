import { useOutletContext } from "react-router-dom";
import CardOrderTable from "../../components/cardOrderTable.component";

const AllOrders = () => {
  const { data } = useOutletContext();
  console.log("log from AllOrders", data);
  return (
    <div>
      <ul>
        {data
          .filter(({ card }) => card !== null)
          .map(({ card }, idx) => {
            console.log("card from map method", card);
            return (
              <li key={idx}>
                <CardOrderTable card={card} />;
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default AllOrders;
