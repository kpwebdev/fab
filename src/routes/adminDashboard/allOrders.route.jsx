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
