import { Link, useNavigate, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { LuNfc } from "react-icons/lu";
import { useEffect, useRef, useState, useContext } from "react";
import { createPortal } from "react-dom";
import CardCustomizationOptions from "../../components/creation/cardCustomizationOptions.component";
import {
  CardContext,
  CARD_ACTION_TYPES,
} from "../../contexts/CardProvider.context";
import QRCode from "react-qr-code";
import house from "../../assets/house.svg";
import { Formik } from "formik";
import Color from "color";
import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getUser,
  updateCardDetails,
  uploadDataUrlImage,
  uploadFile,
} from "../../utils/firebase/firebase.util";
import { toast } from "react-toastify";
import html2canvas from "html2canvas";
import { getStripe } from "../../utils/stripe/stripe.util";
import { AuthContext } from "../../contexts/AuthProvider.context";
import { createAction } from "../../contexts/helper-functions";
import { APIContext } from "../../contexts/APIProvider.context";

const CustomizeCard = () => {
  const [isStripeLoading, setIsTripeLoading] = useState(false);
  const { name } = useParams();
  const cardContextResponse = useContext(CardContext);
  const { stripePriceId, stripePublishableKey } = useContext(APIContext);
  const { cardTemplate, dispatch } = cardContextResponse;
  useEffect(() => {
    if (name) {
      const action = createAction(CARD_ACTION_TYPES.UPDATE_CARD_TEMPLATE, name);
      dispatch(action);
    }
  }, [name]);

  const {
    frontSettings: frontFormInputs,
    backSettings: backFormInputs,
    orientation,
    ...userCardDetails
  } = cardTemplate;

  const [isFront, setIsFront] = useState("true");
  const {
    currentUser: { email },
  } = useContext(AuthContext);

  const { data, isError, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  const cardFrontRef = useRef();
  const cardBackRef = useRef();

  const {
    mutate,
    isError: isErrorUpdatingCardDetails,
    isPending: isPendingUpdatingCardDetails,
    error: errorUpdatingCardDetails,
  } = useMutation({
    mutationFn: updateCardDetails,
    onSuccess: async () => {
      toast.success("Saved the card details.");
      setIsTripeLoading(true);
      const stripe = await getStripe(stripePublishableKey);
      setIsTripeLoading(false);
      const { error } = await stripe.redirectToCheckout({
        lineItems: [
          {
            price: stripePriceId,
            quantity: 1,
          },
        ],
        mode: "payment",
        successUrl: `${window.location.origin}/nfc/payment/success`,
        cancelUrl: `${window.location.origin}/nfc/payment/cancel`,
        billingAddressCollection: "required",
        shippingAddressCollection: { allowedCountries: ["US", "CA", "IN"] },
        customerEmail: email,
      });
      console.log("error in strip redirect", error.message);
    },
    onError: () => {
      toast.error(
        `Something went wrong. Please contact the web admin. error: ${errorUpdatingCardDetails.message}`
      );
      console.log("error updating card details", errorUpdatingCardDetails);
    },
  });

  let userName;
  if (data) {
    userName = data.userName;
  }

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
                      to="/nfc/dashboard/shop"
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
                            ref={cardFrontRef}
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
                            ref={cardBackRef}
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
                                  value={`${window.location.origin}/profiles/${userName}`}
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
                    key={name}
                    values={values}
                    side={isFront ? "front" : "back"}
                    setFieldValue={setFieldValue}
                  />
                </div>
              </div>

              {/* next step */}
              <div className="t-text-end">
                <button
                  type="button"
                  className="f-btn-lg f-btn-primary"
                  onClick={async () => {
                    const cardFrontCanvas = await html2canvas(
                      cardFrontRef.current,
                      { backgroundColor: "transparent" }
                    );
                    const cardBackCanvas = await html2canvas(
                      cardBackRef.current,
                      { backgroundColor: "transparent" }
                    );
                    const cardFrontImage = cardFrontCanvas.toDataURL(
                      "image/png"
                    );
                    const cardBackImage = cardBackCanvas.toDataURL("image/png");
                    const cardFrontImageUrl = await uploadDataUrlImage(
                      "cardImages",
                      cardFrontImage,
                      "frontCardImage"
                    );
                    const cardBackImageUrl = await uploadDataUrlImage(
                      "cardImages",
                      cardBackImage,
                      "backCardImage"
                    );
                    const frontBgImageFileUrl = await uploadFile(
                      "background",
                      frontBgImageFile,
                      "frontBgImage"
                    );
                    const frontLogoImageUrl = await uploadFile(
                      "background",
                      frontLogoImageFile,
                      "frontBgImage"
                    );
                    const backBgImageFileUrl = await uploadFile(
                      "background",
                      backBgImageFile,
                      "backBgImage"
                    );
                    // cardFrontRef cardBackRef
                    const frontSettings = {
                      frontBgColor,
                      frontHasBgGradient,
                      frontBgGradientStart,
                      frontBgGradientCenter,
                      frontBgGradientEnd,
                      frontBgGradientDirection,
                      frontBgOpacity,
                      frontBgImageFile: "",
                      frontBgImage: frontBgImageFileUrl,
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
                      frontLogoImageFile: "",
                      frontLogoImage: frontLogoImageUrl,
                    };
                    const backSettings = {
                      backBgColor,
                      backHasBgGradient,
                      backBgGradientStart,
                      backBgGradientCenter,
                      backBgGradientEnd,
                      backBgGradientDirection,
                      backBgOpacity,
                      backBgImageFile: "",
                      backBgImage: backBgImageFileUrl,
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
                    };
                    const status = "payment-pending";
                    const cardImageFront = cardFrontImageUrl;
                    const cardImageBack = cardBackImageUrl;
                    const {
                      id,
                      name,
                      category,
                      description,
                      price,
                      thumbnail,
                      hasPaid,
                      isBestSeller,
                    } = values;
                    mutate({
                      id,
                      orientation,
                      name,
                      category,
                      description,
                      price,
                      thumbnail,
                      hasPaid,
                      isBestSeller,
                      status,
                      cardImageFront,
                      cardImageBack,
                      frontSettings,
                      backSettings,
                    });
                  }}
                >
                  Checkout
                </button>
                {isPendingUpdatingCardDetails &&
                  isStripeLoading &&
                  createPortal(
                    <div className="t-min-h-screen t-flex t-justify-center t-items-center t-border-f-primary-10/50">
                      <span className="custom-loader"></span>
                    </div>,
                    document.body
                  )}
              </div>
            </div>
          );
        }}
      </Formik>
    </section>
  );
};

export default CustomizeCard;
