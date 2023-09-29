import { nfcSteps } from "../../data";

const NfcWorksSection = () => {
  return (
    <section className="t-mt-f-96">
      <div className="container">
        <h2 className="t-text-f-3xl ">How it works?</h2>
        {/* steps container */}
        <div className="t-flex t-flex-col t-my-f-48 t-gap-f-48">
          {nfcSteps.map(({ img, title, subtitle }, idx) => (
            <div
              key={idx}
              className={`t-flex t-justify-between${
                idx % 2 !== 0 ? " t-flex-row-reverse" : ""
              }`}
            >
              <img src={img} alt={`image for ${title}`} />
              <div className="t-flex t-flex-col t-items-center">
                <span className="t-text-f-primary-10">{`0${idx + 1}.`}</span>
                <span className="t-block t-w-f-2 t-flex-grow t-bg-f-primary-90"></span>
              </div>
              <header>
                <h3 className="t-text-f-2xl t-mb-f-16">{title}</h3>
                <h4 className="t-text-f-base">{subtitle}</h4>
              </header>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NfcWorksSection;
