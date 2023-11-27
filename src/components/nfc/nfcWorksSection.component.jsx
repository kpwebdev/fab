import { nfcSteps } from "../../data";

const NfcWorksSection = () => {
  return (
    <section className="t-min-h-screen t-mt-f-96">
      <div className="container">
        <h2 className="t-text-f-3xl">How Fab Tap Works ?</h2>
        {/* steps container */}
        <div className="t-flex t-flex-col t-my-f-48 t-gap-f-144">
          {nfcSteps.map(({ img, title, subtitle }, idx) => (
            <div key={idx} className="t-grid t-grid-cols-3 t-items-center">
              <img
                src={img}
                alt={`image for ${title}`}
                className={`t-h-[500px] ${idx % 2 !== 0 ? " t-order-3" : ""}`}
              />
              <div
                className={`t-flex t-flex-col t-self-stretch t-items-center${
                  idx % 2 !== 0 ? " t-order-2" : ""
                }`}
              >
                <span className="t-text-f-primary-10">{`0${idx + 1}.`}</span>
                <span className="t-block t-w-f-2 t-flex-grow t-bg-f-primary-90"></span>
              </div>
              <header className={`${idx % 2 !== 0 ? " t-order-1" : ""}`}>
                <h3 className="t-text-f-2xl t-mb-f-16">{title}</h3>
                {Array.isArray(subtitle) ? (
                  <h4 className="t-text-f-base">
                    {subtitle[0]}{" "}
                    <span className="t-font-bold">{subtitle[1]}</span>
                  </h4>
                ) : (
                  <h4 className="t-text-f-base">{subtitle}</h4>
                )}
              </header>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NfcWorksSection;
