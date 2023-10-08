import { Outlet } from "react-router-dom";

// components
import DashboardNavbar from "../../components/dashboard/dashboardNavbar.component";

const NfcDashboardSharedLayout = () => {
  return (
    <section className="t-flex">
      <DashboardNavbar />
      <div className="t-p-f-24 t-w-2/3">
        <Outlet />
      </div>
    </section>
  );
};

export default NfcDashboardSharedLayout;
