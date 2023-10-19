import { Outlet, NavLink } from "react-router-dom";
import portfolioBanner from "../../assets/portfolio-banner-image.png";
import { fabAgencyPortfolios } from "../../data";

const PortfolioSharedLayout = () => {
  return (
    <>
      {/* hero section starts */}
      <section
        style={{
          background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.25)), url(${portfolioBanner})`,
          backgroundSize: "cover",
        }}
        className="t-min-h-[40vh] t-flex t-justify-center t-items-center"
      >
        <div className="container">
          <h2
            className="t-text-f-4xl t-text-f-primary-99 t-text-center"
            style={{ textShadow: "0px 2px 10px rgba(0,0,0,.5)" }}
          >
            Explore our showcase of creativity, where{" "}
            <span className="t-text-green-500">excellence</span> meets{" "}
            <span className="t-text-f-secondary-50">inspiration!</span>
          </h2>
        </div>
      </section>
      {/* hero section ends */}

      {/* portfolio navigation section starts */}
      <section>
        <div className="container">
          <ul className="t-flex t-justify-between t-text-f-l t-my-f-48">
            {fabAgencyPortfolios.map(({ id, title, pageHref }) => (
              <li key={id}>
                <NavLink
                  to={pageHref}
                  className={({ isActive }) =>
                    isActive ? "t-text-f-primary-50" : ""
                  }
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* portfolio navigation section ends */}

      {/* list of portfolio being rendered */}
      <Outlet />
    </>
  );
};

export default PortfolioSharedLayout;
