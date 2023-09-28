// navigation menu list
import { homeNavigationList } from "../../data";
import { NavLink } from "react-router-dom";

const NavigationHome = () => {
  return (
    <nav className="navbar mb-5">
      <div className="container-fluid justify-content-center">
        <div className="" id="navbarNav">
          <ul className="navbar-nav d-flex flex-row justify-content-center gap-5">
            {/* rendering the nav links */}
            {homeNavigationList.map(({ title, href }, idx) => (
              <li className="nav-item" key={idx}>
                <NavLink
                  className="nav-link text-white fs-4"
                  aria-current="page"
                  to={href}
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationHome;
