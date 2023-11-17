import { nfcFeatures } from "../../data";
import Lottie from "lottie-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider.context";

const NfcFeatures = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <section className="t-bg-f-primary-95 t-py-f-48">
      <div className="container">
        <header className="t-text-center">
          <h2 className="t-text-f-3xl t-mb-f-40">What we provide?</h2>
          <p>
            Your affordable source for NFC cards. Personalize your own card to
            showcase your style. Plus, become a designer in our shop, selling
            your creations worldwide and earning money. Embrace NFC innovation
            today!
          </p>
        </header>
        {/* features container */}
        <div className="t-flex t-flex-col t-gap-f-8">
          {nfcFeatures.map(({ title, description, text, animation }, idx) => (
            <div className={`t-grid t-grid-cols-2 t-items-center`} key={idx}>
              {/* text container */}
              <div
                className={`t-flex t-flex-col t-gap-f-24 t-items-start${
                  idx % 2 !== 0 ? " t-order-2" : ""
                }`}
              >
                <h3 className="t-text-f-2xl">{title}</h3>
                <p className="t-text-f-base">{description}</p>
                <Link
                  to={
                    currentUser ? "/nfc/dashboard" : "/nfc/authentication/login"
                  }
                  className="t-text-f-md t-px-f-16 t-py-f-8 t-inline-block t-bg-f-primary-30 t-text-f-primary-98 t-rounded-f-8 hover:t-bg-f-primary-20"
                >
                  {text}
                </Link>
              </div>
              {/* animation container */}
              <div className={`${idx % 2 !== 0 ? " t-order-1" : ""}`}>
                <Lottie
                  animationData={animation}
                  className={`t-h-[600px] ${
                    title === "Our Templates" ? "t-scale-150" : ""
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NfcFeatures;
