import { Outlet, Link } from "react-router-dom";
import Lottie from "lottie-react";
import fabLogo from "../../assets/fab-agency-logo-blue.png";
import circleAnimation from "../../assets/lotties/circle-anime3.json";

const AuthenticationSharedLayout = () => {
  return (
    <section className="t-relative t-py-f-48 t-min-h-screen">
      <div className="container">
        {/* left side */}
        <div className="t-flex t-flex-col t-items-center xl:t-items-start t-gap-f-24">
          {/* image container */}
          <div>
            <Link to="/nfc/">
              <img
                src={fabLogo}
                alt="Fab Digital Marketing Agency Logo"
                className="t-w-f-56 md:t-w-f-96 lg:t-w-f-120"
              />
            </Link>
          </div>
          {/* login or sign up */}
          <Outlet />
        </div>
      </div>

      {/* right side */}
      <Lottie
        animationData={circleAnimation}
        className="t-absolute t-top-0 t-right-0 -t-z-10 t-h-full t-hidden xl:t-block"
      />
    </section>
  );
};

export default AuthenticationSharedLayout;
