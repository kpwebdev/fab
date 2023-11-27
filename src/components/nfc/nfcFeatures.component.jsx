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
          <h2 className="t-text-f-3xl">Your Effortless Networking Solution!</h2>
          <h3 className="t-mb-f-40 t-text-f-md">
            Fab Tap redefines your connection-building.
          </h3>
          <p>
            Fab Tap offers an exciting, tech-savvy method to share contact
            details, social media handles, websites and much more with single
            tap on the phone. Ditch 1000+ paper cards and use One Fab Tap card
            to connect on multiple social platforms.Personalize and Brand your
            own Fab Tap card, flaunt your individual style to network
            effortlessly.Add new connections to your network and unlock endless
            opportunities for your business.
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
                <div className="t-text-f-base">
                  {description.split("\n").map((para, idx) => (
                    <p className="t-mb-f-16" key={idx}>
                      {para}
                    </p>
                  ))}
                </div>
                <Link
                  to={
                    currentUser ? "/nfc/dashboard" : "/nfc/authentication/login"
                  }
                  className="t-text-f-md -t-mt-f-16 t-px-f-16 t-py-f-8 t-inline-block t-bg-f-primary-30 t-text-f-primary-98 t-rounded-f-8 hover:t-bg-f-primary-20"
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
