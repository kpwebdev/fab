import { Outlet } from "react-router-dom";

// components
// import Home from "./home.route";
import NavigationHome from "../components/navigation/navigationHome.component";

const SharedHome = () => {
  return (
    <div className="bg-container-with-img min-vh-100 d-flex flex-column justify-content-between p-5">
      <NavigationHome />
      <Outlet />
    </div>
  );
};

export default SharedHome;
