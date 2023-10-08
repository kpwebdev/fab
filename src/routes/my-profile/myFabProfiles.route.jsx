import { profilesList } from "../../data";
import { BsTrash3, BsClipboard } from "react-icons/bs";
import React from "react";

const MyFabProfiles = () => {
  return (
    // cards container
    <div className="t-flex t-flex-col t-gap-f-24 t-my-f-48">
      {profilesList.map(
        ({ creatorName, profileName, personalized, profileImage }, idx) => (
          <React.Fragment key={idx}>
            <article className="t-relative t-flex t-gap-f-16">
              {/* img container */}
              <div className="t-rounded-f-8">
                <img src={profileImage} alt={`image of ${profileName}`} />
              </div>

              {/* text container */}
              <div className="t-flex t-flex-col t-justify-between t-gap-f-16 t-grow">
                <header>
                  <h6 className="t-text-f-xs t-text-f-primary-40">
                    {creatorName}
                  </h6>
                  <h5 className="t-text-f-md">{profileName}</h5>
                  <span className="t-text-f-xs t-text-f-primary-70">
                    {personalized ? "Personalized" : "Not Personalized"}
                  </span>
                </header>

                <footer className="t-flex t-items-end t-justify-end">
                  {/* buttons container */}
                  <div className="t-flex t-flex-col t-gap-f-8">
                    <button className="f-btn-lg f-btn-primary">
                      Edit Card
                    </button>
                    <button className="f-btn-lg f-btn-primary-outline">
                      Add to Cart
                    </button>
                  </div>
                </footer>
              </div>

              {/* action buttons container */}
              <div className="t-absolute t-top-0 t-right-0 t-flex t-gap-f-16">
                <button>
                  <BsClipboard className="t-text-primary-500 t-text-f-l" />
                </button>
                <button>
                  <BsTrash3 className="t-text-red-500 t-text-f-l" />
                </button>
              </div>
            </article>

            {idx !== profilesList.length - 1 && (
              <div className="t-h-f-2 t-bg-f-primary-90"></div>
            )}
          </React.Fragment>
        )
      )}
    </div>
  );
};

export default MyFabProfiles;
