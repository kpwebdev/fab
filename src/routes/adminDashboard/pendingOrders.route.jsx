import { useOutletContext } from "react-router-dom";

const PendingOrders = () => {
  const { data } = useOutletContext();
  return <div>PendingOrders</div>;
};

export default PendingOrders;
