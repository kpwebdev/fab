import { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import fabLogo from "../../assets/fab-agency-logo-blue.png";
import {
  fabAgencyNavLinks,
  nfcSocialMediaLinks,
  fabAgencyFooterPageLinks,
  fabAgencyFooterCommunityLinks,
} from "../../data";
import { Formik, Field, Form } from "formik";
import { FaPaperPlane } from "react-icons/fa";
import { IoMdMail, IoLogoWhatsapp, IoIosCloseCircle } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";

const formInitialDefaultValues = {
  name: "",
  email: "",
  mobileNumber: "",
  question: "",
};

const AgencySharedLayout = () => {
  const [email, setEmail] = useState("");
  const [formInputs, setFormInputs] = useState(formInitialDefaultValues);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormInputs((prevFormInputs) => ({ ...prevFormInputs, [name]: value }));
  };
  return (
    <div>
      {/* navigation starts */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary t-h-[12vh]">
        <div className="container">
          <Link className="navbar-brand" to="/marketing">
            <img
              src={fabLogo}
              alt="Fab Digital Marketing Logo"
              className="t-w-f-120"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav t-grow">
              {/* rendering nav links */}
              {fabAgencyNavLinks.map(({ title, href }, idx) => (
                <NavLink key={idx} className="nav-link" to={href}>
                  {title}
                </NavLink>
              ))}
              <div className="t-ms-auto t-flex t-gap-f-8">
                <Link
                  className="f-btn-md f-btn-primary"
                  to="https://wa.me/971568781104"
                  target="_blank"
                >
                  Get In Touch
                </Link>
                {/* divider */}
                <div className="t-w-f-2 t-bg-f-primary-80"></div>
                {/* social media links */}
                <ul className="t-flex t-items-center t-gap-f-8 t-text-f-l t-text-f-primary-30">
                  <li>
                    <Link
                      to="https://www.instagram.com/fabdigitalagency/"
                      target="_blank"
                    >
                      <AiFillInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.linkedin.com/company/fab-digital-agency/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* navigation ends */}

      {/* children rendering region */}
      <Outlet />

      {/* footer starts */}
      <footer className="t-bg-f-primary-10 t-text-f-primary-70 t-pt-f-96 t-mt-f-48">
        <div className="container">
          {/* footer top */}
          <div className="t-flex t-gap-f-56">
            {/* logo and social media container */}
            <div>
              <div className="t-mb-f-32">
                <img src={fabLogo} alt="Fab logo" className="t-w-f-144" />
              </div>
              {/* social media links */}
              <div className="t-flex t-gap-f-8">
                {nfcSocialMediaLinks.map(({ title, href, Icon }, idx) => (
                  <Link key={idx} to={href}>
                    <Icon className="t-w-f-48" />
                  </Link>
                ))}
              </div>
            </div>

            {/* divider line */}
            <div className="t-w-f-2 t-bg-f-primary-20"></div>

            {/* links and subscription */}
            <div className="t-flex t-justify-between t-flex-grow">
              {/* page links section */}
              <div>
                <h4 className="t-text-f-md t-mb-f-16">Links</h4>
                {/* page links container */}
                <ul>
                  {fabAgencyFooterPageLinks.map(({ title, href }, idx) => (
                    <li key={idx}>
                      <Link to={href} className="t-text-f-sm t-mb-f-8">
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* community links section */}
              <div>
                <h4 className="t-text-f-md t-mb-f-16">Community</h4>
                {/* community links container */}
                <ul>
                  {fabAgencyFooterCommunityLinks.map(({ title, href }, idx) => (
                    <li key={idx}>
                      <Link to={href} className="t-text-f-sm t-mb-f-8">
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* email subscription */}
              <div>
                <h4 className="t-text-f-l t-mb-f-8">Subscribe Newsletter</h4>
                <h5 className="t-mb-f-40 t-text-f-sm">Subscribe for free. </h5>
                {/* email form */}
                <form>
                  <div className="mb-3 input-group">
                    <input
                      type="email"
                      className="form-control t-bg-f-primary-20 t-placeholder-f-primary-40"
                      placeholder="Email Id"
                      aria-label="Email Id"
                      aria-describedby="email"
                      value={email}
                      name="email"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      className="input-group-text t-fill-f-secondary-70"
                      id="email"
                    >
                      <FaPaperPlane className="t-fill-f-primary-30" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* footer bottom */}
          <div className="t-flex t-justify-between t-py-f-24 t-text-f-xs t-text-f-primary-30">
            {/* copyright */}
            <p>
              © Copyright {new Date().getFullYear()} Fab Digital Agency. All
              Rights Reserved Copyright
            </p>

            <ul className="t-flex t-gap-f-64">
              <li>
                <Link to="#termsAndConditions">Terms and conditions</Link>
              </li>

              <li>
                <Link to="#privacyPolicy">Privacy policy</Link>
              </li>

              <li>
                <Link to="#loginOrSignup">Login / Signup</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* footer ends */}

      {/* modal for the contact info */}
      <div
        className="modal fade"
        id="contactInfo"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="contactInfoLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div
            className="modal-content t-relative"
            style={{ backgroundColor: "#F6F9FE" }}
          >
            <button
              type="button"
              data-bs-dismiss="modal"
              className="t-absolute t-top-0 t-right-0 t-translate-x-1/2 -t-translate-y-1/2 t-text-f-l t-text-f-primary-20 t-opacity-30 hover:t-opacity-100 hover:t-scale-110 t-transition-all t-duration-300 t-p-f-8 t-z-20"
            >
              <IoIosCloseCircle />
            </button>
            <div className="modal-body">
              {/* container */}
              <div className="t-grid t-grid-cols-2">
                {/* left side */}
                <div className="t-p-f-16 t-border-r">
                  <form action="https://formspree.io/f/mvojjobb" method="POST">
                    <div className="t-mb-f-16">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={formInputs.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="t-mb-f-16">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                        value={formInputs.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="t-mb-f-16">
                      <label htmlFor="mobileNumber" className="form-label">
                        Mobile Number
                      </label>
                      <PhoneInput
                        inputProps={{
                          id: "mobileNumber",
                          name: "mobileNumber",
                        }}
                        inputClass="form-control"
                        inputStyle={{ width: "100%" }}
                        country={"ae"}
                        value={formInputs.mobileNumber}
                        onChange={(value, country, e, formattedValue) =>
                          handleChange(e)
                        }
                      />
                    </div>

                    <div className="t-mb-f-24">
                      <label htmlFor="question" className="form-label">
                        Question
                      </label>
                      <textarea
                        id="question"
                        name="question"
                        className="form-control"
                        value={formInputs.question}
                        onChange={handleChange}
                      />
                    </div>

                    <button type="submit" className="f-btn-md f-btn-primary">
                      Send
                    </button>
                  </form>
                </div>
                {/* right side */}
                <div className="t-p-f-16">
                  <h3 className="t-text-f-l t-mb-f-16">Contact Us</h3>
                  <ul>
                    <li>
                      <Link
                        to="mailto:customercare@fabdigitalagency.com"
                        className="t-flex t-gap-f-4 t-items-center t-text-f-base t-mb-f-8"
                        target="_blank"
                      >
                        <IoMdMail className="t-text-f-primary-30" />
                        <span>customercare@fabdigitalagency.com</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://wa.me/971568781104"
                        className="t-flex t-gap-f-4 t-items-center t-text-f-base"
                        target="_blank"
                      >
                        <IoLogoWhatsapp className="t-text-green-600" />
                        <span>+971568781104</span>
                      </Link>
                    </li>
                  </ul>
                  <h4 className="t-mt-f-16 t-mb-f-8 t-text-f-md">
                    Or leave us a message on our socials:
                  </h4>
                  <ul className="t-flex t-items-center t-gap-f-8 t-text-f-l t-text-f-primary-30">
                    <li>
                      <Link to="https://www.instagram.com" target="_blank">
                        <FaFacebook />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.facebook.com" target="_blank">
                        <AiFillInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.linkedin.com" target="_blank">
                        <FaLinkedin />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencySharedLayout;
