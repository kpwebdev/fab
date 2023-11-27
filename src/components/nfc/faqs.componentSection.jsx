import Faqs from "../faqs.component";
import { Link } from "react-router-dom";
import { BsArrowDown } from "react-icons/bs";
import { Formik, Field, Form } from "formik";
import PhoneInput from "react-phone-input-2";
import IconFacebook from "../../assets/icon-facebook.svg?react";
import IconInstagram from "../../assets/icon-instagram.svg?react";
import IconLinkedin from "../../assets/icon-linkedin.svg?react";
import { IoMdMail, IoLogoWhatsapp, IoIosCloseCircle } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";

const formInitialDefaultValues = {
  name: "",
  email: "",
  mobileNumber: "",
  question: "",
};

const FaqsSection = () => {
  const [formInputs, setFormInputs] = useState(formInitialDefaultValues);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormInputs((prevFormInputs) => ({ ...prevFormInputs, [name]: value }));
  };
  return (
    <section className="t-pb-f-96">
      <div className="container t-grid t-grid-cols-2 t-gap-f-24">
        <header className="t-flex t-flex-col t-gap-f-24 t-items-start">
          <h2 className="t-text-f-3xl">Still have more questions in mind?</h2>
          <h3 className="t-text-f-base">Ask Away.</h3>
          <button
            type="button"
            className="f-btn-md f-btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#contactInfo"
          >
            Get in Touch
          </button>
        </header>

        {/* faqs container */}
        <div>
          <Faqs />
          {/* <div className="t-flex t-justify-end">
            <Link
              to="#all-questions"
              className="t-text-f-primary-30 t-pt-f-24 t-flex t-items-center t-gap-f-8 t-border-b-2 t-border-f-primary-70"
            >
              See more Questions <BsArrowDown />
            </Link>
          </div> */}
        </div>

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
                    <form
                      action="https://formspree.io/f/mvojjobb"
                      method="POST"
                    >
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
    </section>
  );
};

export default FaqsSection;
