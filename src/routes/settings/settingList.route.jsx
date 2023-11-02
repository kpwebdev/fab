import { settings } from "../../data";
import { Link } from "react-router-dom";
import { BsChevronRight, BsTrash3 } from "react-icons/bs";
import { MdChangeCircle, MdLogout } from "react-icons/md";
import { deleteUserAccount } from "../../utils/firebase/firebase.util";
import { logout } from "../../utils/firebase/firebase.util";
import { useMutation } from "@tanstack/react-query";

const SettingList = () => {
  const {
    mutate: deleteUser,
    isPending: isDeletingUserAccount,
    isError: isErrorDeletingUserAccount,
    error: errorDeletingUserAccount,
  } = useMutation({
    mutationFn: deleteUserAccount,
  });
  const {
    mutate: logoutUser,
    isPending: isLoggingOut,
    isError: isErrorLoggingOut,
    error: errorLoggingOut,
  } = useMutation({
    mutationFn: logout,
  });

  if (isDeletingUserAccount) {
    return (
      <div className="t-flex t-flex-col t-items-center t-justify-center t-py-f-24 t-gap-f-16">
        <p>Deleting the account...</p>
        <span className="custom-loader"></span>
      </div>
    );
  }

  if (isLoggingOut) {
    return (
      <div className="t-flex t-flex-col t-items-center t-justify-center t-py-f-24 t-gap-f-16">
        <p>Logging Out...</p>
        <span className="custom-loader"></span>
      </div>
    );
  }

  return (
    <div>
      {/* rendering each setting section */}
      {settings.map(({ title, list }, idx) => (
        <div key={idx} className="t-my-f-24">
          <h5 className="t-mb-f-16 t-text-f-l">{title}</h5>
          {/* rendering each section's setting */}
          <ul className="t-flex t-flex-col t-gap-f-16 t-text-f-md">
            <li>
              <Link
                to="/nfc/authentication/switch-account"
                className="t-flex t-justify-between t-border-b-2 t-py-f-8"
              >
                <div className="t-flex t-items-center t-gap-f-8">
                  <MdChangeCircle />
                  <span className="t-block">Change Account</span>
                </div>

                <BsChevronRight />
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={deleteUser}
                className="t-flex t-justify-between t-border-b-2 t-py-f-8 t-w-full"
              >
                <div className="t-flex t-items-center t-gap-f-8 t-text-red-500">
                  <BsTrash3 />
                  <span className="t-block">Delete Account</span>
                </div>

                <BsChevronRight />
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={logoutUser}
                className="t-flex t-justify-between t-border-b-2 t-py-f-8 t-w-full"
              >
                <div className="t-flex t-items-center t-gap-f-8 t-text-red-500">
                  <MdLogout />
                  <span className="t-block">Logout</span>
                </div>

                <BsChevronRight />
              </button>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SettingList;
