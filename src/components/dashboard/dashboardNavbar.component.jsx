import { NavLink, useNavigate } from "react-router-dom";
import FabLogo from "../../assets/fab-log-blue-trasparent.png";
import { getUser, logout } from "../../utils/firebase/firebase.util";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { MdLogout } from "react-icons/md";

import { offcanvasPageLinks, offcanvasOptionsLinks } from "../../data";
import { toast } from "react-toastify";
import { CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineSetting } from "react-icons/ai";
import { BsClipboard } from "react-icons/bs";

const DashboardNavbar = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    data,
    isPending: isGettingUserData,
    isError: isErrorGettingUserData,
    error: errorGettingUserData,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });
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

  if (isPending || isGettingUserData) {
    return (
      <div className="t-flex t-justify-center t-py-f-48">
        <span className="custom-loader"></span>
      </div>
    );
  }

  const { card } = data;

  return (
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
              to="/nfc/dashboard/my-profile"
              className={({ isActive }) =>
                isActive
                  ? "t-flex t-gap-f-8 t-text-f-md t-px-f-8 t-rounded-f-8 t-py-f-16 t-text-f-primary-99 t-bg-f-primary-30"
                  : "t-flex t-gap-f-8 t-text-f-md t-px-f-8 t-rounded-f-8 t-py-f-16 hover:t-bg-f-primary-90"
              }
            >
              <CiUser /> <span>My Profile</span>
            </NavLink>
          </li>
          {!card && (
            <li>
              <NavLink
                to="/nfc/dashboard/shop"
                className={({ isActive }) =>
                  isActive
                    ? "t-flex t-gap-f-8 t-text-f-md t-px-f-8 t-rounded-f-8 t-py-f-16 t-text-f-primary-99 t-bg-f-primary-30"
                    : "t-flex t-gap-f-8 t-text-f-md t-px-f-8 t-rounded-f-8 t-py-f-16 hover:t-bg-f-primary-90"
                }
              >
                <HiOutlineShoppingBag /> <span>Shop</span>
              </NavLink>
            </li>
          )}
          <li>
            {card && (
              <NavLink
                to="/nfc/dashboard/orders"
                className={({ isActive }) =>
                  isActive
                    ? "t-flex t-gap-f-8 t-text-f-md t-px-f-8 t-rounded-f-8 t-py-f-16 t-text-f-primary-99 t-bg-f-primary-30"
                    : "t-flex t-gap-f-8 t-text-f-md t-px-f-8 t-rounded-f-8 t-py-f-16 hover:t-bg-f-primary-90"
                }
              >
                <BsClipboard /> <span>Orders</span>
              </NavLink>
            )}
          </li>
          <li>
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
          </li>
          {/* {offcanvasPageLinks.map(({ path, Icon, title }, idx) => (
            <li key={idx}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "t-flex t-gap-f-8 t-text-f-md t-px-f-8 t-rounded-f-8 t-py-f-16 t-text-f-primary-99 t-bg-f-primary-30"
                    : "t-flex t-gap-f-8 t-text-f-md t-px-f-8 t-rounded-f-8 t-py-f-16 hover:t-bg-f-primary-90"
                }
              >
                <Icon /> <span>{title}</span>
              </NavLink>
            </li>
          ))} */}
        </ul>

        {/* relative links container */}
        {/* <ul className="t-flex t-flex-col t-gap-f-16">
          {offcanvasOptionsLinks.map(({ path, Icon, title }, idx) => (
            <li key={idx}>
              <NavLink
                to={path}
                className="t-flex t-gap-f-8 t-text-f-md"
                onClick={
                  title === "Logout"
                    ? mutate
                    : () =>
                        console.log(`function is not decided yet - ${title}`)
                }
              >
                <Icon /> <span>{title}</span>
              </NavLink>
            </li>
          ))}
        </ul> */}
        <button className="t-flex t-gap-f-8 t-text-f-md" onClick={mutate}>
          <MdLogout /> <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardNavbar;
