import { NavLink } from "react-router-dom";
import FabLogo from "../../assets/fab-log-blue-trasparent.png";

import { offcanvasPageLinks, offcanvasOptionsLinks } from "../../data";
const DashboardNavbar = () => {
  return (
    <div
      className="offcanvas offcanvas-start show t-h-screen t-w-1/3 t-sticky t-top-0"
      data-bs-scroll="true"
      data-bs-backdrop="false"
      tabIndex="-1"
      id="offcanvasScrolling"
      aria-labelledby="offcanvasScrollingLabel"
    >
      <header className="offcanvas-header t-flex t-items-start t-flex-col t-gap-f-16">
        <img
          src={FabLogo}
          alt="Fab Digital Marketing Logo"
          className="t-w-f-120"
        />
        <h5 className="t-text-f-l">Dashboard</h5>
      </header>
      <div className="offcanvas-body t-flex t-flex-col t-justify-between">
        {/* page links container */}
        <ul className="t-flex t-flex-col">
          {offcanvasPageLinks.map(({ path, Icon, title }, idx) => (
            <li key={idx}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "t-flex t-gap-f-8 t-text-f-md t-px-f-8 t-rounded-f-8 t-py-f-16 t-text-f-primary-99 t-bg-f-primary-30"
                    : "t-flex t-gap-f-8 t-text-f-md t-px-f-8 t-rounded-f-8 t-py-f-16 hover:t-bg-f-primary-90"
                }
              >
                <Icon /> <span>{title}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* relative links container */}
        <ul className="t-flex t-flex-col t-gap-f-16">
          {offcanvasOptionsLinks.map(({ path, Icon, title }, idx) => (
            <li key={idx}>
              <NavLink to={path} className="t-flex t-gap-f-8 t-text-f-md">
                <Icon /> <span>{title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardNavbar;
