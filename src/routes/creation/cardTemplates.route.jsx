import { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { templates } from "../../data";
import CardTemplate from "../../components/creation/cardTemplate.component";
function CardTemplates() {
  const [currentTemplate, setCurrentTemplate] = useState(
    templates[0].templateName
  );
  const handleChange = (e) => {
    setCurrentTemplate(e.target.value);
  };

  return (
    <section>
      {/* back navigator - my profile */}
      <Link
        to="/nfc/creation/physical-card"
        className="t-flex t-items-center t-gap-f-8 t-p-f-16"
      >
        <BsArrowLeft />
        Choose Style
      </Link>

      <div className="container t-flex t-flex-col t-gap-f-48">
        <header className="">
          {/* actions */}
          <div className="t-flex t-items-center t-justify-between">
            <h2 className="t-text-f-2xl">Choose from Templates</h2>
            {/* buttons container */}
            <div className="t-flex t-gap-f-16">
              <Link
                to="/nfc/creation/physical-card"
                className="f-btn-lg f-btn-primary"
              >
                Create from Scratch
              </Link>
            </div>
          </div>
        </header>

        {/* templates container */}
        <div className="t-flex t-justify-between">
          {templates.map(({ templateName, list }, idx) => (
            <CardTemplate
              name="currentTemplate"
              currentTemplate={currentTemplate}
              templateName={templateName}
              list={list}
              onChange={handleChange}
              key={idx}
            />
          ))}
        </div>

        {/* next step */}
        <div className="t-text-end">
          <Link
            className="f-btn-lg f-btn-primary"
            to="/nfc/creation/physical-card/customize-template"
          >
            Continue
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CardTemplates;
