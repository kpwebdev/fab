import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { myProfileLinks } from "../../data";

const MyProfileSharedLayout = () => {
  return (
    <section>
      <header className="t-flex t-justify-between">
        <h3 className="t-text-f-3xl">My Profile</h3>
        <button className="f-btn-lg f-btn-primary">Change account</button>
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
