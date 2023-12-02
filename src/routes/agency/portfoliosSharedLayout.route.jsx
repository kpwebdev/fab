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
        className="t-py-f-8 md:t-py-f-16 lg:t-min-h-[40vh] t-flex t-justify-center t-items-center"
      >
        <div className="container">
          <h2
            className="t-text-f-l md:t-text-f-2xl lg:t-text-f-3xl t-text-f-primary-99 t-text-center"
            style={{ textShadow: "0px 2px 10px rgba(0,0,0,.5)" }}
          >
            From <span className="t-text-green-500">Clicks to Conversions</span>{" "}
            Dive into the Real Work of Our Marketing -{" "}
            <span className="t-text-f-secondary-50">
              Our Results, Your Confidence!
            </span>
          </h2>
        </div>
      </section>
      {/* hero section ends */}

      {/* portfolio navigation section starts */}
      {/* <section>
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
      </section> */}
      {/* portfolio navigation section ends */}
      <section>
        <div className="container t-py-f-16 md:t-py-f-24 lg:t-py-f-48">
          <div className="t-flex t-flex-col t-items-center t-gap-f-16">
            <h3 className="t-text-f-l lg:t-text-f-xl">
              Loading Success Stories
            </h3>
            <h4 className="t-text-f-base lg:t-text-f-l t-text-f-primary-99 t-relative t-p-f-8 t-text-center">
              <span>Our Portfolio Upgrade is in Progress. Stay Tuned!</span>
              <div className="t-bg-f-primary-20 t-absolute t-top-0 t-left-0 t-w-full t-h-full -t-z-10 t-skew-x-12"></div>
            </h4>
          </div>
        </div>
      </section>

      {/* list of portfolio being rendered */}
      {/* <Outlet /> */}
    </>
  );
};

export default PortfolioSharedLayout;
