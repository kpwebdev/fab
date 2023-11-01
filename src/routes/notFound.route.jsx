import NotFoundSVG from "../assets/notFoundSVG.svg?react";

const NotFound = () => {
  return (
    <div className="container t-min-h-screen t-flex t-flex-col t-items-centers t-justify-center">
      <h2 className="t-text-3xl t-text-center">
        Sorry, we Couldn't find the what you were looking for!
      </h2>
      <NotFoundSVG className="t-mx-auto t-my-f-48" />
    </div>
  );
};

export default NotFound;
