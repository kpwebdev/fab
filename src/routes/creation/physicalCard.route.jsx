import { Link } from "react-router-dom";

const PhysicalCard = () => {
  return (
    <section>
      <header>
        <Link to="/nfc/dashboard/my-profile">My Profile</Link>
        {/* actions */}
        <div>
          <h2>Choose Your Style</h2>
          {/* buttons container */}
          <div>
            <Link
              to="/nfc/creation/digital-profile"
              className="f-btn-lg f-btn-primary-outline"
            >
              Create Digitally
            </Link>
            <Link
              to="/nfc/creation/physical-card/templates"
              className="f-btn-lg f-btn-primary"
            >
              Browse Templates
            </Link>
          </div>
        </div>
      </header>
    </section>
  );
};

export default PhysicalCard;
