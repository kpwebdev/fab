import { cardsList, profilesList } from "../../data";
import { BsTrash3 } from "react-icons/bs";
import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const MyFabSharedLayout = () => {
  return (
    <div>
      {/* buttons container */}
      <header className="t-flex t-justify-between">
        {/* left buttons */}
        <div className="t-flex t-gap-8">
          <button className="f-btn-lg f-btn-primary">+ Create fabtap</button>
          <button className="f-btn-lg f-btn-primary-outline">
            + Digital Profile
          </button>
        </div>

        {/* right buttons */}
        <div className="t-flex t-items-center">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "f-btn-sm f-btn-primary t-rounded-r-none t-inline-block"
                : "f-btn-sm f-btn-primary-outline t-rounded-r-none t-inline-block"
            }
            to="/nfc/dashboard/my-profile/my-fab/cards"
          >
            Cards
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "f-btn-sm f-btn-primary t-rounded-l-none t-inline-block"
                : "f-btn-sm f-btn-primary-outline t-rounded-l-none t-inline-block"
            }
            to="/nfc/dashboard/my-profile/my-fab/profiles"
          >
            Profiles
          </NavLink>
        </div>
      </header>

      {/* rendering cards */}
      <Outlet />
    </div>
  );
};

export default MyFabSharedLayout;
