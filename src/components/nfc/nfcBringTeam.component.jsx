import { Link } from "react-router-dom";
import { LuSmartphoneNfc } from "react-icons/lu";
import { MdOutlineMobileOff } from "react-icons/md";
import { AiOutlineSolution } from "react-icons/ai";
import { MdMoreTime } from "react-icons/md";
import { GoGlobe } from "react-icons/go";
import { IoSparklesOutline } from "react-icons/io5";

const NfcBringTeam = () => {
  return (
    // <section className="t-bg-team-image t-py-f-96 t-text-f-primary-99">
    //   <div className="container">
    //     <h2 className="t-text-f-3xl t-mb-f-16">
    //       Bring your <span className="t-text-f-secondary-70">Team</span>
    //     </h2>
    //     <p className="t-text-f-md">
    //       Who says work has to be solitary? Gather your team and unlock new
    //       levels of productivity together. Collaborative efforts bring shared
    //       success, where strengths combine for greater achievements and a more
    //       fulfilling journey.
    //     </p>
    //     {/* buttons container */}
    //     <div className="t-flex t-justify-end t-gap-f-24 t-my-f-48">
    //       {/* <button className="f-btn-md f-btn-secondary-outline">
    //         Add Company
    //       </button> */}
    //       <Link
    //         to="https://wa.me/971568781104"
    //         className="f-btn-md f-btn-primary"
    //         target="_blank"
    //       >
    //         Let's Connect
    //       </Link>
    //     </div>
    //   </div>
    // </section>
    <section className="t-bg-team-image">
      <div className="container t-py-f-24 t-text-white">
        <h2 className="t-text-f-l md:t-text-f-xl lg:t-text-f-2xl t-mb-f-16 md:t-mb-f-24 t-text-center sm:t-text-start">
          Why choose <span className="t-text-f-secondary-50">Fab Tap</span>
        </h2>
        <ul className="t-grid md:t-grid-cols-2 md:t-grid-rows-3 t-gap-f-24 md:t-gap-f-16">
          <li className="t-flex t-flex-col t-items-center sm:t-flex-row t-gap-f-16">
            {/* icons */}
            <LuSmartphoneNfc className="t-w-f-48 t-h-f-48 sm:t-w-f-64 sm:t-h-f-64 t-text-f-primary-50" />
            {/* text container */}
            <div className="t-text-center sm:t-text-start">
              <h4 className="t-text-f-base md:t-text-f-md t-text-f-primary-50">
                Integrated NFC Technology
              </h4>
              <p className="t-text-f-sm md:t-text-f-base">
                Experience seamless connections, safe and secure data transfer
                with our contactless NFC technology in our fab tap cards.
              </p>
            </div>
          </li>

          <li className="t-flex t-flex-col t-items-center sm:t-flex-row t-gap-f-16">
            {/* icons */}
            <MdOutlineMobileOff className="t-w-f-48 t-h-f-48 sm:t-w-f-48 sm:t-h-f-48 t-text-f-primary-50" />
            {/* text container */}
            <div className="t-text-center sm:t-text-start">
              <h4 className="t-text-f-md t-text-f-primary-50">
                No Apps Required
              </h4>
              <p>
                No app is required to create or edit details. Instantly share or
                save your information on Fab Tap.
              </p>
            </div>
          </li>

          <li className="t-flex t-flex-col t-items-center sm:t-flex-row t-gap-f-16">
            {/* icons */}
            <AiOutlineSolution className="t-w-f-48 t-h-f-48 sm:t-w-f-80 sm:t-h-f-80 t-text-f-primary-50" />
            {/* text container */}
            <div className="t-text-center sm:t-text-start">
              <h4 className="t-text-f-md t-text-f-primary-50">
                All-in-One Networking Solution in your pocket
              </h4>
              <p>
                Store your all information in one place aka in our Fab Tap Card.
                No need to carry 1000 cards, just an All-in-one Fab Tap card{" "}
                <span className="">
                  to share all of your social links, website and contact
                  details.
                </span>
              </p>
            </div>
          </li>

          <li className="t-flex t-flex-col t-items-center sm:t-flex-row t-gap-f-16">
            {/* icons */}
            <MdMoreTime className="t-w-f-48 t-h-f-48 sm:t-w-f-48 sm:t-h-f-48 t-text-f-primary-50" />
            {/* text container */}
            <div className="t-text-center sm:t-text-start">
              <h4 className="t-text-f-md t-text-f-primary-50">
                Time Saving Solution
              </h4>
              <p>
                Eliminate the need for manual contact exchange and save your
                valuable time during meet-ups.
              </p>
            </div>
          </li>

          <li className="t-flex t-flex-col t-items-center sm:t-flex-row t-gap-f-16">
            {/* icons */}
            <GoGlobe className="t-w-f-48 t-h-f-48 sm:t-w-f-64 sm:t-h-f-64 t-text-f-primary-50" />
            {/* text container */}
            <div className="t-text-center sm:t-text-start">
              <h4 className="t-text-f-md t-text-f-primary-50">Eco-Friendly</h4>
              <p>
                <span className="">
                  No need to fill up your pockets with multiple paper cards. Use
                  one card for unlimited sharing
                </span>{" "}
                and reduce paper waste with our environment-friendly Fab Tap
                card.
              </p>
            </div>
          </li>

          <li className="t-flex t-flex-col t-items-center sm:t-flex-row t-gap-f-16">
            {/* icons */}
            <IoSparklesOutline className="t-w-f-48 t-h-f-48 sm:t-w-f-48 sm:t-h-f-48 t-text-f-primary-50" />
            {/* text container */}
            <div className="t-text-center sm:t-text-start">
              <h4 className="t-text-f-md t-text-f-primary-50">
                Spark Curiosity
              </h4>
              <p>
                Say goodbye to ordinary business cards. Say hello to NFC
                brilliance. Instant attention, lasting impression!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NfcBringTeam;
