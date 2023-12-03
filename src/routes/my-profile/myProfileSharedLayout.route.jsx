import { Link, NavLink, useOutletContext } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { myProfileLinks } from "../../data";

const MyProfileSharedLayout = () => {
  return (
    <section>
      <header className="t-flex t-items-center t-justify-between">
        <h3 className="t-text-f-l md:t-text-f-xl lg:t-text-f-2xl xl:t-text-f-3xl">
          My Profile
        </h3>
        <Link
          className="f-btn-sm md:f-btn-md xl:f-btn-lg f-btn-primary"
          to="/nfc/authentication/login"
        >
          Change account
        </Link>
      </header>

      {/* Profile links */}
      <ul className="t-flex t-gap-f-24 t-py-f-16">
        {myProfileLinks.map(({ path, title }, idx) => (
          <li key={idx}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "t-border-b-2 t-border-f-primary-40 t-py-f-8"
                  : "t-border-b-2 t-border-transparent t-py-f-8 hover:t-border-f-primary-70"
              }
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* children rendering region */}
      <div className="t-p-f-16 t-rounded-f-8">
        <Outlet />
      </div>
    </section>
  );
};

export default MyProfileSharedLayout;
