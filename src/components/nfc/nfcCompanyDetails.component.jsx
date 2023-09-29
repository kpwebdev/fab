import { nfcOrganizationDetails } from "../../data";

const NfcCompanyDetails = () => {
  return (
    <section className="t-py-f-96">
      <div className="container">
        <div className="t-flex t-flex-col md:t-flex-row md:t-bg-f-primary-99 t-p-f-48 t-rounded-f-8 t-justify-between -t-translate-y-f-144 t-shadow-lg t-shadow-f-primary-95">
          {nfcOrganizationDetails.map(({ img, title, num }, idx) => (
            // card
            <div
              className={`t-flex t-gap-f-8 t-px-f-48${
                idx === 1
                  ? " t-border-f-primary-60 t-border-dashed t-border-x-f-2"
                  : ""
              }`}
              key={idx}
            >
              <img src={img} alt={`icon for ${title}`} />
              {/* text container */}
              <div className="t-flex t-flex-col t-gap-f-8">
                <span className="t-text-f-l t-font-bold">{num}</span>
                <h5 className="t-text-f-md">{title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NfcCompanyDetails;
