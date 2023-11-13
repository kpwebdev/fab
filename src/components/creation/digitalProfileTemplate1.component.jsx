import IconColoredFacebook from "../../assets/icon-colored-facebook.svg?react";
import IconColoredInstagram from "../../assets/icon-colored-instagram.svg?react";
import IconColoredLinkedin from "../../assets/icon-colored-linkedin.svg?react";
import IconColoredTwitter from "../../assets/icon-colored-twitter.svg?react";
import IconColoredYoutube from "../../assets/icon-colored-youtube.svg?react";
import IconColoredWhatsapp from "../../assets/icon-colored-whatsapp.svg?react";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Color from "color";
import { useState } from "react";
import Button from "../ui/button.component";

const DigitalProfileTemplate1 = ({
  data,
  colors,
  images,
  isEditing,
  children,
}) => {
  const {
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
  } = data;

  const logo =
    images?.profileLogo ||
    data?.profile?.images?.profileLogo ||
    data?.card?.frontSettings?.frontLogoImage?.logo;
  const profilePic =
    images?.profileImage ||
    data?.profile?.images?.profileImage ||
    data?.profilePic;

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
      <section className="t-h-f-[200px] t-relative t-flex t-justify-end t-mb-f-48">
        {/* banner background svg */}
        <div className="t-absolute t-top-0 t-left-0 t-w-full t-h-full -t-z-10 t-overflow-hidden">
          <svg
            viewBox="0 0 640 640"
            fill="none"
            className="t-rotate-[10deg] -t-translate-x-[10%] -t-translate-y-[10%]"
          >
            <path d="M0 0H640L0 640V0Z" fill={Color(themeColor).lighten(0.5)} />
            <path d="M440.5 0H640L0 640L440.5 0Z" fill={themeColor} />
          </svg>
        </div>

        {/* logo */}
        <div className="t-absolute t-top-f-16 t-left-f-16 t-w-[30%] t-aspect-square t-overflow-hidden">
          <img
            src={logo}
            alt="logo"
            className="t-w-full t-h-full t-object-cover"
          />
          {isEditing && (
            <div className="t-absolute t-top-0 t-left-0 t-w-full t-h-full t-bg-f-primary-30 t-text-f-primary-99 t-flex t-items-center t-justify-center t-opacity-75">
              Logo
            </div>
          )}
        </div>

        {/* profile pic */}
        <div className="t-aspect-square t-rounded-full t-border-8 t-translate-y-[20%] -t-translate-x-[5%] t-w-1/2 t-object-cover t-overflow-hidden">
          <img
            src={profilePic}
            alt="profile picture"
            className="t-w-full t-h-full t-object-cover"
            // className="t-aspect-square t-rounded-full t-border-8 t-translate-y-[20%] -t-translate-x-[5%] t-w-1/2 t-object-cover"
            style={{ borderColor: themeColor }}
          />
          {isEditing && (
            <div className="t-absolute t-top-0 t-left-0 t-w-full t-h-full t-bg-f-primary-30 t-text-f-primary-99 t-flex t-items-center t-justify-center t-opacity-75">
              Profile Image
            </div>
          )}
        </div>
      </section>

      {/* header section */}
      <header className="t-mb-f-24 t-px-f-16">
        <h2 className="t-text-f-xl t-mb-f-8">{fullName}</h2>
        {/* role */}
        <div
          className="t-text-f-primary-99 t-flex t-p-f-4 t-px-f-8 t-gap-f-8 t-max-w-fit t-rounded-r-full t-mb-f-24"
          style={{ backgroundColor: metaBandBgColor }}
        >
          <h3 style={{ color: metaRoleTextColor }}>{role}</h3>
          <div className="t-w-f-2 t-bg-f-primary-99"></div>
          <h4 style={{ color: metaUserNameColor }}>@{userName}</h4>
        </div>
        {/* vision */}
        <p
          className="t-border-l-4 t-p-f-8 t-font-semibold t-italic"
          style={{ borderColor: themeColor }}
        >
          {companyVision}
        </p>
      </header>

      {/* contact us */}
      <div className="t-mb-f-24 t-px-f-16">
        <h3
          className="t-text-f-base t-italic t-mb-f-8"
          style={{ color: grayTextColor }}
        >
          Contact Us
        </h3>
        <ul className="t-flex t-flex-col t-gap-f-16 t-ml-f-8">
          <li>
            <Link
              to={`mailto:${email}`}
              target="_blank"
              className="t-flex t-items-center t-gap-f-8"
            >
              <AiOutlineMail
                className="t-text-f-l t-p-f-4 t-rounded-full t-text-f-primary-99"
                style={{ backgroundColor: themeColor }}
              />
              <span>{email}</span>
            </Link>
          </li>
          <li>
            <Link
              to={`tel:${contact.replace(/[ +()-]/g, "")}`}
              target="_blank"
              className="t-flex t-items-center t-gap-f-8"
            >
              <FaPhoneAlt
                className="t-text-f-l t-p-f-4 t-rounded-full t-text-f-primary-99"
                style={{ backgroundColor: themeColor }}
              />
              <span>{contact}</span>
            </Link>
          </li>
          <li>
            <Link
              to={"https://" + website}
              target="_blank"
              className="t-flex t-items-center t-gap-f-8"
            >
              <TbWorldWww
                className="t-text-f-l t-p-f-4 t-rounded-full t-text-f-primary-99"
                style={{ backgroundColor: themeColor }}
              />
              <span>{website}</span>
            </Link>
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
          isLink={false}
          href={`tel:${contact.replace(/[ +()-]/g, "")}`}
          className="f-btn-sm f-btn-primary t-flex t-items-center justify-content-center t-text-f-base"
          handleClick={() => {
            const vcfFileContent = `BEGIN:VCARD
VERSION:3.0
FN:${fullName}
ORG:${companyName}
ADR;TYPE=WORK:${companyAddress}
TITLE:${role}
URL:https://${website}
TEL;TYPE=CELL:${contact}
END:VCARD`;
            const vcfFile = new Blob([vcfFileContent], {
              type: "text/plain;charset=utf-8",
            });
            const downloadVFCLink = document.createElement("a");
            const objectURL = URL.createObjectURL(vcfFile);
            downloadVFCLink.href = objectURL;
            downloadVFCLink.download =
              `${fullName.toLowerCase().replace(/ /g, "-")}` +
              "contact-details.vcf";
            downloadVFCLink.click();
            URL.revokeObjectURL(downloadVFCLink.href);
          }}
        >
          +Add Contact
        </Button>
      </div>
    </article>
  );
};

export default DigitalProfileTemplate1;
