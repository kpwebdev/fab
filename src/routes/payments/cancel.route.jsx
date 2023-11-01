import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <section className="t-min-h-screen t-bg-red-100 t-flex t-flex-col t-gap-f-16 t-items-center t-justify-center">
      <h2 className="t-text-f-3xl t-text-red-500">
        It seems you cancelled the payment process!
      </h2>
      <Link className="f-btn-lg f-btn-primary" to="/nfc/dashboard">
        Back to Dashboard
      </Link>
    </section>
  );
};

export default Cancel;
