import { nfcFeatures } from "../../data";
import Lottie from "lottie-react";

const NfcFeatures = () => {
  return (
    <section className="t-bg-f-primary-95 t-py-f-96">
      <div className="container">
        <header className="t-mb-f-80 t-text-center">
          <h2 className="t-text-f-3xl t-mb-f-40">What we provide?</h2>
          <p>
            Your affordable source for NFC cards. Personalize your own card to
            showcase your style. Plus, become a designer in our shop, selling
            your creations worldwide and earning money. Embrace NFC innovation
            today!
          </p>
        </header>
        {/* features container */}
        <div className="t-flex t-flex-col t-gap-f-88">
          {nfcFeatures.map(({ title, description, btn, animation }, idx) => (
            <div key={idx}>
              {/* feature 1 */}
              <div
                className={`t-flex t-gap-f-48 ${
                  idx % 2 !== 0 ? " t-flex-row-reverse" : ""
                }`}
              >
                {/* text container */}
                <div className="t-flex t-flex-col t-gap-f-24 t-items-start">
                  <h3 className="t-text-f-2xl">{title}</h3>
                  <p className="t-text-f-base">{description}</p>
                  <button className="t-text-f-md t-px-f-16 t-py-f-8 t-bg-f-primary-30 t-text-f-primary-98 t-rounded-f-8 hover:t-bg-f-primary-20">
                    {btn}
                  </button>
                </div>
                {/* animation container */}
                <div>
                  <Lottie animationData={animation} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NfcFeatures;
