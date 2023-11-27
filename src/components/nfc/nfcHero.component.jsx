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
      <div className="carousel-inner t-isolate">
        <div
          className="carousel-item active t-relative"
          style={{
            // background: `linear-gradient(rgba(0,0,0,.60), rgba(0,0,0,.60)), url(${carouselImg2})`,
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
                Tap The future of Networking in a Single{" "}
                <span className="t-text-f-secondary-50">Tap</span>
              </h2>
              <h3
                className="t-text-f-xl t-mb-f-16 t-text-f-secondary-50"
                style={{ textShadow: "0px 8px 8px rgba(0,0,0,.5)" }}
              >
                Design · Tap · Connect with Fab Tap
              </h3>
              <Link
                className="f-btn-lg f-btn-primary"
                to="/nfc/authentication/login"
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
          <div className="t-absolute t-top-0 t-left-0 t-w-full t-h-full t-bg-f-primary-10 -t-z-10 t-opacity-60"></div>
          <img
            src={carouselImg2}
            alt="carousel 2 image"
            loading="lazy"
            className="t-absolute t-top-0 t-left-0 t-w-full t-h-full t-object-cover -t-z-20"
          />
        </div>
        <div
          className="carousel-item t-relative"
          // style={{
          //   background: `linear-gradient(rgba(0,0,0,.60), rgba(0,0,0,.60)), url(${carouselImg3})`,
          //   backgroundSize: "cover",
          // }}
        >
          {/* container */}
          <div className="container t-grid t-items-center t-grid-cols-2 t-min-h-screen">
            {/* text container */}
            <div className="t-text-f-primary-99">
              <h2
                className="t-text-f-3xl t-mb-f-24"
                style={{ textShadow: "0px 8px 8px rgba(0,0,0,.5)" }}
              >
                Discover Easy Design with Our{" "}
                <span className="t-text-f-secondary-50">
                  Built-in Templates,
                </span>{" "}
                Tailored to Your Brand! Tap Once for Countless Opportunities!
              </h2>
              <Link
                className="f-btn-lg f-btn-primary"
                to="/nfc/authentication/login"
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
          <div className="t-absolute t-top-0 t-left-0 t-w-full t-h-full t-bg-f-primary-10 -t-z-10 t-opacity-60"></div>
          <img
            src={carouselImg3}
            alt="carousel 2 image"
            loading="lazy"
            className="t-absolute t-top-0 t-left-0 t-w-full t-h-full t-object-cover -t-z-20"
          />
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
