import { Link } from "react-router-dom";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsArrowDown, BsFillPlayFill } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { BiSolidHeartCircle } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { LuNfc } from "react-icons/lu";
import Stars from "../../components/stars.component";
import { fabAgencyReviews, fabAgencyFaqs } from "../../data";
// import HeroImage from "../../assets/hero-section-img.svg?react";
import heroImage from "../../assets/hero-section-img.png";
import aboutOurTeam from "../../assets/about-our-team.png";
import IconSocialMediaManagement from "../../assets/icon-social-media-management.svg?react";
import IconContentCreation from "../../assets/icon-content-creation.svg?react";
import IconWebsiteDevelopment from "../../assets/icon-website-development.svg?react";
import skillMaxDashboard from "../../assets/skillMax-dashboard.png";
import fabTapDashboard from "../../assets/fabTap-dashboard.png";
import { fabAgencyServices } from "../../data";
import ChatbotSection from "../../components/chatbotSection.component";
import client1441Fitness from "../../assets/client-1441-fitness.png";
import clientAlefiyaFitness from "../../assets/client-alefiya-fitness.png";
import clientJumbo from "../../assets/client-jumbo.png";
import clientKomfortPlanetSystem from "../../assets/client-komfort-planet-system.png";
import clientMountain from "../../assets/client-mountain.png";
import clientOcrFitnessTheGrindYouVsYou from "../../assets/client-ocr-fitness-the-grind-you-vs-you-dark.png";
import clientProSports from "../../assets/client-pro-sports.png";
import clientProSportsCricket from "../../assets/client-pro-sports-cricket.png";
import clientRazain from "../../assets/client-razain.png";
import clientSaraOman from "../../assets/client-sara-oman.png";
import clientSaraUae from "../../assets/client-sara-uae.png";
import result1 from "../../assets/result-1.png";
import result2 from "../../assets/result-2.png";
import result3 from "../../assets/result-3.png";
import { IoShareSocial, IoMagnetSharp } from "react-icons/io5";
import { FaFilterCircleDollar } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import fabLogo from "../../assets/fab-agency-logo-blue-white-bg.png";
import { ImQuotesLeft } from "react-icons/im";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

