import { Link } from "react-router-dom";

const CheckoutCard = ({
  href,
  img,
  title,
  subtitle,
  text,
  subHeadingColor,
}) => {
  return (
    <Link
      to={href}
      className="text-black text-decoration-none d-block checkout-card rounded-4 hover:-t-translate-y-f-8 hover:t-shadow-xl t-transition-all t-duration-150"
    >
      <article className="t-p-f-16 lg:t-p-f-16 lg:t-py-f-48 t-flex t-flex-col justify-content-between">
        {/* header */}
        <div className="lg:t-mb-5 t-flex t-justify-center lg:t-justify-between">
          <img src={img} alt={title} className="checkout-card-image t-w-f-96" />
          <svg
            width="43"
            height="28"
            viewBox="0 0 43 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="t-hidden lg:t-block"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M-5.34058e-05 13.8225C-5.34058e-05 14.2298 0.161732 14.6204 0.449718 14.9083C0.737701 15.1963 1.12829 15.3581 1.53556 15.3581L37.7547 15.3581L28.0895 25.0202C27.8011 25.3086 27.6391 25.6997 27.6391 26.1074C27.6391 26.5152 27.8011 26.9063 28.0895 27.1947C28.3778 27.483 28.7689 27.645 29.1767 27.645C29.5845 27.645 29.9756 27.483 30.2639 27.1947L42.5489 14.9097C42.6919 14.7671 42.8053 14.5976 42.8827 14.4111C42.9602 14.2245 43 14.0245 43 13.8225C43 13.6205 42.9602 13.4205 42.8827 13.234C42.8053 13.0474 42.6919 12.8779 42.5489 12.7353L30.2639 0.45034C30.1211 0.307564 29.9516 0.194309 29.7651 0.11704C29.5785 0.0397702 29.3786 0 29.1767 0C28.7689 0 28.3778 0.161992 28.0895 0.45034C27.8011 0.738688 27.6391 1.12977 27.6391 1.53756C27.6391 1.94534 27.8011 2.33643 28.0895 2.62478L37.7547 12.2869L1.53556 12.2869C1.12829 12.2869 0.737701 12.4487 0.449718 12.7367C0.161732 13.0246 -5.34058e-05 13.4152 -5.34058e-05 13.8225Z"
              fill="#111827"
            />
          </svg>
        </div>

        {/* body */}
        <div className="t-text-center lg:t-text-start">
          <h4 className="t-text-f-l">{title}</h4>
          <h5
            className={`t-text-f-l t-font-bold ${subHeadingColor}`}
            style={{ textShadow: "0px 2px 2px rgba(0,0,0, 0.25)" }}
          >
            {subtitle}
          </h5>
          {false && <p>{text}</p>}
        </div>
      </article>
    </Link>
  );
};

export default CheckoutCard;
