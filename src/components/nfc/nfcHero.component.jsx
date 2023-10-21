import carouselImg1 from "../../assets/carousel-img-1.png";
import carouselImg2 from "../../assets/carousel-img-2.png";
import carouselImg3 from "../../assets/carousel-img-3.png";

// lottie animation
import Lottie from "lottie-react";
import emilyAnimation from "../../assets/lotties/emily-animation.json";
import cardSlideAnimation from "../../assets/lotties/card-slide-animation.json";
import { Link } from "react-router-dom";

const NfcHero = () => {
  return (
    <div
      id="nfcHeroCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#nfcHeroCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#nfcHeroCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>
      <div className="carousel-inner">
        <div
          className="carousel-item active"
          style={{
            background: `linear-gradient(rgba(0,0,0,.60), rgba(0,0,0,.60)), url(${carouselImg2})`,
            backgroundSize: "cover",
          }}
        >
          {/* container */}
          <div className="container t-grid t-items-center t-grid-cols-2 t-min-h-screen">
            {/* text container */}
            <div className="t-text-f-primary-99">
              <h2
                className="t-text-f-4xl t-mb-f-24"
                style={{ textShadow: "0px 8px 8px rgba(0,0,0,.5)" }}
              >
                Tap The future of Networking in a single{" "}
                <span className="t-text-f-secondary-50">Tap</span>
              </h2>
              <Link
                className="f-btn-lg f-btn-primary"
                to="/nfc/creation/physical-card"
              >
                Get Started
              </Link>
            </div>
            {/* animation container */}
            <div>
              <Lottie
                animationData={emilyAnimation}
                className="t-scale-150"
                loop={true}
              />
            </div>
          </div>
        </div>
        <div
          className="carousel-item active"
          style={{
            background: `linear-gradient(rgba(0,0,0,.60), rgba(0,0,0,.60)), url(${carouselImg3})`,
            backgroundSize: "cover",
          }}
        >
          {/* container */}
          <div className="container t-grid t-items-center t-grid-cols-2 t-min-h-screen">
            {/* text container */}
            <div className="t-text-f-primary-99">
              <h2
                className="t-text-f-4xl t-mb-f-24"
                style={{ textShadow: "0px 8px 8px rgba(0,0,0,.5)" }}
              >
                Discover our variety of inbuilt templates to make your work{" "}
                <span className="t-text-f-secondary-50">easier</span>
              </h2>
              <Link
                className="f-btn-lg f-btn-primary"
                to="/nfc/creation/physical-card/templates"
              >
                Browse Templates
              </Link>
            </div>
            {/* animation container */}
            <div>
              <Lottie
                animationData={cardSlideAnimation}
                className="t-scale-150"
                loop={true}
              />
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#nfcHeroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#nfcHeroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default NfcHero;
