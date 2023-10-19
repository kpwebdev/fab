import { BiSolidPencil } from "react-icons/bi";
import { AiOutlineInfoCircle, AiFillPlusCircle } from "react-icons/ai";
import { userData } from "../../data";
import { Link } from "react-router-dom";

const General = () => {
  const {
    bannerImage,
    profilePic,
    userName,
    fullName,
    companyName,
    role,
    website,
    contact,
    socialMedia,
    status,
  } = userData;
  return (
    <div>
      {/* banner */}
      <div className="t-h-f-144 t-bg-f-primary-30 t-relative t-rounded-f-8 t-overflow-hidden">
        <img
          src={bannerImage}
          alt="Banner Image"
          className="t-w-full t-h-full t-object-cover"
        />
        <button
          type="button"
          className="t-absolute t-top-f-8 t-right-f-8 t-text-white t-text-3xl t-bg-f-primary-10 t-p-f-8 t-rounded-full"
        >
          <BiSolidPencil />
        </button>
      </div>

      <div className="t-grid t-grid-cols-2 t-gap-f-48">
        {/* left side */}
        <div>
          {/* profile picture and name, company */}
          <div className="t-flex t-items-end t-gap-f-8 t-ml-f-24 -t-mt-f-48 t-mb-f-24 t-z-10 t-relative">
            <img
              src={profilePic}
              alt="Profile Picture"
              className="t-w-f-144 t-h-f-144 t-object-cover t-rounded-f-8 t-border-2 t-border-f-primary-70"
            />
            <header>
              <h6 className="t-text-f-xl">{fullName}</h6>
              <p className="t-text-f-md">{companyName}</p>
            </header>
          </div>

          {/* user details form */}
          <form className="t-text-f-base">
            {/* userName container */}
            <div className="mb-3 row">
              <label htmlFor="userName" className="col-sm-2 col-form-label">
                User Name
              </label>
              <div className="col-sm-10">
                <div className="input-group">
                  <span className="input-group-text">fabtab.com/</span>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    value={userName}
                  />
                </div>
              </div>
            </div>

            {/* fullName container */}
            <div className="mb-3 row">
              <label htmlFor="fullName" className="col-sm-2 col-form-label">
                Full Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  value={fullName}
                />
              </div>
            </div>

            {/* companyName container */}
            <div className="mb-3 row">
              <label htmlFor="companyName" className="col-sm-2 col-form-label">
                Company Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="companyName"
                  value={companyName}
                />
              </div>
            </div>

            {/* role container */}
            <div className="mb-3 row">
              <label htmlFor="role" className="col-sm-2 col-form-label">
                Role
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="role"
                  value={role}
                />
              </div>
            </div>

            {/* website container */}
            <div className="mb-3 row">
              <label htmlFor="website" className="col-sm-2 col-form-label">
                Website
              </label>
              <div className="col-sm-10">
                <div className="t-flex t-items-center t-gap-f-16">
                  <div className="input-group">
                    <span className="input-group-text">http://</span>
                    <input
                      type="text"
                      className="form-control"
                      id="website"
                      value={website}
                    />
                  </div>

                  {/* addd button */}
                  <button className="t-text-f-xl t-text-f-primary-30">
                    <AiFillPlusCircle />
                  </button>
                </div>
              </div>
            </div>

            {/* contact container */}
            <div className="mb-3 row">
              <label htmlFor="contact" className="col-sm-2 col-form-label">
                Contact
              </label>
              <div className="col-sm-10">
                <div className="t-flex t-gap-f-16">
                  <div className="input-group t-mb-f-16">
                    <span className="input-group-text">+91</span>
                    <input
                      type="text"
                      className="form-control"
                      id="contact"
                      value={contact}
                    />
                  </div>

                  {/* addd button */}
                  <button className="t-text-f-xl t-text-f-primary-30">
                    <AiFillPlusCircle />
                  </button>
                </div>

                {/* isWhatsappNum */}
                <div className="form-check t-flex t-gap-f-16 t-items-center">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="isWhatsappNum"
                  />
                  <label
                    className="form-check-label t-text-f-base t-flex"
                    htmlFor="isWhatsappNum"
                  >
                    Same as WhatsApp{" "}
                    <button type="button">
                      <AiOutlineInfoCircle />
                    </button>
                  </label>
                </div>
              </div>
            </div>

            {/* role container */}
            <div className="mb-3 row">
              <label htmlFor="socialMedia" className="col-sm-2 col-form-label">
                Social
              </label>
              <div className="col-sm-10 t-flex t-justify-start">
                <ul className="t-flex t-gap-f-8 t-justify-start t-relative">
                  {socialMedia.map(({ title, href, Icon }, idx) => (
                    <li key={idx}>
                      <Link target="_blank" to={href} title={title}>
                        <Icon />
                      </Link>
                    </li>
                  ))}

                  <button
                    type="button"
                    className="t-underline t-absolute -t-top-f-8 -t-right-f-8 t-translate-x-full t-text-sm"
                  >
                    Edit
                  </button>
                </ul>
              </div>
            </div>

            {/* buttons container */}
            <div className="t-flex t-justify-center t-gap-f-24">
              <button className="f-btn-md f-btn-primary-outline t-px-f-56">
                Edit
              </button>
              <button className="f-btn-md f-btn-primary t-px-f-56">Save</button>
            </div>
          </form>
        </div>

        {/* right side */}
        <div className="t-flex t-flex-col t-justify-between t-py-f-48">
          {/* status container */}
          <div className=" t-flex t-flex-col t-gap-f-24 t-border-f-secondary-95 t-shadow-xl t-border-2 t-p-f-16 t-rounded-f-8">
            <h6 className="t-text-f-xl">Status</h6>
            {/* status card container */}
            <div className="t-flex t-gap-f-24">
              {status.map(({ title, num }, idx) => (
                <div
                  key={idx}
                  className="t-flex t-flex-col t-gap-f-8 t-p-f-24 t-bg-f-secondary-70 t-rounded-f-8"
                >
                  <span className="t-text-f-2xl">{num}</span>
                  <span className="">{title}</span>
                </div>
              ))}
            </div>
            <button className="f-btn-md f-btn-secondary">View Progress</button>
          </div>

          {/* buttons container */}
          <div className="t-flex t-flex-col t-gap-f-24 t-px-f-96 t-text-center">
            <Link
              className="f-btn-md f-btn-primary-outline"
              to="/nfc/creation/digital-profile"
            >
              Digital Profile
            </Link>

            <Link
              className="f-btn-md f-btn-primary"
              to="/nfc/creation/physical-card"
            >
              Create your own fabtap
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
