import React from "react";
import { useParams } from "react-router-dom";
import { fabAgencyPortfolios } from "../../data";

const Portfolio = () => {
  const { id } = useParams();
  const currentPortfolio = fabAgencyPortfolios.find(
    (portfolio) => id === portfolio.id
  );
  const { id: portfolioId, title, portfolioList } = currentPortfolio;

  return (
    <section>
      <div className="container">
        {portfolioList.map(({ heading, list }, idx) => {
          return (
            <div key={idx} className="t-mb-f-48">
              <h3 className="t-text-f-base t-text-slate-400 t-font-bold t-mb-f-8">
                {heading}
              </h3>
              <ul
                className={`t-grid t-gap-f-24${
                  id === "performance-marketing"
                    ? " t-grid-cols-1 t-grid-rows-2"
                    : id === "websites"
                    ? " t-grid-cols-2"
                    : " t-grid-cols-3"
                }`}
              >
                {list.map(({ title, description, img }, idx) => (
                  <li key={idx}>
                    {/* image container */}
                    <div className="t-mb-f-8">
                      <img
                        src={img}
                        alt={`Product image of ${title}`}
                        className="t-w-full"
                      />
                    </div>
                    {/* text container */}
                    <div>
                      <h4 className="t-text-f-md t-font-bold">{title}</h4>
                      <p className="t-text-f-base">{description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
