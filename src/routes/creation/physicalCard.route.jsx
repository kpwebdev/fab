import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useState } from "react";

const PhysicalCard = () => {
  const [orientation, setOrientation] = useState("landscape");
  const handleOnChange = (e) => {
    setOrientation(e.target.value);
  };
  return (
    <section>
      {/* back navigator - my profile */}
      <Link
        to="/nfc/dashboard/my-profile"
        className="t-flex t-items-center t-gap-f-8 t-p-f-16"
      >
        <BsArrowLeft />
        My Profile
      </Link>

      <div className="container t-flex t-flex-col t-gap-f-48">
        <header className="">
          {/* actions */}
          <div className="t-flex t-items-center t-justify-between">
            <h2 className="t-text-f-2xl">Choose Your Style</h2>
            {/* buttons container */}
            <div className="t-flex t-gap-f-16">
              <Link
                to="/nfc/creation/digital-profile"
                className="f-btn-lg f-btn-primary-outline"
              >
                Create Digitally
              </Link>
              <Link
                to="/nfc/creation/physical-card/templates"
                className="f-btn-lg f-btn-primary"
              >
                Browse Templates
              </Link>
            </div>
          </div>
        </header>

        {/* cards container */}
        <div className="t-flex t-gap-48 t-justify-between t-py-f-16 t-px-f-48 t-border-2 t-rounded-f-8">
          {/* horizontal card container */}
          <div className="t-flex t-flex-col t-justify-between">
            <header className="t-flex t-flex-col t-gap-f-8">
              <h5 className="t-text-f-md">Horizontal</h5>
              <label
                htmlFor="horizontal"
                className="t-w-[400px] t-aspect-video t-block t-bg-f-primary-70 t-rounded-f-8"
              ></label>
            </header>
            {/* inputs container */}
            <div className="t-text-center t-py-f-24">
              <input
                type="radio"
                name="orientation"
                id="horizontal"
                value="horizontal"
                onChange={handleOnChange}
                checked={orientation === "horizontal"}
              />
            </div>
          </div>

          {/* vertical card container */}
          <div>
            <header className="t-flex t-flex-col t-gap-f-8">
              <h5 className="t-text-f-md">Vertical</h5>
              <label
                htmlFor="vertical"
                className="t-h-[400px] t-aspect-[9/16] t-block t-bg-f-primary-70 t-rounded-f-8"
              ></label>
            </header>
            {/* inputs container */}
            <div className="t-text-center t-py-f-24">
              <input
                type="radio"
                name="orientation"
                id="vertical"
                value="vertical"
                onChange={handleOnChange}
                checked={orientation === "vertical"}
              />
            </div>
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

export default PhysicalCard;
