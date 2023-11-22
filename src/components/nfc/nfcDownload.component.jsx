import fabLogo from "../../assets/fab-agency-logo-blue.png";
import playstoreScreenshot from "../../assets/playstore-screenshot.png";
import { nfcAppStats } from "../../data";

const NfcDownload = () => {
  return (
    <section>
      <div className="container">
        <header className="t-flex t-gap-f-24 t-items-center">
          {/* image container */}
          <div className="t-border-2 t-rounded-f-8 t-p-f-16">
            <img src={fabLogo} alt="fab logo" className="t-w-f-120" />
          </div>
          <h2 className="t-text-f-3xl">
            Download the <span className="t-text-f-primary-30">fab app</span>
          </h2>
        </header>
        {/* downlaod contnet container */}
        <div className="t-flex t-justify-between t-items-center t-gap-f-48">
          {/* app details container */}
          <div>
            {/* cards container */}
            <div className="t-grid t-grid-cols-2 t-gap-f-48 t-mb-f-48">
              {nfcAppStats.map(({ title, num, icon }, idx) => (
                <article key={idx}>
                  <header className="t-bg-f-secondary-50 t-p-f-8 t-rounded-t-f-8 t-text-end t-text-f-md">
                    {title}
                  </header>
                  {/* card body */}
                  <div className="t-flex t-justify-center t-gap-f-16 t-p-f-32 t-bg-f-secondary-95">
                    <img src={icon} alt={`icon for ${title}`} />
                    <span className="t-text-f-2xl">{num}+</span>
                  </div>
                </article>
              ))}
            </div>
            <button className="f-btn-lg f-btn-primary">Download Now</button>
          </div>
          {/* image container */}
          <div>
            <img src={playstoreScreenshot} alt="Playstore screenshot" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NfcDownload;
