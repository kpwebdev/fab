import { nfcFaqs } from "../data";

const Faqs = () => {
  return (
    <div className="accordion accordion-flush" id="fabFaqs">
      {nfcFaqs.map(({ question, answer }, idx) => (
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
  );
};

export default Faqs;
