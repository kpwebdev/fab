import { useParams, Link } from "react-router-dom";
import { fabAgencyServices } from "../../data";

const Service = () => {
  const { id } = useParams();
  const currentService = fabAgencyServices.find((service) => service.id === id);
  const { title, pageImage, content } = currentService;

  return (
    <section>
      <div className="container t-my-f-24">
        <img
          src={pageImage}
          alt={`image for ${title} page`}
          className="t-w-full t-h-f-96 t-object-cover t-object-top t-rounded-f-8 t-block md:t-hidden"
        />
        <div className="t-grid md:t-grid-cols-[1fr_2fr] t-gap-f-48 t-items-center t-min-h-full t-py-f-48">
          {/* image container */}
          <div className="shadow-sm t-p-f-8 t-rounded-f-8 t-bg-f-primary-98 t-border t-border-f-primary-95 md:t-block t-hidden">
            <img
              src={pageImage}
              alt={`image for ${title} page`}
              className="t-w-full"
            />
          </div>

          {/* text container */}
          <div>
            <h2 className="t-text-f-l md:t-text-f-xl lg:t-text-f-2xl t-mb-f-24">
              {title}
            </h2>
            <div className="t-text-f-base t-flex t-flex-col t-gap-f-16 t-mb-f-16">
              {content.map(({ description }, idx) => (
                <p key={idx}>{description}</p>
              ))}
            </div>

            {/* buttons container */}
            <div className="t-flex t-gap-f-16">
              <Link
                className="f-btn-sm md:f-btn-md f-btn-primary"
                to="#contact-us"
              >
                Contact us
              </Link>
              <Link
                className="f-btn-sm md:f-btn-md f-btn-primary-outline"
                to="#view-projects"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
