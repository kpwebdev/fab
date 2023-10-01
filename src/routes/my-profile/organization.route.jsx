import { BiSolidPencil, BiCopy } from "react-icons/bi";
import { AiFillPlusCircle } from "react-icons/ai";
import { userData, jobRoles, companySizes } from "../../data";
import lookingResumes from "../../assets/looking-through-resumes.png";
import teamProject from "../../assets/сolleagues-discussing-team-project.png";

const Organization = () => {
  const {
    companyBanner,
    companyLogo,
    companyHeading,
    companySubheading,
    companyName,
    jobRole,
    companySize,
  } = userData.companyDetails;
  return (
    <div>
      {/* banner */}
      <div className="t-h-f-144 t-bg-f-primary-30 t-relative t-rounded-f-8 t-overflow-hidden">
        <img
          src={companyBanner}
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

      <div>
        {/* profile picture and name, company */}
        <div className="t-flex t-items-end t-gap-f-8 t-ml-f-24 -t-mt-f-48 t-mb-f-24 t-z-10 t-relative">
          <img
            src={companyLogo}
            alt="Profile Picture"
            className="t-w-f-144 t-h-f-144 t-object-contain t-rounded-f-8 t-bg-f-primary-99 t-p-f-8 t-shadow-md"
          />
          <header>
            <h6 className="t-text-f-xl">{companyHeading}</h6>
            <p className="t-text-f-md">{companySubheading}</p>
          </header>
        </div>
      </div>

      {/* organization details */}
      <div className="t-grid t-grid-cols-2 t-mb-f-96">
        {/* left side */}
        <div className="t-text-f-md">
          <h4 className="t-text-f-2xl t-my-f-32">Organization details</h4>
          <form className="t-flex t-flex-col t-gap-f-24">
            <div>
              <label htmlFor="companyName" className="t-mb-f-8">
                Company Name or Team Name
              </label>
              <input
                type="text"
                className="form-control form-select-lg"
                id="companyName"
                value="Chetna Arora"
              />
            </div>

            {/* job roles */}
            <div>
              <label htmlFor="jobRole" className="t-mb-f-8">
                Job Role
              </label>
              <select
                name="jobRole"
                id="jobRole"
                className="form-select form-select-lg"
              >
                {jobRoles.map(({ value, display }, idx) => (
                  <option value={value}>{display}</option>
                ))}
              </select>
            </div>

            {/* company sizes */}
            <div>
              <label htmlFor="jobRole" className="t-mb-f-8">
                Job Role
              </label>
              <select
                name="jobRole"
                id="jobRole"
                className="form-select form-select-lg"
              >
                {companySizes.map(({ value, display }, idx) => (
                  <option value={value}>{display}</option>
                ))}
              </select>
            </div>

            <button className="f-btn-md f-btn-primary t-self-end t-px-f-32">
              Save
            </button>
          </form>
        </div>

        {/* right side - image */}
        <div>
          <img src={lookingResumes} alt="Looking through resumes" />
        </div>
      </div>

      {/* team section */}
      <div className="t-grid t-grid-cols-2">
        {/* left side - image */}
        <div>
          <img src={teamProject} alt="сolleagues-discussing-team-project" />
        </div>

        {/* right side */}
        <div className="t-text-f-md">
          <h4 className="t-text-f-2xl t-my-f-32">Let’s invite your team</h4>
          <form className="t-flex t-flex-col t-gap-f-24">
            <div>
              <label htmlFor="companyName" className="t-mb-f-8">
                Invite by Link
              </label>
              <div className="t-flex t-gap-f-16">
                <input
                  type="text"
                  className="form-control form-select-lg"
                  id="companyName"
                  value="http://fabtap.com/CompanyName/TeamInvi..."
                />
                <button type="button">
                  <BiCopy className="t-text-f-primary-30" />
                </button>
              </div>
            </div>

            {/* job roles */}
            <div>
              <label htmlFor="jobRole" className="t-mb-f-8">
                Invite by Link
              </label>

              <div className="t-flex t-gap-f-16">
                <input type="url" className="form-control" />
                <button type="button">
                  <AiFillPlusCircle className="t-text-f-primary-30" />
                </button>
              </div>
            </div>

            <button className="f-btn-md f-btn-primary t-self-end t-px-f-32">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Organization;
