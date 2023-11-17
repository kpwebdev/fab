import { useOutletContext } from "react-router-dom";

const CompletedOrders = () => {
  const { data } = useOutletContext();
  return <div>CompletedOrders</div>;
};

export default CompletedOrders;
