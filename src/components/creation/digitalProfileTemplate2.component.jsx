import IconColoredFacebook from "../../assets/icon-colored-facebook.svg?react";
import IconColoredInstagram from "../../assets/icon-colored-instagram.svg?react";
import IconColoredLinkedin from "../../assets/icon-colored-linkedin.svg?react";
import IconColoredTwitter from "../../assets/icon-colored-twitter.svg?react";
import IconColoredYoutube from "../../assets/icon-colored-youtube.svg?react";
import IconColoredWhatsapp from "../../assets/icon-colored-whatsapp.svg?react";
import { BsArrowRight } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import arch1 from "../../assets/arch-1.jpg";
import arch2 from "../../assets/arch-2.jpg";
import arch3 from "../../assets/arch-3.jpg";
import arch4 from "../../assets/arch-4.jpg";
import Color from "color";
import Button from "../ui/button.component";

const worksArr = [
  {
    img: arch1,
    href: "https://www.google.com",
    title: "image of arch1",
  },
  {
    img: arch2,
    href: "https://www.facebook.com",
    title: "image of arch2",
  },
  {
    img: arch3,
    href: "https://www.instagram.com",
    title: "image of arch3",
  },
  {
    img: arch4,
    href: "https://www.twitter.com",
    title: "image of arch4",
  },
];

const DigitalProfileTemplate2 = ({
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
      <section className="t-h-[200px] t-relative t-flex t-justify-end t-overflow-hidden">
        <img
          src={profilePic}
          alt={`profile picture of ${fullName}`}
          className="t-w-full t-h-full t-object-cover"
        />
        {isEditing && (
          <div className="t-absolute t-top-0 t-left-0 t-w-full t-h-full t-bg-f-primary-30 t-text-f-primary-99 t-flex t-items-center t-justify-center t-opacity-75">
            Profile Image
          </div>
        )}
      </section>

      {/* header section */}
      <header className="t-mb-f-16">
        {/* logo and text container */}
        <div className="t-grid t-grid-cols-[1fr_2fr] t-items-center t-gap-f-16 t-pl-f-8 t-py-f-16">
          {/* left side - image */}
          <div className="t-w-full t-aspect-square t-rounded-full t-border-2 t-p-f-4 t-relative t-overflow-hidden">
            <img
              src={logo}
              alt={`${companyName}`}
              className="t-w-full t-h-full t-object-contain"
              style={{ borderColor: themeColor }}
            />
            {isEditing && (
              <div className="t-absolute t-top-0 t-left-0 t-w-full t-h-full t-bg-f-primary-30 t-text-f-primary-99 t-flex t-items-center t-justify-center t-opacity-75">
                Logo
              </div>
            )}
          </div>
          {/* right side - text */}
          <div>
            <h2
              className="t-rounded-l-f-8 t-p-f-8 t-text-white t-text-3xl t-mb-f-8"
              style={{ background: metaBandBgColor, color: metaFullNameColor }}
            >
              {fullName}
            </h2>
            <p
              className="t-border-l-2 t-text-base t-px-f-4"
              style={{ borderColor: themeColor }}
            >
              {role}
            </p>
          </div>
        </div>
        {/* divider */}
        <div className="t-h-f-2 t-bg-slate-100 t-mx-f-24"></div>
      </header>

      {/* my works */}
      {/* <div className="t-px-f-8 t-mb-f-24">
    <header className="t-flex t-items-center t-justify-between t-mb-f-16">
      <h3>My Works</h3>
      <Link
        to="#view-all-work"
        className="t-text-[#D35345] t-flex t-items-center t-underline t-underline-offset-2 t-gap-f-4 hover:t-no-underline"
      >
        <span>{companyName}</span> <BsArrowRight />
      </Link>
    </header>

    <ul className="t-grid t-grid-cols-4 t-gap-f-8">
      {worksArr.map(({ img, href, title }, idx) => (
        <li key={idx}>
          <Link
            to={href}
            className="t-block t-h-[75px] t-rounded-f-8 t-overflow-hidden"
          >
            <img
              src={img}
              title={title}
              className="t-w-full t-h-full t-object-cover hover:t-scale-110 t-transition-all t-duration-300"
            />
          </Link>
        </li>
      ))}
    </ul>
  </div> */}

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
              <MdEmail className="t-text-f-md" style={{ color: themeColor }} />
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
                className="t-text-f-md"
                style={{ color: themeColor }}
              />
              <span>{contact}</span>
            </Link>
          </li>
          <li>
            <div className="t-flex t-items-center t-gap-f-8">
              <FaLocationDot
                className="t-text-f-md"
                style={{ color: themeColor }}
              />
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

export default DigitalProfileTemplate2;
