import { Outlet } from "react-router-dom";
import homeBGImage from "../assets/laptop-tablets-and-mobiles-on-desk.png";
// components
// import Home from "./home.route";
import NavigationHome from "../components/navigation/navigationHome.component";

const SharedHome = () => {
  return (
    <div className="p-5 min-vh-100 d-flex flex-column justify-content-between t-relative t-isolate">
      <NavigationHome />
      <Outlet />
      <div className="t-absolute t-top-0 t-left-0 t-w-full t-h-full t-bg-f-primary-10 t-opacity-75 -t-z-10"></div>
      <img
        src={homeBGImage}
        alt="laptop tables and mobiles on desk"
        loading="lazy"
        className="t-w-full t-h-full t-object-cover t-absolute t-top-0 t-left-0 -t-z-20"
      />
    </div>
  );
};

export default SharedHome;
