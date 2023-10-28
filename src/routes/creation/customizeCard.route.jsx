import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { LuNfc } from "react-icons/lu";
import { useEffect, useRef, useState, useContext } from "react";
import CardCustomizationOptions from "../../components/creation/cardCustomizationOptions.component";
import { CardContext } from "../../contexts/CardProvider.context";
import QRCode from "react-qr-code";
import house from "../../assets/house.svg";
import { Formik } from "formik";
import Color from "color";

const CustomizeCard = () => {
  const {
    frontSettings: frontFormInputs,
    backSettings: backFormInputs,
    orientation,
    ...userCardDetails
  } = useContext(CardContext);
  const [isFront, setIsFront] = useState("true");

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

      <Formik
        initialValues={{
          ...frontFormInputs,
          ...backFormInputs,
          ...userCardDetails,
        }}
      >
        {({ values, setFieldValue }) => {
          const {
            frontBgColor,
            frontHasBgGradient,
            frontBgGradientStart,
            frontBgGradientCenter,
            frontBgGradientEnd,
            frontBgGradientDirection,
            frontBgOpacity,
            frontBgImageFile,
            frontBgImage,
            frontText,
            frontTextColor,
            frontTextOpacity,
            frontFontSize,
            frontFontFamily,
            frontFontWeight,
            frontIsItalic,
            frontIsUnderline,
            frontHasElementQrcode,
            frontHasElementNFC,
            frontElementColor,
            frontElementOpacity,
            frontLogoImageFile,
            frontLogoImage,
            backBgColor,
            backHasBgGradient,
            backBgGradientStart,
            backBgGradientCenter,
            backBgGradientEnd,
            backBgGradientDirection,
            backBgOpacity,
            backBgImageFile,
            backBgImage,
            backPersonText,
            backPersonTextColor,
            backPersonTextOpacity,
            backPersonFontSize,
            backPersonFontFamily,
            backPersonFontWeight,
            backIsPersonItalic,
            backIsPersonUnderline,
            backRoleText,
            backRoleTextColor,
            backRoleTextOpacity,
            backRoleFontSize,
            backRoleFontFamily,
            backRoleFontWeight,
            backIsRoleItalic,
            backIsRoleUnderline,
            backHasElementQrcode,
            backHasElementNFC,
            backElementColor,
            backElementOpacity,
          } = values;
          return (
            <div className="container t-flex t-flex-col t-gap-f-48">
              <header>
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
                  <div className="t-sticky t-top-f-16">
                    <div className="t-py-f-56 t-px-f-48 t-border-2 t-rounded-f-8 t-relative">
                      <h5 className="t-absolute t-top-f-8 t-left-f-8 t-text-slate-500">
                        Preview
                      </h5>
                      {/* cards */}
                      <div
                        className={`t-grid t-justify-center ${
                          orientation === "landscape"
                            ? "t-grid-rows-2"
                            : "t-grid-cols-2"
                        } t-gap-f-24`}
                      >
                        {/* front */}
                        <div>
                          <h6 className="t-text-f-md t-mb-f-8">Front</h6>
                          {/* card */}
                          <div
                            className={`${
                              orientation === "landscape"
                                ? "t-h-[204px] t-w-[325px]"
                                : "t-h-[325px] t-w-[204px]"
                            } t-rounded-f-8 t-flex t-items-center t-justify-center`}
                            style={{
                              background:
                                (frontBgImage &&
                                  `url(${frontBgImage}) center / cover no-repeat`) ||
                                (frontHasBgGradient &&
                                  `linear-gradient(${frontBgGradientDirection}deg, ${frontBgGradientStart ||
                                    "#000"}, ${frontBgGradientCenter ||
                                    "#000"}, ${frontBgGradientEnd ||
                                    "#000"})`) ||
                                Color(frontBgColor).alpha(
                                  Number(frontBgOpacity) / 100
                                ),
                            }}
                          >
                            {/* content */}
                            <div className="t-flex t-items-center t-flex-col t-gap-f-8">
                              <img
                                src={frontLogoImage}
                                alt="Logo"
                                className="t-w-[150px] t-h-[150px] t-object-contain"
                              />
                              <span
                                className="t-text-f-warning-70"
                                style={{
                                  color: Color(frontTextColor).alpha(
                                    Number(frontTextOpacity) / 100
                                  ),
                                  fontSize: `${frontFontSize}px`,
                                  fontWeight: frontFontWeight || 400,
                                  fontStyle: frontIsItalic
                                    ? "italic"
                                    : "normal",
                                  fontFamily: frontFontFamily,
                                  textDecoration: frontIsUnderline
                                    ? "underline"
                                    : "none",
                                }}
                              >
                                {frontText}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* back */}
                        <div>
                          <h6 className="t-text-f-md t-mb-f-8">Back</h6>
                          {/* card */}
                          <div
                            className={`${
                              orientation === "landscape"
                                ? "t-h-[204px] t-w-[325px]"
                                : "t-h-[325px] t-w-[204px]"
                            } t-rounded-f-8 t-p-f-24`}
                            style={{
                              background:
                                (backBgImage &&
                                  `url(${backBgImage}) center / cover no-repeat`) ||
                                (backHasBgGradient &&
                                  `linear-gradient(${backBgGradientDirection}deg, ${backBgGradientStart ||
                                    "#000"}, ${backBgGradientCenter ||
                                    "#000"}, ${backBgGradientEnd ||
                                    "#000"})`) ||
                                Color(backBgColor).alpha(
                                  Number(backBgOpacity) / 100
                                ),
                            }}
                          >
                            {/* content */}
                            <div className="t-flex t-flex-col t-justify-between t-h-full">
                              {backHasElementNFC && (
                                <LuNfc
                                  className={`${
                                    orientation === "landscape"
                                      ? "t-text-f-2xl"
                                      : "t-text-f-l"
                                  } t-self-end`}
                                  style={{
                                    stroke: Color(backElementColor).alpha(
                                      Number(backElementOpacity) / 100
                                    ),
                                  }}
                                />
                              )}
                              {backHasElementQrcode && (
                                <QRCode
                                  bgColor="transparent"
                                  fgColor={Color(backElementColor).alpha(
                                    Number(backElementOpacity) / 100
                                  )}
                                  value="https://www.linkedin.com/in/kp-web-dev/"
                                  level="H"
                                  className={`${
                                    orientation !== "landscape"
                                      ? "t-self-center t-w-[80%]"
                                      : "t-w-[85px]"
                                  }`}
                                />
                              )}
                              <div className="t-self-end t-text-[#D1AE7B]">
                                <h6
                                  className="t-text-f-md"
                                  style={{
                                    color: Color(backPersonTextColor).alpha(
                                      Number(backPersonTextOpacity) / 100
                                    ),
                                    fontSize: `${backPersonFontSize}px`,
                                    fontFamily: backPersonFontFamily,
                                    fontWeight: backPersonFontWeight,
                                    fontStyle: `${
                                      backIsPersonItalic ? "italic" : "normal"
                                    }`,
                                    textDecoration: `${
                                      backIsPersonUnderline
                                        ? "underline"
                                        : "none"
                                    }`,
                                  }}
                                >
                                  {backPersonText}
                                </h6>
                                <p
                                  className="t-text-f-sm"
                                  style={{
                                    color: Color(backRoleTextColor).alpha(
                                      Number(backRoleTextOpacity) / 100
                                    ),
                                    fontSize: `${backRoleFontSize}px`,
                                    fontFamily: backRoleFontFamily,
                                    fontWeight: backRoleFontWeight,
                                    fontStyle: `${
                                      backIsRoleItalic ? "italic" : "normal"
                                    }`,
                                    textDecoration: `${
                                      backIsRoleUnderline ? "underline" : "none"
                                    }`,
                                  }}
                                >
                                  {backRoleText}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="t-text-f-sm t-text-slate-500">
                      Your physical card will look like this*
                    </p>
                  </div>
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
                  <CardCustomizationOptions
                    values={values}
                    side={isFront ? "front" : "back"}
                    setFieldValue={setFieldValue}
                  />
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
          );
        }}
      </Formik>
    </section>
  );
};

export default CustomizeCard;
