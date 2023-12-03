import { Outlet } from "react-router-dom";

// components
import DashboardNavbar from "../../components/dashboard/dashboardNavbar.component";

const NfcDashboardSharedLayout = () => {
  return (
    <section className="t-flex">
      <DashboardNavbar />
      <div
        className={`t-p-f-24 t-grow lg:t-w-4/6 ${
          window.innerWidth >= 1024 ? "" : ""
        }`}
      >
        <Outlet />
      </div>
      <button
        class="f-btn-md f-btn-primary t-fixed t-bottom-f-16 t-right-f-16 lg:t-hidden"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#dashboardNavbar"
        aria-controls="dashboardNavbar"
      >
        Menu
      </button>
    </section>
  );
};

export default NfcDashboardSharedLayout;
