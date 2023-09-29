import carouselImg1 from "../../assets/carousel-img-1.png";
import carouselImg2 from "../../assets/carousel-img-2.png";
import carouselImg3 from "../../assets/carousel-img-3.png";

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
        <button
          type="button"
          data-bs-target="#nfcHeroCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={carouselImg1}
            className="d-block w-100"
            alt="Carousel Image 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src={carouselImg2}
            className="d-block w-100"
            alt="Carousel Image 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src={carouselImg3}
            className="d-block w-100"
            alt="Carousel Image 3"
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
