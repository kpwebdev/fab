import { nfcCards } from "../../data";
import { BsArrowRight } from "react-icons/bs";
import { PiCurrencyInrLight } from "react-icons/pi";

const NfcMarketPlace = () => {
  return (
    <section className="t-min-h-screen t-py-f-48">
      <div className="container">
        <header className="t-mb-f-24">
          <h2 className="t-text-f-l md:t-text-f-xl lg:t-text-f-2xl">
            Choose Your Design
          </h2>
        </header>

        {/* cards container */}
        <div className="t-grid md:t-grid-cols-3 t-gap-x-f-24 t-gap-y-f-48">
          {nfcCards.map(
            (
              { img, creator, cardName, description, price, btn, target },
              idx
            ) => (
              <article className="t-flex t-flex-col t-gap-f-24" key={idx}>
                {/* img container */}
                <div className="t-overflow-hidden">
                  <img
                    src={img}
                    alt={`Picture of ${cardName}`}
                    className="t-rounded-f-8"
                  />
                </div>
                {/* text container */}
                <div className="t-flex t-flex-col t-gap-f-8">
                  <h4 className="t-flex t-justify-between t-text-f-base md:t-text-f-md lg:t-text-f-l">
                    {cardName} {/* <BsArrowRight /> */}
                  </h4>
                  <p className="t-text-f-sm lg:t-text-f-base">{description}</p>
                  {price && (
                    <span className="t-flex t-items-center t-font-bold t-text-f-sm md:t-text-f-base lg:t-text-f-md">
                      {`${price} KD`}
                    </span>
                  )}
                  {btn && target && (
                    <button
                      type="button"
                      className="f-btn-sm lg:f-btn-md f-btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#contactInfo"
                    >
                      Contact Us
                    </button>
                  )}
                </div>
              </article>
            )
          )}
        </div>

        {/* btns container */}
        {/* <div className="t-flex t-justify-end t-gap-f-24 t-my-f-48">
          <button className="f-btn-md f-btn-primary-outline">
            Create Shop
          </button>

          <button className="f-btn-md f-btn-primary">Go to Shop</button>
        </div> */}
      </div>
    </section>
  );
};

export default NfcMarketPlace;