const steps = [
  {
    id: "0",
    message: "Welcome to Fab Digital Marketing!",
    trigger: "1",
  },
  {
    id: "1",
    message: "Please select an options",
    trigger: "2",
  },
  {
    id: "2",
    options: [
      { value: 1, label: "List of services", trigger: "3" },
      { value: 2, label: "Customer care number", trigger: "4" },
    ],
  },
  {
    id: "3",
    component: (
      <ul className="t-flex t-flex-col t-gap-f-8">
        {fabAgencyServices.map(({ id, title, pageHref }) => (
          <li key={id}>
            <Link to={pageHref} className="t-text-f-primary-40 t-underline">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    ),
    trigger: "5",
  },
  {
    id: "4",
    component: (
      <Link className="t-text-f-primary-40 t-underline" to="tel:+918306823235">
        +918306823235
      </Link>
    ),
    trigger: "5",
  },
  {
    id: "5",
    options: [
      { value: 3, label: "Close the chat", trigger: "6" },
      { value: 4, label: "Repeat", trigger: "7" },
    ],
  },
  {
    id: "6",
    message: () => {
      setTimeout(() => setShowChat(false), 4000);
      return "Closing in 4 sec.";
    },
    end: true,
  },
  {
    id: "7",
    message: "Ok",
    trigger: "0",
  },
];

const theme = {
  background: "#ed",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#EF6C00",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#EF6C00",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

const AgencyHome = () => {
  return (
    <div>
      {/* hero section starts */}
      <section className="t-mb-f-24 md:t-mb-f-48 lg:t-mb-f-64">
        <div className="container t-grid md:t-grid-cols-2 t-items-center">
          {/* text container */}
          <div className="t-text-center md:t-text-start">
            <h2 className="t-text-f-l md:t-text-f-xl lg:t-text-f-2xl t-mb-f-16 lg:t-mb-f-32">
              Don't Settle for Ordinary – Let Your{" "}
              <span className="t-text-f-primary-50">Brand Grow</span> With Our{" "}
              <span className="t-text-f-secondary-50">
                Personalized Marketing Strategies
              </span>
            </h2>
            <p className="t-text-f-base t-mb-f-24">
              We're Here to Craft, Execute, and Amplify Your Marketing
              Strategies, Ensuring your business's exponential growth
            </p>
            {/* buttons container */}
            <div className="t-flex t-justify-center md:t-justify-start t-gap-f-16">
              <a
                className="f-btn-sm lg:f-btn-md f-btn-primary"
                href="#services-section"
              >
                Show Me How
              </a>
              {/* <button className="t-flex t-items-center t-gap-f-4 t-text-f-primary-40 t-text-f-md">
                <div className="t-bg-f-primary-98 t-flex t-items-center t-justify-center t-pl-f-16 t-pr-[10px] t-py-[12px] t-rounded-full t-shadow-lg">
                  <BsFillPlayFill className="shadow-lg" />
                </div>
                <span>Play Video</span>
              </button> */}
            </div>
          </div>
          {/* image container */}
          <div className="t-hidden md:t-block">
            {/* <HeroImage /> */}
            <img src={heroImage} alt="hero image" className="t-w-full" />
          </div>
        </div>
      </section>
      {/* hero section ends */}

      {/* client section starts */}
      <section className="t-mb-f-24 md:t-mb-f-48 lg:t-mb-f-64">
        <div className="container">
          <h2 className="t-text-f-l md:t-text-f-xl lg:t-text-f-2xl t-mb-f-24 lg:t-mb-f-48">
            Brands that <span className="t-text-f-primary-50">Trust Us</span>
          </h2>
          {/* clients container */}
          {/* scroll container */}
          <div className="t-overflow-hidden animation-pause-on-hover">
            {/* list of clients */}
            <div className="t-flex t-gap-f-24 t-w-max">
              {Array.from({ length: 2 }, (_, idx) => (
                <div
                  className="t-flex t-gap-f-24 t-shrink-0 animation-scrollToLeft"
                  key={idx}
                >
                  <img
                    className="t-w-f-64 t-h-f-64 md:t-w-f-96 md:t-h-f-96 lg:t-w-[150px] lg:t-h-[150px] t-object-contain t-shrink-0"
                    src={client1441Fitness}
                  />
                  <img
                    className="t-w-f-64 t-h-f-64 md:t-w-f-96 md:t-h-f-96 lg:t-w-[150px] lg:t-h-[150px] t-object-contain t-shrink-0"
                    src={clientAlefiyaFitness}
                  />
                  <img
                    className="t-w-f-64 t-h-f-64 md:t-w-f-96 md:t-h-f-96 lg:t-w-[150px] lg:t-h-[150px] t-object-contain t-shrink-0"
                    src={clientJumbo}
                  />
                  <img
                    className="t-w-f-64 t-h-f-64 md:t-w-f-96 md:t-h-f-96 lg:t-w-[150px] lg:t-h-[150px] t-object-contain t-shrink-0"
                    src={clientKomfortPlanetSystem}
                  />
                  <img
                    className="t-w-f-64 t-h-f-64 md:t-w-f-96 md:t-h-f-96 lg:t-w-[150px] lg:t-h-[150px] t-object-contain t-shrink-0"
                    src={clientMountain}
                  />
                  <img
                    className="t-w-f-64 t-h-f-64 md:t-w-f-96 md:t-h-f-96 lg:t-w-[150px] lg:t-h-[150px] t-object-contain t-shrink-0"
                    src={clientOcrFitnessTheGrindYouVsYou}
                  />
                  <img
                    className="t-w-f-64 t-h-f-64 md:t-w-f-96 md:t-h-f-96 lg:t-w-[150px] lg:t-h-[150px] t-object-contain t-shrink-0"
                    src={clientProSports}
                  />
                  <img
                    className="t-w-f-64 t-h-f-64 md:t-w-f-96 md:t-h-f-96 lg:t-w-[150px] lg:t-h-[150px] t-object-contain t-shrink-0"
                    src={clientProSportsCricket}
                  />
                  <img
                    className="t-w-f-64 t-h-f-64 md:t-w-f-96 md:t-h-f-96 lg:t-w-[150px] lg:t-h-[150px] t-object-contain t-shrink-0"
                    src={clientRazain}
                  />
                  <img
                    className="t-w-f-64 t-h-f-64 md:t-w-f-96 md:t-h-f-96 lg:t-w-[150px] lg:t-h-[150px] t-object-contain t-shrink-0"
                    src={clientSaraOman}
                  />
                  <img
                    className="t-w-f-64 t-h-f-64 md:t-w-f-96 md:t-h-f-96 lg:t-w-[150px] lg:t-h-[150px] t-object-contain t-shrink-0"
                    src={clientSaraUae}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* <div className="t-flex t-gap-f-56 t-items-center"></div> */}
        </div>
      </section>
      {/* client section ends */}

      {/* intro section starts */}
      <section className="t-mb-f-24 md:t-mb-f-48 lg:t-mb-f-64">
        {/* what we provide starts */}
        <div className="container t-mb-f-16 md:t-mb-f-24 lg:t-mb-f-32">
          <div className="t-grid md:t-grid-cols-2 t-items-center t-gap-f-24 lg:t-gap-f-96">
            {/* text container */}
            <div>
              <h3 className="t-text-f-l md:t-text-f-xl lg:t-text-f-2xl t-mb-f-24">
                Your{" "}
                <span className="t-text-f-secondary-50">
                  All-Inclusive Marketing
                </span>{" "}
                Solution
              </h3>
              <p className="t-text-f-base">
                We provide personalized strategies, Done-For-You Services & fast
                track your brand's growth in today's competitive market.
              </p>
            </div>

            {/* cards container */}
            <div className="t-grid sm:t-grid-cols-2 md:t-grid-cols-1 lg:t-grid-cols-2 t-gap-f-16 xl:t-gap-f-24">
              <a
                className="border t-shadow-md t-border-f-primary-60 t-bg-f-primary-98 t-items-center t-flex-col t-text-f-md md:t-flex-row md:t-justify-between lg:t-text-f-md xl:t-text-f-l t-flex lg:t-flex-col lg:t-justify-between t-gap-f-16 t-p-f-16 t-rounded-f-8 hover:-t-translate-y-f-16 t-transition-all t-duration-300 hover:t-shadow-lg hover:t-bg-f-primary-98"
                href="#services-section"
              >
                <BiSolidHeartCircle className="t-text-green-500 lg:t-self-end t-text-5xl" />
                <h5 className="t-center t-text-center md:t-text-start">
                  <span className="t-text-green-500">Services </span>
                  we provide for you
                </h5>
                <BsArrowRight className="t-text-black lg:t-self-end t-ms-auto t-hidden md:t-block" />
              </a>

              <Link
                className="border t-shadow-md t-border-f-primary-60 t-bg-f-primary-98 t-items-center t-flex-col t-text-f-md md:t-flex-row md:t-justify-between lg:t-text-f-md xl:t-text-f-l t-flex lg:t-flex-col lg:t-justify-between t-gap-f-16 t-p-f-16 t-rounded-f-8 hover:-t-translate-y-f-16 t-transition-all t-duration-300 hover:t-shadow-lg hover:t-bg-f-primary-98"
                to="/nfc"
              >
                <LuNfc className="t-text-f-secondary-50 lg:t-self-end t-text-5xl" />
                <h5 className="t-center t-text-center md:t-text-start">
                  <span className="t-text-f-secondary-50">Fabtap Cards </span>
                  we provide for you
                </h5>
                <BsArrowRight className="t-text-black lg:t-self-end t-ms-auto t-hidden md:t-block" />
              </Link>

              {/* <Link
                className="border t-shadow-md t-border-f-primary-60 t-bg-f-primary-98 t-text-f-l t-flex t-flex-col t-justify-between t-gap-f-16 t-p-f-16 t-rounded-f-8 hover:-t-translate-y-f-16 t-transition-all t-duration-300 hover:t-shadow-lg hover:t-bg-f-primary-98"
                to="/nfc"
              >
                <LuNfc className="t-text-f-secondary-50 t-self-end t-text-4xl" />
                <h5>
                  Checkout our{" "}
                  <span className="t-text-f-secondary-50">Fabtap Cards</span>.
                </h5>
                <BsArrowRight className="t-text-black t-self-end" />
              </Link> */}
            </div>
          </div>
        </div>
        {/* what we provide ends */}

        {/* about our team starts */}
        <div className="t-relative t-mb-f-16 md:t-mb-f-24 lg:t-mb-f-32">
          <div className="container">
            <div className="t-grid lg:t-grid-cols-2 t-items-center t-gap-f-96">
              {/* image container */}
              {/* <div className="-t-translate-x-[28%] t-translate-y-[20%] t-scale-150"> */}
              <div className="t-hidden lg:t-block">
                <img
                  src={aboutOurTeam}
                  className="t-absolute t-top-0 t-left-0 t-h-[400px]"
                  alt="people having a meeting in a laptop"
                />
              </div>

              {/* text container */}
              <div>
                <h3 className="t-text-f-l md:t-text-f-xl lg:t-text-f-2xl t-mb-f-24">
                  We are Your{" "}
                  <span className="t-text-f-primary-50">
                    Marketing Power House
                  </span>
                </h3>
                <p className="t-text-f-base t-mb-f-16">
                  Let's face it- marketing is not a one-person job. That's where
                  we come in- Your Marketing Power house. We are not your
                  average team- we are a team of creative minds and marketing
                  experts.
                </p>
                <p className="t-text-f-base t-mb-f-16">
                  We formulate result-oriented strategies for you to give your
                  brand the engagement it needs, the sales it wants and the
                  customer loyalty it deserves. With our sight set on'
                  amplifying your business growth, We make your business stand
                  out in the crowd, using our well-crafted strategies,
                  streamlined systems and powerful tools.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* about our team ends */}

        {/* our services provide starts */}
        <div className="container" id="services-section">
          <div className="t-grid md:t-grid-cols-2 t-items-center md:t-gap-f-96">
            {/* text container */}
            <div>
              <h3 className="t-text-f-l md:t-text-f-xl lg:t-text-f-2xl t-mb-f-24">
                Our <span className="t-text-green-500">Services</span>
              </h3>
              <p className="t-text-f-base t-mb-f-16">
                We specialize in helping your brand take the lead in the highly
                competitive online market.
              </p>
              <p className="t-text-f-base t-mb-f-16">
                From captivating social media management, aimed at increasing
                engagement and building trust among your customers, to
                performance marketing strategies designed to generate sales, and
                crafting customer-friendly websites – we're here for you as your
                marketing powerhouse.
              </p>
            </div>

            {/* cards container */}
            <div className="t-grid t-grid-cols-2 t-grid-rows-2 md:t-grid-rows-4 md:t-grid-cols-1 t-gap-f-24">
              {/* social media marketing card */}
              <Link
                className="t-flex t-flex-col md:t-flex-row t-items-center t-justify-center t-text-center md:t-text-start md:flex-row md:t-items-center md:t-justify-between t-text-f-sm lg:t-text-f-md t-bg-f-secondary-90 t-font-semibold t-p-f-8 lg:t-p-f-16 t-gap-f-16 t-rounded-f-8 hover:t-bg-f-secondary-80"
                to="/marketing/services/social-media-marketing"
              >
                <div className="t-text-f-secondary-20 t-bg-f-secondary-80 t-p-f-8 t-text-f-base lg:t-text-f-l t-rounded-full">
                  <IoShareSocial />
                </div>
                <span>Social Media Marketing</span>
                <div className="t-w-f-24 t-h-f-24 t-text-[24px] lg:t-w-f-32 lg:t-h-f-32 lg:t-text-[32px] ms-auto t-hidden md:t-block">
                  <BsArrowRight />
                </div>
              </Link>

              {/* result driven ads campaigns card */}
              <Link
                className="t-flex t-flex-col md:t-flex-row t-items-center t-justify-center t-text-center md:t-text-start md:flex-row md:t-items-center md:t-justify-between t-text-f-sm lg:t-text-f-md t-bg-green-100 t-font-semibold t-p-f-8 lg:t-p-f-16 t-gap-f-16 t-rounded-f-8 hover:t-bg-green-200"
                to="#content-creation"
              >
                <div className="t-text-green-800 t-bg-green-200 t-p-f-8 t-text-f-base lg:t-text-f-l t-rounded-full">
                  <FaFilterCircleDollar />
                </div>
                <span>Result-Driven Ads Campaigns</span>
                <div className="t-w-f-24 t-h-f-24 t-text-[24px] lg:t-w-f-32 lg:t-h-f-32 lg:t-text-[32px] ms-auto t-hidden md:t-block">
                  <BsArrowRight />
                </div>
              </Link>

              {/* attract clients on automation card */}
              <Link
                className="t-flex t-flex-col md:t-flex-row t-items-center t-justify-center t-text-center md:t-text-start md:flex-row md:t-items-center md:t-justify-between t-text-f-sm lg:t-text-f-md t-bg-f-primary-90 t-font-semibold t-p-f-8 lg:t-p-f-16 t-gap-f-16 t-rounded-f-8 hover:t-bg-f-primary-80"
                to="/marketing/services/websites"
              >
                <div className="t-text-f-primary-20 t-bg-f-primary-80 t-p-f-8 t-text-f-base lg:t-text-f-l t-rounded-full">
                  <IoMagnetSharp />
                </div>
                <span>Attract Clients on Automation</span>
                <div className="t-w-f-24 t-h-f-24 t-text-[24px] lg:t-w-f-32 lg:t-h-f-32 lg:t-text-[32px] ms-auto t-hidden md:t-block">
                  <BsArrowRight />
                </div>
              </Link>

              {/* widen your reach with website & google ads card */}
              <Link
                className="t-flex t-flex-col md:t-flex-row t-items-center t-justify-center t-text-center md:t-text-start md:flex-row md:t-items-center md:t-justify-between t-text-f-sm lg:t-text-f-md t-bg-f-secondary-90 t-font-semibold t-p-f-8 lg:t-p-f-16 t-gap-f-16 t-rounded-f-8 hover:t-bg-f-secondary-80"
                to="/marketing/services/websites"
              >
                <div className="t-text-f-secondary-20 t-bg-f-secondary-80 t-p-f-8 t-text-f-base lg:t-text-f-l t-rounded-full">
                  <CgWebsite />
                </div>
                <span>Widen your reach with Website & Google Ads</span>
                <div className="t-w-f-24 t-h-f-24 t-text-[24px] lg:t-w-f-32 lg:t-h-f-32 lg:t-text-[32px] ms-auto t-hidden md:t-block">
                  <BsArrowRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* our services provide ends */}
      </section>
      {/* intro section ends */}

      {/* best works starts */}
      <section
        className="t-mb-f-24 md:t-mb-f-48 lg:t-mb-f-64"
        id="works-section"
      >
        <div className="container t-text-center">
          <h2 className="t-text-f-l md:t-text-f-xl lg:t-text-f-2xl t-mb-f-48 t-flex t-flex-col">
            <span>Client Results</span>
            <span className="t-text-f-primary-50">
              More than 10x ROAS in Revenue Generated
            </span>
          </h2>

          {/* list of websites */}
          <ul className="t-grid md:t-grid-cols-3 t-gap-f-16 t-mb-f-24 t-justify-center">
            <li className="t-bg-f-primary-90 t-p-f-4 t-rounded-f-8 hover:t-scale-105 t-transition-all t-duration-150 hover:t-shadow-xl">
              <img
                src={result1}
                alt="screenshot of Skill Max dashboard"
                className="t-w-full t-rounded-f-8"
              />
            </li>
            <li className="t-bg-f-primary-90 t-p-f-4 t-rounded-f-8 hover:t-scale-105 t-transition-all t-duration-150 hover:t-shadow-xl">
              <img
                src={result2}
                alt="screenshot of Fab Tap dashboard"
                className="t-w-full t-rounded-f-8"
              />
            </li>
            <li className="t-bg-f-primary-90 t-p-f-4 t-rounded-f-8 hover:t-scale-105 t-transition-all t-duration-150 hover:t-shadow-xl">
              <img
                src={result3}
                alt="screenshot of Skill Max dashboard"
                className="t-w-full t-rounded-f-8"
              />
            </li>
          </ul>

          {/* <Link
            className="f-btn-md f-btn-primary"
            to="/marketing/portfolios/websites"
          >
            View all
          </Link> */}
        </div>
      </section>
      {/* best works ends */}

      {/* Feedback section starts */}
      <section className="t-mb-f-24 md:t-mb-f-48 lg:t-mb-f-64">
        <div className="container">
          <h2 className="t-text-f-l md:t-text-f-xl lg:t-text-f-2xl t-mb-f-24 t-text-center">
            What Our <span className="t-text-f-secondary-50">Client</span> Says{" "}
            <span className="t-text-f-secondary-50">About Us</span>
          </h2>
          {/* carousel starts */}
          <div
            id="reviewsCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {/* <div className="carousel-item active">
      <img src="..." className="d-block w-100" alt="...">
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="...">
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="...">
    </div> */}
              {(function() {
                let reviewTempList = [];
                const reviewList = [];
                const screenSize =
                  window.innerWidth >= 1024
                    ? "lg"
                    : window.innerWidth >= 768
                    ? "md"
                    : "sm";
                console.log("screenSize", screenSize);
                for (let i = 0; i < fabAgencyReviews.length; i++) {
                  const {
                    description,
                    rating,
                    author,
                    company,
                  } = fabAgencyReviews[i];
                  const review = (
                    <article
                      key={i}
                      className="t-flex t-flex-col t-gap-f-24 t-rounded-f-8 t-border-2 t-border-f-secondary-50 t-p-f-24 t-bg-f-secondary-98 t-shadow-lg t-shadow-f-secondary-95"
                    >
                      <ImQuotesLeft className="t-w-f-48 t-h-f-48 t-object-contain t-text-f-secondary-50" />
                      <p className="t-text-f-base">{description}</p>
                      <Stars num={rating} />
                      {/* <div className="t-flex t-items-center t-gap-f-24">
            <img
              src={profilePic}
              alt={`Profile picture of ${author}`}
              className="t-w-f-96 t-h-f-96 t-object-cover t-rounded-full"
            />
            <div>
              <h4 className="t-text-f-md">{author}</h4>
              <h5 className="t-text-f-sm">{company}</h5>
            </div>
          </div> */}
                    </article>
                  );
                  reviewTempList.push(review);
                  if (
                    (screenSize === "md" && reviewTempList.length === 2) ||
                    (screenSize === "lg" && reviewTempList.length === 3) ||
                    screenSize === "sm"
                  ) {
                    reviewList.push([...reviewTempList]);
                    reviewTempList = [];
                  }
                }
                const carouselItems = reviewList.map((reviewArr, idx) => (
                  <div
                    className={`carousel-item t-px-f-56 md:t-px-f-96 ${
                      idx === 0 ? " active" : ""
                    }`}
                  >
                    <div
                      className={`t-grid ${
                        screenSize === "md"
                          ? "t-grid-cols-2"
                          : screenSize === "lg"
                          ? "t-grid-cols-3"
                          : ""
                      } t-gap-f-24`}
                    >
                      {reviewArr}
                    </div>
                  </div>
                ));
                return carouselItems;
              })()}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#reviewsCarousel"
              data-bs-slide="prev"
            >
              <IoIosArrowDropleftCircle className="t-text-f-secondary-50 t-text-f-3xl t-z-10" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#reviewsCarousel"
              data-bs-slide="next"
            >
              <IoIosArrowDroprightCircle className="t-text-f-secondary-50 t-text-f-3xl t-z-10" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* carousel ends */}
        </div>
      </section>
      {/* Feedback section ends */}

      {/* faq section starts */}
      <section className="t-mb-f-24 md:t-mb-f-48 lg:t-mb-f-64">
        <div className="container t-grid md:t-grid-cols-2 t-gap-f-16 md:t-gap-f-24">
          <header className="t-flex t-flex-col t-gap-f-8 t-items-center md:t-gap-f-24 md:t-items-start">
            <h2 className="t-text-f-l md:t-text-f-xl lg:t-text-f-2xl t-text-center md:t-text-start">
              Still have more questions in mind?
            </h2>
            <h3 className="t-text-f-base">Ask Away.</h3>
            <button
              type="button"
              className="f-btn-sm md:f-btn-md f-btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#contactInfo"
            >
              Get in Touch
            </button>
          </header>

          {/* faqs container */}
          <div>
            {/* faqs starts */}
            <div className="accordion accordion-flush" id="fabFaqs">
              {fabAgencyFaqs.map(({ question, answer }, idx) => (
                <div className="accordion-item" key={idx}>
                  <h2 className="accordion-header" id={`heading${idx}`}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${idx}`}
                      aria-controls={`collapse${idx}`}
                    >
                      {question}
                    </button>
                  </h2>
                  <div
                    id={`collapse${idx}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading${idx}`}
                    data-bs-parent="#fabFaqs"
                  >
                    <div className="accordion-body">
                      {answer.split("\n").map((para, idx) => (
                        <p className="t-mb-f-8" key={idx}>
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* faqs ends */}
            {/* <div className="t-flex t-justify-end">
              <Link
                to="#all-questions"
                className="t-text-f-primary-30 t-pt-f-24 t-flex t-items-center t-gap-f-8 t-border-b-2 t-border-f-primary-70"
              >
                See more Questions <BsArrowDown />
              </Link>
            </div> */}
          </div>
        </div>
      </section>
      {/* faq section ends */}

      {/* chat with us starts */}
      {/* <ChatbotSection steps={steps} /> */}
      <FloatingWhatsApp
        phoneNumber="971568781104"
        accountName="Fab Digital"
        avatar={fabLogo}
        chatMessage="How can we be a help to you?"
        allowEsc
        allowClickAway
        className="fixed bottom-0 right-0"
        statusMessage="Responds within 15 mins"
      />
      {/* chat with us ends */}
    </div>
  );
};

export default AgencyHome;
