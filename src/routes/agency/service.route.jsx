import { useParams, Link } from "react-router-dom";
import { fabAgencyServices } from "../../data";

const Service = () => {
  const { id } = useParams();
  const currentService = fabAgencyServices.find((service) => service.id === id);
  const { title, pageImage, content } = currentService;

  return (
    <section>
      <div className="container t-min-h-[88vh]">
        <div className="t-grid t-grid-cols-[1fr_2fr] t-gap-f-48 t-items-center t-min-h-full t-py-f-48">
          {/* image container */}
          <div className="shadow-sm t-p-f-8 t-rounded-f-8 t-bg-f-primary-98 t-border t-border-f-primary-95">
            <img
              src={pageImage}
              alt={`image for ${title} page`}
              className="t-w-full"
            />
          </div>

          {/* text container */}
          <div>
            <h2 className="t-text-f-3xl t-mb-f-24">{title}</h2>
            <div className="t-text-f-base t-flex t-flex-col t-gap-f-16 t-mb-f-16">
              {content.map(({ description }, idx) => (
                <p key={idx}>{description}</p>
              ))}
            </div>

            {/* buttons container */}
            <div className="t-flex t-gap-f-16">
              <Link className="f-btn-md f-btn-primary" to="#contact-us">
                Contact us
              </Link>
              <Link
                className="f-btn-md f-btn-primary-outline"
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
