import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { templates } from "../../data";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../utils/firebase/firebase.util";
import DigitalProfileTemplate1 from "../../components/creation/digitalProfileTemplate1.component";
import DigitalProfileTemplate2 from "../../components/creation/digitalProfileTemplate2.component";
import DigitalProfileTemplate3 from "../../components/creation/digitalProfileTemplate3.component";
import iphone15Frame from "../../assets/iphone-15-frame.png";
import { ProfileContext } from "../../contexts/ProfileProvider.context";
import { createAction } from "../../contexts/helper-functions";
import { PROFILE_ACTION_TYPES } from "../../contexts/ProfileProvider.context";

function ProfileTemplates() {
  const { profileTemplate, profileTemplates, dispatch } = useContext(
    ProfileContext
  );
  const { name, id } = profileTemplate;

  const handleChange = (e) => {
    const templateName = e.target.value;
    const action = createAction(
      PROFILE_ACTION_TYPES.UPDATE_PROFILE_TEMPLATE,
      templateName
    );
    dispatch(action);
  };

  const { data, isError, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  if (isPending) {
    return (
      <div className="t-flex t-justify-center t-my-f-24">
        <span className="custom-loader"></span>
      </div>
    );
  }

  return (
    <section>
      {/* back navigator - my profile */}
      <Link
        to="/nfc/dashboard"
        className="t-flex t-items-center t-gap-f-8 t-p-f-16"
      >
        <BsArrowLeft />
        Dashboard
      </Link>

      <div className="container t-flex t-flex-col t-gap-f-48">
        <header className="">
          {/* actions */}
          <div className="t-flex t-items-center t-justify-between">
            <h2 className="t-text-f-2xl">Choose from Templates</h2>
          </div>
        </header>

        {/* templates container */}
        <div className="t-grid t-grid-cols-3 t-gap-f-48">
          <div className="t-flex t-flex-col">
            <header className="t-flex t-justify-between t-text-2xl">
              <label htmlFor="template-1" className="form-check-label">
                Template 1
              </label>
              <input
                type="radio"
                name="template"
                id="template-1"
                value="template-1"
                checked={name === "template-1"}
                className="form-check-input"
                onChange={handleChange}
              />
            </header>
            {/* template */}
            <label htmlFor="template-1" className="t-grow t-scale-75">
              <DigitalProfileTemplate1
                data={data}
                colors={profileTemplates[0].colors}
              />
            </label>
          </div>
          <div className="t-flex t-flex-col">
            <header className="t-flex t-justify-between t-text-2xl">
              <label htmlFor="template-2" className="form-check-label">
                Template 2
              </label>
              <input
                type="radio"
                name="template"
                id="template-2"
                value="template-2"
                checked={name === "template-2"}
                className="form-check-input"
                onChange={handleChange}
              />
            </header>
            {/* template */}
            <label htmlFor="template-2" className="t-grow t-scale-75">
              <DigitalProfileTemplate2
                data={data}
                colors={profileTemplates[1].colors}
              />
            </label>
          </div>
          <div className="t-flex t-flex-col">
            <header className="t-flex t-justify-between t-text-2xl">
              <label htmlFor="template-3" className="form-check-label">
                Template 3
              </label>
              <input
                type="radio"
                name="template"
                id="template-3"
                value="template-3"
                checked={name === "template-3"}
                className="form-check-input"
                onChange={handleChange}
              />
            </header>
            {/* template */}
            <label htmlFor="template-3" className="t-grow t-scale-75">
              <DigitalProfileTemplate3
                data={data}
                colors={profileTemplates[2].colors}
              />
            </label>
          </div>
        </div>

        {/* next step */}
        <div className="t-text-end">
          <Link
            className="f-btn-lg f-btn-primary t-mb-f-16"
            to="/nfc/creation/digital-profile"
          >
            Continue
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProfileTemplates;
