import { useOutletContext } from "react-router-dom";

const PendingOrders = () => {
  const { data } = useOutletContext();
  console.log("log from AllOrders", data);
  return <div>PendingOrders</div>;
};

export default PendingOrders;
