import { useState } from "react";
import fabLogo from "../../assets/fab-agency-logo-blue.png";
import {
  nfcSocialMediaLinks,
  nfcFooterPageLinks,
  nfcFooterCommunityLinks,
} from "../../data";
import { Link } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";

const NfcFooter = () => {
  const [email, setEmail] = useState("");
  return (
    <footer className="t-bg-f-primary-10 t-py-f-16 t-text-f-primary-70">
      <div className="container">
        {/* footer top */}
        <div className="t-flex t-items-center t-gap-f-56">
          {/* logo and social media container */}
          <div>
            <div className="t-mb-f-32">
              <img src={fabLogo} alt="Fab logo" className="t-w-f-144" />
            </div>
          </div>

          {/* divider line */}
          <div className="t-w-f-2 t-bg-f-primary-20 t-self-stretch"></div>

          {/* links and subscription */}
          <div className="t-flex t-justify-between t-flex-grow">
            {/* page links section */}
            <div>
              <h4 className="t-text-f-md t-mb-f-16">Links</h4>
              {/* page links container */}
              <ul className="t-flex t-gap-f-8 t-mb-f-16">
                {nfcFooterPageLinks.map(({ title, href }, idx) => (
                  <li key={idx}>
                    <Link to={href} className="t-text-f-sm t-mb-f-8">
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* social media links */}
              <div className="t-flex t-gap-f-8">
                {nfcSocialMediaLinks.map(({ title, href, Icon }, idx) => (
                  <Link key={idx} to={href}>
                    <Icon className="t-w-f-48" />
                  </Link>
                ))}
              </div>
            </div>

            {/* community links section */}
            {/* <div> */}
            {/* <h4 className="t-text-f-md t-mb-f-16">Community</h4> */}
            {/* community links container */}
            {/* <ul>
                {nfcFooterCommunityLinks.map(({ title, href }, idx) => (
                  <li key={idx}>
                    <Link to={href} className="t-text-f-sm t-mb-f-8">
                      {title}
                    </Link>
                  </li>
                ))}
              </ul> */}
            {/* </div> */}

            {/* email subscription */}
            <div>
              <h4 className="t-text-f-l t-mb-f-8">Subscribe Newsletter</h4>
              <h5 className="t-mb-f-16 t-text-f-sm">Subscribe for free. </h5>
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
        <div className="t-flex t-justify-between t-mt-f-24 t-text-f-xs t-text-f-primary-30">
          {/* copyright */}
          <p>
            © Copyright {new Date().getFullYear()} Fab Digital Agency. All
            Rights Reserved Copyright
          </p>

          <ul className="t-flex t-gap-f-64">
            <li>
              <Link
                className="hover:t-text-f-primary-70 t-duration-150 t-transition-all"
                to="#termsAndConditions"
              >
                Terms and conditions
              </Link>
            </li>

            <li>
              <Link
                className="hover:t-text-f-primary-70 t-duration-150 t-transition-all"
                to="#privacyPolicy"
              >
                Privacy policy
              </Link>
            </li>

            <li>
              <Link
                className="hover:t-text-f-primary-70 t-duration-150 t-transition-all"
                to="/nfc/authentication/login"
              >
                Login / Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default NfcFooter;
