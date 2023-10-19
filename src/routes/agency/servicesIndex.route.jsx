import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useState, useReducer } from "react";
import defaultBg from "../../assets/fab-agency-services-default.png";
import { fabAgencyServices } from "../../data";

const defaultBgObj = {
  background: `linear-gradient(rgba(0,0,0, .75), rgba(0,0,0, .75)), url(${defaultBg})`,
  backgroundBlendMode: "multiply",
};

const ServicesIndex = () => {
  const [bgObj, setBgObj] = useState(defaultBgObj);

  return (
    <section
      style={bgObj}
      className="t-bg-cover t-transition-all t-duration-300 services-section"
    >
      <div className="container t-py-f-16 t-text-white">
        <h2 className="t-uppercase t-my-f-24 t-font-bold">
          Services we provide
        </h2>
        <ul className="t-flex t-flex-col t-min-h-[88vh] t-gap-f-96 t-text-f-3xl">
          {fabAgencyServices.map(
            ({ id, title, pageHref, overLay, bgImage }) => {
              const newBgObj = {
                background: `${overLay}, url(${bgImage})`,
                backgroundBlendMode: "multiply",
              };
              return (
                <li key={id}>
                  <Link
                    className="t-flex t-items-center t-gap-f-16 hover:t-pl-f-48 t-transition-all t-duration-300 fab-agency-service-link"
                    to={pageHref}
                    onMouseEnter={() => {
                      setBgObj(newBgObj);
                    }}
                    onMouseLeave={() => setBgObj(defaultBgObj)}
                  >
                    {title}
                    <BsArrowRight className="fab-agency-service-link-arrow" />
                  </Link>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </section>
  );
};

export default ServicesIndex;
