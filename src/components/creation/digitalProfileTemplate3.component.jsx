import IconColoredFacebook from "../../assets/icon-colored-facebook.svg?react";
import IconColoredInstagram from "../../assets/icon-colored-instagram.svg?react";
import IconColoredLinkedin from "../../assets/icon-colored-linkedin.svg?react";
import IconColoredTwitter from "../../assets/icon-colored-twitter.svg?react";
import IconColoredYoutube from "../../assets/icon-colored-youtube.svg?react";
import IconColoredWhatsapp from "../../assets/icon-colored-whatsapp.svg?react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Color from "color";
import Button from "../ui/button.component";

const DigitalProfileTemplate3 = ({ data, colors, children }) => {
  const {
    profilePic,
    fullName,
    role,
    socialMedia,
    contact,
    website,
    userName,
    companyName,
    companyVision,
    companyAddress,
    email,
    card: {
      frontSettings: { frontLogoImage: logo },
    },
  } = data;

  const {
    bodyTextColor,
    themeColor,
    metaBandBgColor,
    metaRoleTextColor,
    metaUserNameColor,
    metaFullNameColor,
    grayTextColor,
  } = colors;

  const primaryBtn = {
    normalState: {
      backgroundColor: themeColor,
      borderColor: themeColor,
      color: "white",
    },
    hoverState: {
      backgroundColor: Color(themeColor).darken(0.15),
      borderColor: Color(themeColor).darken(0.15),
      color: "white",
    },
  };

  const secondaryBtn = {
    normalState: {
      backgroundColor: "transparent",
      borderColor: themeColor,
      color: themeColor,
    },
    hoverState: {
      backgroundColor: Color(themeColor).darken(0.15),
      borderColor: Color(themeColor).darken(0.15),
      color: "white",
    },
  };

  const [
    { has: hasFacebook, href: facebookUrl },
    { has: hasInstagram, href: instagramUrl },
    { has: hasWhatsapp, href: whatsappNum },
    { has: hasTwitter, href: twitterUrl },
    { has: hasLinkedin, href: linkedinUrl },
  ] = socialMedia;
  return (
    <article
      className="t-max-w-[450px] t-mx-auto t-my-f-48 t-shadow-2xl t-rounded-f-8 t-overflow-hidden"
      style={{ color: bodyTextColor }}
    >
      {/* banner section */}
      <section className="t-h-[200px] t-relative t-flex t-justify-end">
        <img
          src={logo}
          alt={`logo of ${companyName}`}
          className="t-w-full t-h-full t-object-cover"
        />
      </section>

      {/* header section */}
      <header className="t-mb-f-16">
        {/* profilePic and text container */}
        <div className="">
          {/* image container */}
          <div className="-t-mb-f-104">
            <div
              className="t-h-[50px]"
              style={{ background: metaBandBgColor }}
            ></div>
            <img
              src={profilePic}
              alt={`${companyName}`}
              className="t-w-[35%] t-aspect-square t-object-cover t-rounded-full t-border-8 -t-translate-y-2/3 t-translate-x-[30%] t-font-bold"
              style={{ borderColor: metaBandBgColor }}
            />
          </div>
          {/* text container */}
          <div className="t-px-f-8">
            <h2 className="t-text-3xl t-font-bold">{fullName}</h2>
            <p className="t-text-base t-font-medium">{role}</p>
          </div>
        </div>
      </header>

      {/* contact us */}
      <div className="t-mb-f-24 t-px-f-16">
        <h3
          className="t-text-f-base t-italic t-mb-f-8"
          style={{ color: grayTextColor }}
        >
          Contact Us
        </h3>
        <ul className="t-flex t-flex-col t-gap-f-24 t-ml-f-8">
          <li>
            <Link
              to={`mailto:${email}`}
              target="_blank"
              className="t-flex t-items-center t-gap-f-8"
            >
              <MdEmail className="t-text-f-md t-text-purple-800" />
              <span>{email}</span>
            </Link>
          </li>
          <li>
            <Link
              to={`tel:${contact.replace(/[ +()-]/g, "")}`}
              target="_blank"
              className="t-flex t-items-center t-gap-f-8"
            >
              <FaPhoneAlt className="t-text-f-md t-text-purple-800" />
              <span>{contact}</span>
            </Link>
          </li>
          <li>
            <div className="t-flex t-items-center t-gap-f-8">
              <FaLocationDot className="t-text-f-md t-text-purple-800" />
              <span>{companyAddress}</span>
            </div>
          </li>
        </ul>
      </div>

      {/* social media */}
      <div className="t-px-f-16 t-mb-f-32">
        <h3
          className="t-text-f-base t-italic t-mb-f-8"
          style={{ color: grayTextColor }}
        >
          Social
        </h3>
        <ul className="t-flex t-gap-f-16 t-ml-f-8">
          {hasFacebook && (
            <Link to={facebookUrl} target="_blank">
              <IconColoredFacebook className="t-w-f-32 t-h-f-32" />
            </Link>
          )}
          {hasInstagram && (
            <Link to={instagramUrl} target="_blank">
              <IconColoredInstagram className="t-w-f-32" />
            </Link>
          )}
          {hasTwitter && (
            <Link to={twitterUrl} target="_blank">
              <IconColoredTwitter className="t-w-f-32" />
            </Link>
          )}
          {hasLinkedin && (
            <Link to={linkedinUrl} target="_blank">
              <IconColoredLinkedin className="t-w-f-32" />
            </Link>
          )}
        </ul>
      </div>

      {/* buttons container */}
      <div
        className={`t-grid ${
          hasWhatsapp ? "t-grid-cols-2" : ""
        } t-gap-f-16 t-my-f-16 t-px-f-16 t-pb-f-16`}
      >
        {hasWhatsapp && (
          <Button
            isLink={true}
            hoverStyle={secondaryBtn.hoverState}
            normalStyle={secondaryBtn.normalState}
            href={`https://wa.me/${whatsappNum.replace(/[ +()-]/g, "")}`}
            target="_blank"
            className="f-btn-sm f-btn-primary-outline t-flex t-items-center justify-content-center t-text-f-base"
          >
            Connect <IconColoredWhatsapp className="t-w-[40px]" />
          </Button>
        )}
        <Button
          normalStyle={primaryBtn.normalState}
          hoverStyle={primaryBtn.hoverState}
          isLink={true}
          href={`tel:${contact.replace(/[ +()-]/g, "")}`}
          className="f-btn-sm f-btn-primary t-flex t-items-center justify-content-center t-text-f-base"
        >
          +Add Contact
        </Button>
      </div>
    </article>
  );
};

export default DigitalProfileTemplate3;
