import { nfcSteps } from "../../data";

const NfcWorksSection = () => {
  return (
    <section className="t-my-f-96" id="howItWorks">
      <div className="container">
        <h2 className="t-text-f-l md:t-text-f-xl lg:t-text-f-2xl">
          How Fab Tap Works ?
        </h2>
        {/* steps container */}
        <div className="t-flex t-flex-col t-my-f-16 md:t-my-f-24 lg:t-my-f-48 t-gap-f-16 sm:t-gap-f-24 md:t-gap-f-48">
          {nfcSteps.map(({ img, subSteps }, idx) => (
            <div
              key={idx}
              className="t-grid sm:t-grid-cols-2 sm:t-gap-f-48 md:t-gap-0 md:t-grid-cols-3 t-items-center"
            >
              <img
                src={img}
                alt={`image for step`}
                className={`t-h-[500px] t-object-contain t-hidden sm:t-block ${
                  idx % 2 !== 0 ? " t-order-3" : ""
                }`}
              />
              <div
                className={`md:t-flex t-flex-col t-self-stretch t-hidden t-items-center${
                  idx % 2 !== 0 ? " t-order-2" : ""
                }`}
              >
                <span className="t-text-f-primary-10">{`0${idx + 1}.`}</span>
                <span className="t-block t-w-f-2 t-flex-grow t-bg-f-primary-90"></span>
              </div>
              <div
                className={`t-flex t-flex-col t-gap-f-16 ${
                  idx % 2 !== 0 ? " t-order-1" : ""
                }`}
              >
                {subSteps.map(({ title, description, num }, idx) => (
                  <div key={idx}>
                    <h3 className="t-text-f-base md:t-text-f-md lg:t-text-f-l t-mb-f-16">
                      {`${num})`} {title}
                    </h3>
                    {Array.isArray(description) ? (
                      <h4 className="t-text-f-sm lg:t-text-f-base">
                        {description[0]}{" "}
                        <span className="t-font-bold">{description[1]}</span>
                      </h4>
                    ) : (
                      <h4 className="t-text-f-base">{description}</h4>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="t-text-f-base lg:t-text-f-md">
          Make connections effortlessly and instantly connect on multiple social
          platforms.
        </p>
      </div>
    </section>
  );
};

export default NfcWorksSection;
