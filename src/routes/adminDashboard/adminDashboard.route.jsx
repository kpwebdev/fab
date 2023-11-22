import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import FabLogo from "../../assets/fab-agency-logo-blue.png";
import { CiUser } from "react-icons/ci";
import { BsClipboard } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { logout } from "../../utils/firebase/firebase.util";

const AdminDashboard = () => {
  const { isPending, error, isError, mutate } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      toast.success("Successfully logged out.");
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      navigate("/nfc/authentication/login");
    },
    onError: () => {
      toast.error("Failed to logout.");
      console.log(error);
    },
  });
  return (
    <div className="t-flex">
      {/* navigation left side panel starts */}
      <div
        className="offcanvas offcanvas-start show t-h-screen t-w-1/3 t-sticky t-top-0"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <header className="offcanvas-header t-flex t-items-start t-flex-col t-gap-f-16">
          <img
            src={FabLogo}
            alt="Fab Digital Marketing Logo"
            className="t-w-f-120"
          />
          <h5 className="t-text-f-l">Dashboard</h5>
        </header>
        <div className="offcanvas-body t-flex t-flex-col t-justify-between">
          {/* page links container */}
          <ul className="t-flex t-flex-col">
            <li>
              <NavLink
                to="/web-admin/orders"
                className={({ isActive }) =>
                  isActive
                    ? "t-flex t-gap-f-8 t-text-f-md t-px-f-8 t-rounded-f-8 t-py-f-16 t-text-f-primary-99 t-bg-f-primary-30"
                    : "t-flex t-gap-f-8 t-text-f-md t-px-f-8 t-rounded-f-8 t-py-f-16 hover:t-bg-f-primary-90"
                }
              >
                <BsClipboard /> <span>Orders</span>
              </NavLink>
            </li>
            {/* <li>
            <NavLink
              to="/nfc/dashboard/settings"
              className={({ isActive }) =>
                isActive
                  ? "t-flex t-gap-f-8 t-text-f-md t-px-f-8 t-rounded-f-8 t-py-f-16 t-text-f-primary-99 t-bg-f-primary-30"
                  : "t-flex t-gap-f-8 t-text-f-md t-px-f-8 t-rounded-f-8 t-py-f-16 hover:t-bg-f-primary-90"
              }
            >
              <AiOutlineSetting /> <span>Settings</span>
            </NavLink>
          </li> */}
          </ul>
          <button className="t-flex t-gap-f-8 t-text-f-md" onClick={mutate}>
            <MdLogout /> <span>Logout</span>
          </button>
        </div>
      </div>
      {/* navigation left side panel ends */}
      {/* content */}
      <div className="t-p-f-24 t-w-2/3">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
