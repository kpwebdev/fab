import Faqs from "../faqs.component";
import { Link } from "react-router-dom";
import { BsArrowDown } from "react-icons/bs";

const FaqsSection = () => {
  return (
    <section className="t-min-h-screen t-py-f-96">
      <div className="container t-grid t-grid-cols-2 t-gap-f-24">
        <header className="t-flex t-flex-col t-gap-f-24 t-items-start">
          <h2 className="t-text-f-3xl">Frequently Asked Questions</h2>
          <h3 className="t-text-f-base">Still have some unsolved queries?</h3>
          <button className="f-btn-md f-btn-primary">Contact Us</button>
        </header>

        {/* faqs container */}
        <div>
          <Faqs />
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
  );
};

export default FaqsSection;
