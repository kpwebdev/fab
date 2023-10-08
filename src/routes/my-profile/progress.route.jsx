import progressCircle from "../../assets/progress-circle.svg";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { progress } from "../../data";

const Progress = () => {
  const { shopStatus, fabTaps, myTeams, customCreatedNFCs } = progress;
  return (
    <div>
      {/* top section */}
      <div className="t-grid t-grid-cols-2 t-justify-between t-gap-8">
        {/* left container */}
        <div>
          {/* Shop Status section */}
          <section className="t-mb-f-24">
            <h4 className="t-text-f-l t-mb-f-16">{shopStatus.title}</h4>
            {/* cards container */}
            <div className="t-grid t-grid-cols-2 t-gap-f-16">
              {shopStatus.list.map(
                ({ title, num, today, TodayDirIcon, icon }, idx) => (
                  // single card
                  <article
                    key={idx}
                    className="t-flex t-gap-f-8 t-p-f-8 t-bg-f-primary-80 t-rounded-md"
                  >
                    {/* image container */}
                    <div>
                      <img src={icon} alt={`Icon for ${title}`} />
                    </div>
                    {/* text container */}
                    <div>
                      <h6 className="t-text-f-md">{title}</h6>
                      <span className="t-text-f-l">{num}</span>
                      {today && (
                        <div className="t-text-f-base t-flex t-items-center t-gap-f-8">
                          {today} <TodayDirIcon />
                        </div>
                      )}
                    </div>
                  </article>
                )
              )}
            </div>
          </section>

          {/* Fab Taps section */}
          <section className="t-mb-f-24">
            <h4 className="t-text-f-l t-mb-f-16">{fabTaps.title}</h4>
            {/* cards container */}
            <div className="t-grid t-grid-cols-2 t-gap-f-16">
              {fabTaps.list.map(
                ({ title, num, today, TodayDirIcon, icon }, idx) => (
                  // single card
                  <article
                    key={idx}
                    className="t-flex t-gap-f-8 t-p-f-8 t-bg-f-primary-80 t-rounded-md"
                  >
                    {/* image container */}
                    <div>
                      <img src={icon} alt={`Icon for ${title}`} />
                    </div>
                    {/* text container */}
                    <div>
                      <h6 className="t-text-f-md">{title}</h6>
                      <span className="t-text-f-l">{num}</span>
                      {today && (
                        <div className="t-text-f-base t-flex t-items-center t-gap-f-8">
                          {today} <TodayDirIcon />
                        </div>
                      )}
                    </div>
                  </article>
                )
              )}
            </div>
          </section>
        </div>

        {/* right container */}
        <div>
          {/* image container */}
          <div className="t-relative">
            <img
              src={progressCircle}
              alt="progress pie chart"
              className="t-w-full"
            />
            <div className="t-flex t-items-center t-gap-f-8 t-absolute t-top-1/2 t-left-1/2 -t-translate-x-1/2 -t-translate-y-1/2 t-text-f-2xl">
              {customCreatedNFCs.num} <HiOutlineShoppingBag />
            </div>
          </div>
        </div>
      </div>

      {/* My Team section */}
      <section className="t-mb-f-24">
        <h4 className="t-text-f-l t-mb-f-16">{myTeams.title}</h4>
        {/* cards container */}
        <div className="t-grid t-grid-cols-3 t-gap-f-16">
          {myTeams.list.map(({ title, num, icon }, idx) => (
            // single card
            <article
              key={idx}
              className="t-flex t-flex-col t-gap-f-8 t-p-f-8 t-bg-f-primary-80 t-rounded-md"
            >
              {/* top container */}
              <div className="t-flex t-justify-between">
                <h6>Team {idx + 1}</h6>
                <span>{title}</span>
              </div>
              {/* bottom container */}
              <div className="t-flex t-justify-between t-items-end">
                <span className="t-text-f-l">{num} Total</span>
                {/* icon container */}
                <div>
                  <img src={icon} alt={`icon for ${title}`} />
                </div>
              </div>
            </article>
          ))}
          <button className="f-btn-lg f-btn-primary-outline">Add Team+</button>
        </div>
      </section>
    </div>
  );
};

export default Progress;
