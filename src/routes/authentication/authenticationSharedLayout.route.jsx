import { Outlet, Link } from "react-router-dom";
import Lottie from "lottie-react";
import fabLogo from "../../assets/fab-log-blue-trasparent.png";
import circleAnimation from "../../assets/lotties/circle-animation.json";

const AuthenticationSharedLayout = () => {
  return (
    <section className="t-relative t-py-f-48 t-min-h-screen">
      <div className="container t-flex">
        {/* left side */}
        <div className="t-flex t-flex-col t-gap-f-24">
          {/* image container */}
          <div>
            <Link to="/nfc/">
              <img
                src={fabLogo}
                alt="Fab Digital Marketing Agency Logo"
                className="t-w-f-120"
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
        className="t-absolute t-top-0 t-right-0 -t-z-10 t-h-full"
      />
    </section>
  );
};

export default AuthenticationSharedLayout;
