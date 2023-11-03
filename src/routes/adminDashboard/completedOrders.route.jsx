import { useOutletContext } from "react-router-dom";

const CompletedOrders = () => {
  const { data } = useOutletContext();
  console.log("log from AllOrders", data);
  return <div>CompletedOrders</div>;
};

export default CompletedOrders;
