import { nfcReviews } from "../../data";
import Stars from "../stars.component";

const NfcTestimonials = () => {
  return (
    <section className="t-min-h-screen t-py-f-96">
      <div className="container">
        <h3 className="t-text-f-md">Testimonial</h3>
        <h2 className="t-text-f-3xl t-mb-f-48">Feedback from Customers.</h2>
        {/* cards container */}
        <div className="t-grid t-grid-cols-3 t-gap-f-24">
          {nfcReviews.map(
            (
              { Icon, description, rating, author, company, profilePic },
              idx
            ) => (
              <article
                key={idx}
                className="t-flex t-flex-col t-gap-f-24 t-rounded-f-8 t-border-2 t-border-f-secondary-50 t-p-f-24 t-bg-f-secondary-98 t-shadow-lg t-shadow-f-secondary-95"
              >
                <Icon className="t-w-f-48 t-h-f-48" />
                <p className="t-text-f-base">{description}</p>
                <Stars num={rating} />
                <div className="t-flex t-items-center t-gap-f-24">
                  <img
                    src={profilePic}
                    alt={`Profile picture of ${author}`}
                    className="t-w-f-96 t-h-f-96 t-object-cover t-rounded-full"
                  />
                  <div>
                    <h4 className="t-text-f-md">{author}</h4>
                    <h5 className="t-text-f-sm">{company}</h5>
                  </div>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default NfcTestimonials;
