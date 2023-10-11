import { settings } from "../../data";
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

const SettingList = () => {
  return (
    <div>
      {/* rendering each setting section */}
      {settings.map(({ title, list }, idx) => (
        <div key={idx} className="t-my-f-24">
          <h5 className="t-mb-f-16 t-text-f-l">{title}</h5>
          {/* rendering each section's setting */}
          <ul className="t-flex t-flex-col t-gap-f-16 t-text-f-md">
            {list.map(({ Icon, settingName, isDangerous, href }, idx) => (
              <li key={idx}>
                <Link
                  to={href}
                  className="t-flex t-justify-between t-border-b-2 t-py-f-8"
                >
                  <div
                    className={`t-flex t-items-center t-gap-f-8${
                      isDangerous ? " t-text-red-500" : ""
                    }`}
                  >
                    <Icon />
                    <span className="t-block">{settingName}</span>
                  </div>

                  <BsChevronRight />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SettingList;
