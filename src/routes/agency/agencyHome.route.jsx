import { Link } from "react-router-dom";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsArrowDown, BsFillPlayFill } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { BiSolidHeartCircle } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { LuNfc } from "react-icons/lu";
import Stars from "../../components/stars.component";
import { fabAgencyReviews, fabAgencyFaqs } from "../../data";
import HeroImage from "../../assets/hero-section-img.svg?react";
import aboutOurTeam from "../../assets/about-our-team.png";
import IconSocialMediaManagement from "../../assets/icon-social-media-management.svg?react";
import IconContentCreation from "../../assets/icon-content-creation.svg?react";
import IconWebsiteDevelopment from "../../assets/icon-website-development.svg?react";
import skillMaxDashboard from "../../assets/skillMax-dashboard.png";
import fabTapDashboard from "../../assets/fabTap-dashboard.png";
import { fabAgencyServices } from "../../data";
import ChatbotSection from "../../components/chatbotSection.component";

const AgencyHome = () => {
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
        <Link
          className="t-text-f-primary-40 t-underline"
          to="tel:+918306823235"
        >
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

  return (
    <div>
      {/* hero section starts */}
      <section>
        <div className="container t-grid t-grid-cols-2 t-items-center">
          {/* text container */}
          <div>
            <h2 className="t-text-f-3xl t-mb-f-32">
              Don't Settle for Ordinary – Let Your{" "}
              <span className="t-text-f-primary-50">Brand</span> Shine with Our
              Digital <span className="t-text-f-secondary-50">Magic!</span>
            </h2>
            <p className="t-text-f-base t-mb-f-24">
              We're Here to Craft, Execute, and Amplify Your Marketing
              Strategies, Ensuring Your Brand's Resounding Success.
            </p>
            {/* buttons container */}
            <div className="t-flex t-gap-f-16">
              <Link
                className="f-btn-md f-btn-primary"
                to="/fab-digital-agency/services"
              >
                Get Started
              </Link>
              <button className="t-flex t-items-center t-gap-f-4 t-text-f-primary-40 t-text-f-md">
                <div className="t-bg-f-primary-98 t-flex t-items-center t-justify-center t-pl-f-16 t-pr-[10px] t-py-[12px] t-rounded-full t-shadow-lg">
                  <BsFillPlayFill className="shadow-lg" />
                </div>
                <span>Play Video</span>
              </button>
            </div>
          </div>
          {/* image container */}
          <div>
            <HeroImage />
          </div>
        </div>
      </section>
      {/* hero section ends */}

      {/* intro section starts */}
      <section className="t-min-h-screen t-py-f-96">
        {/* what we provide starts */}
        <div className="container t-mb-f-120">
          <div className="t-grid t-grid-cols-2 t-gap-f-96">
            {/* text container */}
            <div>
              <h3 className="t-text-f-2xl t-mb-f-24">
                What we <span className="t-text-f-secondary-50">provide?</span>
              </h3>
              <p className="t-text-f-base">
                We provide you with the right strategies, guidance, and
                resources to boost and position your brand successfully in
                today's competitive market.
              </p>
            </div>

            {/* cards container */}
            <div className="t-grid t-grid-cols-2 t-gap-f-24">
              <Link
                className="border t-shadow-md t-border-f-primary-60 t-bg-f-primary-98 t-text-f-l t-flex t-flex-col t-justify-between t-gap-f-16 t-p-f-16 t-rounded-f-8 hover:-t-translate-y-f-16 t-transition-all t-duration-300 hover:t-shadow-lg hover:t-bg-f-primary-98"
                to="/fab-digital-agency/services"
              >
                <BiSolidHeartCircle className="t-text-green-500 t-self-end t-text-5xl" />
                <h5>
                  <span className="t-text-green-500">Services </span>
                  we provide for you
                </h5>
                <BsArrowRight className="t-text-black t-self-end" />
              </Link>

              <Link
                className="border t-shadow-md t-border-f-primary-60 t-bg-f-primary-98 t-text-f-l t-flex t-flex-col t-justify-between t-gap-f-16 t-p-f-16 t-rounded-f-8 hover:-t-translate-y-f-16 t-transition-all t-duration-300 hover:t-shadow-lg hover:t-bg-f-primary-98"
                to="/nfc"
              >
                <LuNfc className="t-text-f-secondary-50 t-self-end t-text-4xl" />
                <h5>
                  Checkout our{" "}
                  <span className="t-text-f-secondary-50">NFC Cards</span>.
                </h5>
                <BsArrowRight className="t-text-black t-self-end" />
              </Link>
            </div>
          </div>
        </div>
        {/* what we provide ends */}

        {/* about our team starts */}
        <div className="container t-relative t-mb-[300px]">
          <div className="t-grid t-grid-cols-2 t-items-center t-gap-f-96">
            {/* image container */}
            <div className="-t-translate-x-[28%] t-translate-y-[20%] t-scale-150">
              <img
                src={aboutOurTeam}
                alt="people having a meeting in a laptop"
              />
            </div>

            {/* text container */}
            <div>
              <h3 className="t-text-f-2xl t-mb-f-24">
                About Our <span className="t-text-f-primary-50">Team</span>
              </h3>
              <p className="t-text-f-base t-mb-f-16">
                We provide you with the right strategies, guidance, and
                resources to boost and position your brand successfully in
                today's competitive market.
              </p>
            </div>
          </div>
        </div>
        {/* about our team ends */}

        {/* our services provide starts */}
        <div className="container t-mb-f-120">
          <div className="t-grid t-grid-cols-2 t-items-center t-gap-f-96">
            {/* text container */}
            <div>
              <h3 className="t-text-f-2xl t-mb-f-24">
                Our <span className="t-text-green-500">Services</span>
              </h3>
              <p className="t-text-f-base t-mb-f-16">
                We offer a wide range of digital marketing services tailored to
                your brand's needs and goals.
              </p>
              <Link
                className="f-btn-md f-btn-primary"
                to="/fab-digital-agency/services"
              >
                View all
              </Link>
            </div>

            {/* cards container */}
            <div className="t-grid t-grid-rows-3 t-gap-f-24">
              {/* social media management card */}
              <Link
                className="t-flex align-items-center t-justify-between t-text-f-md t-bg-f-secondary-90 t-font-semibold t-p-f-16 t-gap-f-16 t-rounded-f-8 hover:t-bg-f-secondary-80"
                to="/fab-digital-agency/services/social-media-marketing"
              >
                <IconSocialMediaManagement />
                <span>Social Media Management</span>
                <BsArrowRight className="t-text-f-l ms-auto" />
              </Link>

              {/* content creation card */}
              <Link
                className="t-flex align-items-center t-justify-between t-text-f-md t-bg-green-100 t-font-semibold t-p-f-16 t-gap-f-16 t-rounded-f-8 hover:t-bg-green-200"
                to="#content-creation"
              >
                <IconContentCreation />
                <span>Content Creation</span>
                <BsArrowRight className="t-text-f-l ms-auto" />
              </Link>

              {/* website development card */}
              <Link
                className="t-flex align-items-center t-justify-between t-text-f-md t-bg-f-primary-90 t-font-semibold t-p-f-16 t-gap-f-16 t-rounded-f-8 hover:t-bg-f-primary-80"
                to="/fab-digital-agency/services/websites"
              >
                <IconWebsiteDevelopment />
                <span>Social Media Management</span>
                <BsArrowRight className="t-text-f-l ms-auto" />
              </Link>
            </div>
          </div>
        </div>
        {/* our services provide ends */}
      </section>
      {/* intro section ends */}

      {/* best works starts */}
      <section className="t-min-h-screen t-py-f-96">
        <div className="container t-text-center">
          <h2 className="t-text-f-3xl t-mb-f-48">
            Some of our <span className="t-text-f-primary-50">best works</span>
          </h2>

          {/* list of websites */}
          <ul className="t-grid t-grid-cols-2 t-grid-rows-2 t-gap-y-f-48 t-mb-f-24">
            <li>
              <img
                src={skillMaxDashboard}
                alt="screenshot of Skill Max dashboard"
              />
            </li>
            <li>
              <img
                src={fabTapDashboard}
                alt="screenshot of Fab Tap dashboard"
              />
            </li>
            <li>
              <img
                src={skillMaxDashboard}
                alt="screenshot of Skill Max dashboard"
              />
            </li>
            <li>
              <img
                src={fabTapDashboard}
                alt="screenshot of Fab Tap dashboard"
              />
            </li>
          </ul>

          <Link
            className="f-btn-md f-btn-primary"
            to="/fab-digital-agency/portfolios/websites"
          >
            View all
          </Link>
        </div>
      </section>
      {/* best works ends */}

      {/* Feedback section starts */}
      <section className="t-min-h-screen t-py-f-96">
        <div className="container">
          <h2 className="t-text-f-3xl t-mb-f-48 t-text-center">
            Feedback from{" "}
            <span className="t-text-f-secondary-50">Customers</span>
          </h2>
          {/* cards container */}
          <div className="t-grid t-grid-cols-3 t-gap-f-24">
            {fabAgencyReviews.map(
              (
                { Icon, description, rating, author, company, profilePic },
                idx
              ) => (
                <article
                  key={idx}
                  className="t-flex t-flex-col t-gap-f-24 t-rounded-f-8 t-border-2 t-border-f-secondary-50 t-p-f-24 t-bg-f-secondary-98 t-shadow-lg t-shadow-f-secondary-95"
                >
                  <Icon className="t-w-f-48 t-h-f-48" />
                  <p className="t-text-f-base">{description}</p>
                  <Stars num={rating} />
                  <div className="t-flex t-items-center t-gap-f-24">
                    <img
                      src={profilePic}
                      alt={`Profile picture of ${author}`}
                      className="t-w-f-96 t-h-f-96 t-object-cover t-rounded-full"
                    />
                    <div>
                      <h4 className="t-text-f-md">{author}</h4>
                      <h5 className="t-text-f-sm">{company}</h5>
                    </div>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>
      {/* Feedback section ends */}

      {/* faq section starts */}
      <section className="t-min-h-screen t-py-f-96">
        <div className="container t-grid t-grid-cols-2 t-gap-f-24">
          <header className="t-flex t-flex-col t-gap-f-24 t-items-start">
            <h2 className="t-text-f-3xl">Frequently Asked Questions</h2>
            <h3 className="t-text-f-base">Still have some unsolved queries?</h3>
            <button className="f-btn-md f-btn-primary">Contact Us</button>
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
                    <div className="accordion-body">{answer}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* faqs ends */}
            <div className="t-flex t-justify-end">
              <Link
                to="#all-questions"
                className="t-text-f-primary-30 t-pt-f-24 t-flex t-items-center t-gap-f-8 t-border-b-2 t-border-f-primary-70"
              >
                See more Questions <BsArrowDown />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* faq section ends */}

      {/* chat with us starts */}
      <ChatbotSection steps={steps} />
      {/* chat with us ends */}
    </div>
  );
};

export default AgencyHome;