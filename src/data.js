// importing images
import fabLogo from "./assets/fab-log-blue-trasparent.png";
import wifi from "./assets/wifi.png";
import cardAestheticDarkGrey from "./assets/card-aesthetic-dark-grey.png";
import cardAestheticDullGrey from "./assets/card-aesthetic-dull-grey.png";
import cardDarkGradient from "./assets/card-dark-gradient.png";
import cardFlorescentGradient from "./assets/card-florescent-gradient.png";
import cardMatteBlack from "./assets/card-matte-black.png";
import cardPurpleYellowGradient from "./assets/card-purple-yellow-gradient.png";
import logoYoutube from "./assets/logo-youtube.svg";
import logoUdemy from "./assets/logo-udemy.svg";
import logoSkillshare from "./assets/logo-skillshare.svg";
import logoGoole from "./assets/logo-goole.svg";
import logoFacebook from "./assets/logo-facebook.svg";
import iconArrowDown from "./assets/icon-arrow-down.png";
import iconMaleUser from "./assets/icon-male-user.png";
import iconChatMessage from "./assets/icon-chat-message.png";
import cardTapOnMobile from "./assets/card-tap-on-mobile.png";
import doneWaneProfileInMobile from "./assets/done-wane-profile-in-mobile.png";
import iconAddMaleUserGroup from "./assets/icon-add-male-user-group.png";
import iconMeetingRoom from "./assets/icon-meeting-room.png";
import iconProfile from "./assets/icon-profile.png";

import iconInstagram from "./assets/icon-instagram.svg";
import iconLinkedin from "./assets/icon-linkedin.svg";
import iconPinterest from "./assets/icon-pinterest.svg";
import iconTiktok from "./assets/icon-tiktok.svg";
import iconYoutube from "./assets/icon-youtube.svg";

// importing lotties
import cardSlideAnimation from "./assets/lotties/card-slide-animation.json";
import circleAnimation from "./assets/lotties/circle-animation.json";
import cursorAnimation from "./assets/lotties/cursor-animation.json";
import emilyAnimation from "./assets/lotties/emily-animation.json";
import tapAnimation from "./assets/lotties/tap-animation.json";

const homeNavigationList = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "About",
    href: "/about",
  },
];

const checkoutList = [
  {
    href: "/fab-digital-marketing",
    img: fabLogo,
    title: "Checkout our",
    subtitle: "Fab Digital Agency",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat error, earum odit rerum adipisci.",
  },
  {
    href: "/nfc-cards",
    img: wifi,
    title: "Checkout our",
    subtitle: "NFC Cards",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat error, earum odit rerum adipisci.",
  },
];

// data for NFC home page
// -- links
const nfcHomePageLinks = [
  {
    title: "Products",
    href: "/nfc/products",
  },
  {
    title: "Dashboard",
    href: "/nfc/dashboard",
  },
  {
    title: "Contact",
    href: "/nfc/contact",
  },
  {
    title: "Help",
    href: "/nfc/help",
  },
];

// --orginization details
const nfcOrganizationDetails = [
  {
    img: iconAddMaleUserGroup,
    title: "Organisations",
    num: "30,000+",
  },
  {
    img: iconMeetingRoom,
    title: "Connections made",
    num: "3M+",
  },
  {
    img: iconProfile,
    title: "Profiles",
    num: "100,000+",
  },
];

// -- features
const nfcFeatures = [
  {
    title: "Customized Cards",
    description:
      "Embrace your creativity and design personalized NFC cards that reflect your style. Our user-friendly platform makes it easy to bring your ideas to life, letting you customize every detail. From colors to features, the possibilities are endless. Create your own unique NFC cards and open the door to a world of customized connectivity.",
    btn: "Customise Now",
    animation: cursorAnimation,
  },
  {
    title: "Digital Profile",
    description:
      "Design your own attractive digital profile, setting the stage for people to reach out after a tap. With easy customization, you can add your photo, bio, and more. Let your NFC card become a gateway for connections and opportunities.",
    btn: "Customise Now",
    animation: tapAnimation,
  },
  {
    title: "Our Templates",
    description:
      "Don't have the time to create a profile from scratch? Explore our ready-made templates for an easier solution. Choose from a variety of styles to quickly set up your digital profile on your NFC card, saving you time while ensuring a professional look that suits you.",
    btn: "Customise Now",
    animation: cardSlideAnimation,
  },
];

// --cards
const nfcCards = [
  {
    img: cardAestheticDarkGrey,
    creator: "Creator Name",
    cardName: "Matte black",
    description: "Customise: card design & digital profile",
    price: 849,
  },
  {
    img: cardAestheticDullGrey,
    creator: "Creator Name",
    cardName: "Aesthetic dark grey",
    description: "Customise: card design & digital profile",
    price: 849,
  },
  {
    img: cardDarkGradient,
    creator: "Creator Name",
    cardName: "Aesthetic dull grey",
    description: "Customise: card design & digital profile",
    price: 849,
  },
  {
    img: cardFlorescentGradient,
    creator: "Creator Name",
    cardName: "Purple - Yellow Gradient",
    description: "Customise: card design & digital profile",
    price: 849,
  },
  {
    img: cardMatteBlack,
    creator: "Creator Name",
    cardName: "Florescent Gradient",
    description: "Customise: card design & digital profile",
    price: 849,
  },
  {
    img: cardPurpleYellowGradient,
    creator: "Creator Name",
    cardName: "Dark Gradient",
    description: "Customise: card design & digital profile",
    price: 849,
  },
];

