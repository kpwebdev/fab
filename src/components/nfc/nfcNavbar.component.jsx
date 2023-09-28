import { NavLink, Link } from "react-router-dom";
import fabLogo from "../../assets/fab-log-blue-trasparent.png";
import { ImUser } from "react-icons/im";
import { BiSolidCart } from "react-icons/bi";
import { nfcHomePageLinks } from "../../data";

const NfcNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/nfc">
          <img
            src={fabLogo}
            alt="Fab Digital Marketing Logo"
            className="t-w-[120px]"
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
            {nfcHomePageLinks.map(({ title, href }, idx) => (
              <NavLink key={idx} className="nav-link" to={href}>
                {title}
              </NavLink>
            ))}
            <NavLink
              className="nav-link t-flex t-items-center t-gap-[4px] t-ms-auto"
              to="/nfc/login"
            >
              <ImUser className="t-w-[24px]" /> Login
            </NavLink>
            <NavLink
              className="nav-link t-flex t-items-center t-gap-[4px]"
              to="/nfc/cart"
            >
              <BiSolidCart className="t-w-[24px]" /> Cart
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NfcNavbar;
