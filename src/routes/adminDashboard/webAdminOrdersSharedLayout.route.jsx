import { useQuery } from "@tanstack/react-query";
import { Outlet, NavLink } from "react-router-dom";
import { getAllUsers } from "../../utils/firebase/firebase.util";

const WebAdminOrdersSharedLayout = () => {
  const { data, isError, error, isPending } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  if (isPending) {
    return (
      <div className="t-flex t-justify-center t-py-f-48">
        <span className="custom-loader"></span>
      </div>
    );
  }

  console.log("data", data);
  return (
    <div>
      <header>
        <h2 className="t-text-f-3xl">Orders</h2>
      </header>

      {/* order page links */}
      <ul className="t-flex t-gap-f-24 t-py-f-16">
        <li>
          <NavLink
            to="/web-admin/orders/all"
            className={({ isActive }) =>
              isActive
                ? "t-border-b-2 t-border-f-primary-40 t-py-f-8"
                : "t-border-b-2 t-border-transparent t-py-f-8 hover:t-border-f-primary-70"
            }
          >
            All Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/web-admin/orders/pending"
            className={({ isActive }) =>
              isActive
                ? "t-border-b-2 t-border-f-primary-40 t-py-f-8"
                : "t-border-b-2 t-border-transparent t-py-f-8 hover:t-border-f-primary-70"
            }
          >
            Pending Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/web-admin/orders/completed"
            className={({ isActive }) =>
              isActive
                ? "t-border-b-2 t-border-f-primary-40 t-py-f-8"
                : "t-border-b-2 t-border-transparent t-py-f-8 hover:t-border-f-primary-70"
            }
          >
            Completed Orders
          </NavLink>
        </li>
      </ul>
      <Outlet context={{ data }} />
    </div>
  );
};

export default WebAdminOrdersSharedLayout;