// --steps
const nfcSteps = [
  {
    img: cardTapOnMobile,
    title: "Tap your card on a mobile phone",
    subtitle:
      "Make sure the user’s phone has the NFC feature turned on, otherwise the tap would go unnoticed.",
  },
  {
    img: doneWaneProfileInMobile,
    title: "Your digital profile is shared",
    subtitle: "Enjoy the future of networking, with a single Tap!",
  },
];

// --app statistics
const nfcAppStats = [
  {
    title: "Downloads",
    num: 1000,
    icon: iconArrowDown,
  },
  {
    title: "Positive Reviews",
    num: 700,
    icon: iconChatMessage,
  },
  {
    title: "Active Users",
    num: 950,
    icon: iconMaleUser,
  },
];

// --clients
const nfcClients = [
  {
    title: "Youtube Logo",
    img: logoYoutube,
  },
  {
    title: "Udemy Logo",
    img: logoUdemy,
  },
  {
    title: "Skillshare Logo",
    img: logoSkillshare,
  },
  {
    title: "Google Logo",
    img: logoGoole,
  },
  {
    title: "Facebook Logo",
    img: logoFacebook,
  },
];

// --frequently asked questions
const nfcFaqs = [
  {
    question: "Why go digital with your business card?",
    answer:
      "Going digital with your business card offers numerous advantages. Firstly, it's environmentally friendly, reducing the need for paper and supporting sustainability. Secondly, NFC business cards by Fab Digital Solution provide an innovative and modern way for professionals to exchange contact information effortlessly. With just a tap of a smartphone, potential clients and partners can instantly access your contact details, portfolio, or website. It's a cutting-edge approach that enhances your professional image and facilitates seamless networking.",
  },
  {
    question: "What technology does Fab use?",
    answer:
      "Fab Digital Solution utilizes Near Field Communication (NFC) technology for its business cards. NFC is a short-range wireless communication technology that enables quick and secure data exchange between an NFC-enabled device, like a smartphone, and the NFC chip embedded in the business card. Our cards are equipped with high-quality NFC chips that ensure reliable and swift information transfer, making the exchange of contact details more convenient than ever.",
  },
  {
    question: "What is the turnaround time for a Fab card?",
    answer:
      "The turnaround time for Fab Digital Solution's NFC business cards is typically [mention the standard turnaround time, e.g., 5-7 business days] from the date of order confirmation. This includes the design, production, and programming of the NFC chips. However, specific turnaround times may vary based on the order quantity, customization requirements, and other factors. We strive to deliver our high-quality, fully functional NFC business cards to our clients within the shortest possible time frame.",
  },
  {
    question: "How does Fab card works?",
    answer:
      "Fab Digital Solution's NFC business cards operate through Near Field Communication (NFC) technology. Each business card contains a small NFC chip embedded within it. When an NFC-enabled smartphone is brought close to the card (typically within a few centimeters), the NFC chip and the smartphone establish a communication link. The smartphone then reads the data stored on the chip, which usually includes your contact information, social media links, portfolio, or any other details you choose to share. This seamless and contactless process simplifies networking, allowing individuals to quickly access and store your information, enhancing business connections and interactions.",
  },
];

// --footer page links
const nfcFooterPageLinks = [
  {
    title: "Contact us",
    href: "#contact-us",
  },
  {
    title: "How it Works",
    href: "#how-it-works",
  },
  {
    title: "Create",
    href: "#create",
  },
  {
    title: "Templates",
    href: "#templates",
  },
  {
    title: "Templates",
    href: "#templates",
  },
  {
    title: "Terms & Services",
    href: "#terms-&-Services",
  },
];

// --footer community links
const nfcFooterCommunityLinks = [
  {
    title: "Help Center",
    href: "#help-center",
  },
  {
    title: "How it Works",
    href: "#how-it-works",
  },
  {
    title: "Invite Team",
    href: "#invite-team",
  },
  {
    title: "Dashboard",
    href: "#dashboard",
  },
  {
    title: "Blog",
    href: "#blog",
  },
  {
    title: "Newsletters",
    href: "#newsletters",
  },
];

// --footer social media links
const nfcSocialMediaLinks = [
  {
    title: "Instagram",
    href: "#instagram",
    icon: iconInstagram,
  },
  {
    title: "LinkedIn",
    href: "#linkedIn",
    icon: iconLinkedin,
  },
  {
    title: "Pinterest",
    href: "#pinterest",
    icon: iconPinterest,
  },
  {
    title: "Tiktok",
    href: "#tiktok",
    icon: iconTiktok,
  },
  {
    title: "YouTube",
    href: "#youtube",
    icon: iconYoutube,
  },
];

export {
  homeNavigationList,
  checkoutList,
  nfcHomePageLinks,
  nfcOrganizationDetails,
  nfcFeatures,
  nfcCards,
  nfcSteps,
  nfcAppStats,
  nfcClients,
  nfcFaqs,
  nfcFooterPageLinks,
  nfcFooterCommunityLinks,
  nfcSocialMediaLinks,
};
