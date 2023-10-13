import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import CardCustomizationOptions from "../../components/creation/cardCustomizationOptions.component";

const initialFrontFormInputs = {
  bgColor: "#1A59B2",
  bgOpacity: "100",
  bgImage: "",
  textColor: "#ffffff",
  textOpacity: "100",
  fontSize: "20px",
  fontFamily: "Karantina",
  fontWeight: "Bold",
  isBold: false,
  isItalic: false,
  isUnderline: false,
  elementColor: "#224455",
  elementOpacity: "100",
  logoImage: "",
};

const initialBackFormInputs = {
  bgColor: "#FFC800",
  bgOpacity: "100",
  bgImage: "",
  textColor: "#ffffff",
  textOpacity: "100",
  fontSize: "20px",
  fontFamily: "Karantina",
  fontWeight: "Bold",
  isBold: false,
  isItalic: false,
  isUnderline: false,
  elementColor: "#224455",
  elementOpacity: "100",
  logoImage: "",
};

const CustomizeCard = () => {
  const [isFront, setIsFront] = useState("true");
  const [googleFonts, setGoogleFonts] = useState([]);
  const frontBGRef = useRef();
  const frontTextRef = useRef();
  const frontElementRef = useRef();
  const backBGRef = useRef();
  const backTextRef = useRef();
  const backElementRef = useRef();
  const [frontFormInputs, setFrontFormInputs] = useState(
    initialFrontFormInputs
  );
  const [backFormInputs, setBackFormInputs] = useState(initialBackFormInputs);

  // effect to load all the google fonts
  useEffect(() => {
    const fetchGoogleFonts = async () => {
      const response = await fetch(
        `https://www.googleapis.com/webfonts/v1/webfonts?key=${
          import.meta.env.VITE_GOOGLE_WEB_FONTS_DEVELOPER_API_KEY
        }`
      );
      const { items } = await response.json();
      setGoogleFonts(items);
    };

    fetchGoogleFonts();
  }, []);

  return (
    <section>
      {/* back navigator - my profile */}
      <Link
        to="/nfc/creation/physical-card"
        className="t-flex t-items-center t-gap-f-8 t-p-f-16"
      >
        <BsArrowLeft />
        Choose Style
      </Link>

      <div className="container t-flex t-flex-col t-gap-f-48">
        <header className="">
          {/* actions */}
          <div className="t-flex t-items-center t-justify-between">
            <h2 className="t-text-f-2xl">Choose Your Style</h2>
            {/* buttons container */}
            <div className="t-flex t-gap-f-16">
              <Link
                to="/nfc/creation/physical-card/templates"
                className="f-btn-lg f-btn-primary"
              >
                Browse Templates
              </Link>
            </div>
          </div>
        </header>

        {/* middle section */}
        <div className="t-grid t-grid-cols-2 t-gap-f-24 t-justify-between">
          {/* cards container */}
          <div>
            <div className="t-py-f-56 t-px-f-48 t-border-2 t-rounded-f-8 t-relative">
              <h5 className="t-absolute t-top-f-8 t-left-f-8 t-text-slate-500">
                Preview
              </h5>
              {/* cards */}
              <div className="t-grid t-grid-cols-2 t-gap-f-24">
                {/* front */}
                <div>
                  <h6 className="t-text-f-md t-mb-f-8">Front</h6>
                  <div
                    className={`t-h-[400px] t-bg-f-primary-40 t-rounded-f-8`}
                    ref={frontBGRef}
                  ></div>
                </div>

                {/* back */}
                <div>
                  <h6 className="t-text-f-md t-mb-f-8">Back</h6>
                  <div
                    className={`t-h-[400px] t-bg-f-secondary-50 t-rounded-f-8`}
                    ref={backBGRef}
                  ></div>
                </div>
              </div>
            </div>

            <p className="t-text-f-sm t-text-slate-500">
              Your physical card will look like this*
            </p>
          </div>

          {/* right container */}
          <div>
            <div className="t-grid t-grid-cols-2 t-mb-6">
              <button
                type="button"
                onClick={() => setIsFront(true)}
                className={`t-p-f-8${
                  isFront
                    ? " t-border-b-2 t-border-f-primary-40"
                    : " t-text-slate-500 t-border-b-2 t-border-b-slate-300"
                }`}
              >
                Front
              </button>
              <button
                type="button"
                onClick={() => setIsFront(false)}
                className={`t-p-f-8${
                  !isFront
                    ? " t-border-b-2 t-border-f-primary-40"
                    : " t-text-slate-500 t-border-b-2 t-border-b-slate-300"
                }`}
              >
                Back
              </button>
            </div>
            {isFront ? (
              <CardCustomizationOptions
                formInputs={frontFormInputs}
                setFormInputs={setFrontFormInputs}
                googleFonts={googleFonts}
                bgRef={frontBGRef}
                textRef={frontTextRef}
                elementRef={frontElementRef}
                key={"front"}
              />
            ) : (
              <CardCustomizationOptions
                formInputs={backFormInputs}
                setFormInputs={setBackFormInputs}
                googleFonts={googleFonts}
                bgRef={backBGRef}
                textRef={backTextRef}
                elementRef={backElementRef}
                key={"back"}
              />
            )}
          </div>
        </div>

        {/* next step */}
        <div className="t-text-end">
          <Link
            className="f-btn-lg f-btn-primary"
            to="/nfc/creation/physical-card/customize"
          >
            Continue
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CustomizeCard;
