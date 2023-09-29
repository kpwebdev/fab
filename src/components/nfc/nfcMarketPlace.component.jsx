import { nfcCards } from "../../data";
import { BsArrowRight } from "react-icons/bs";
import { PiCurrencyInrLight } from "react-icons/pi";

const NfcMarketPlace = () => {
  return (
    <section className="t-min-h-screen t-py-f-96">
      <div className="container">
        <header className="t-mb-f-24">
          <h2 className="t-text-f-3xl">Our Marketplace</h2>
          <h3 className="t-text-f-base t-font-extralight">Explore Our Shop</h3>
        </header>

        {/* cards container */}
        <div className="t-grid t-grid-cols-3 t-gap-x-f-24 t-gap-y-f-48">
          {nfcCards.map(
            ({ img, creator, cardName, description, price }, idx) => (
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
                  <h6 className="t-text-f-sm t-font-light">{creator}</h6>
                  <h4 className="t-flex t-justify-between t-text-f-l">
                    {cardName} <BsArrowRight />
                  </h4>
                  <p className="t-text-f-base">{description}</p>
                  <span className="t-flex t-items-center t-font-bold t-text-f-md">
                    <PiCurrencyInrLight /> {`${price}/-`}
                  </span>
                </div>
              </article>
            )
          )}
        </div>

        {/* btns container */}
        <div className="t-flex t-justify-end t-gap-f-24 t-my-f-48">
          <button className="t-text-f-md t-px-f-16 t-py-f-8 t-border-f-primary-30 t-border-2 t-text-f-primary-93 t-rounded-f-8 hover:t-bg-f-primary-20 hover:t-text-f-primary-98">
            Create Shop
          </button>

          <button className="t-text-f-md t-px-f-16 t-py-f-8 t-bg-f-primary-30 t-text-f-primary-98 t-rounded-f-8 hover:t-bg-f-primary-20">
            Go to Shop
          </button>
        </div>
      </div>
    </section>
  );
};

export default NfcMarketPlace;
