import { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import fabLogo from "../../assets/fab-log-blue-trasparent.png";
import {
  fabAgencyNavLinks,
  nfcSocialMediaLinks,
  fabAgencyFooterPageLinks,
  fabAgencyFooterCommunityLinks,
} from "../../data";
import { FaPaperPlane } from "react-icons/fa";

const AgencySharedLayout = () => {
  const [email, setEmail] = useState("");
  return (
    <div>
      {/* navigation starts */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary t-h-[12vh]">
        <div className="container">
          <Link className="navbar-brand" to="/fab-digital-agency">
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
            </div>
          </div>
        </div>
      </nav>
      {/* navigation ends */}

      {/* children rendering region */}
      <Outlet />

      {/* footer starts */}
      <footer className="t-bg-f-primary-10 t-text-f-primary-70 t-pt-f-96">
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
    </div>
  );
};

export default AgencySharedLayout;
