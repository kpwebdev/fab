import { Outlet } from "react-router-dom";

// components
import DashboardNavbar from "../../components/dashboard/dashboardNavbar.component";

const NfcDashboardSharedLayout = () => {
  return (
    <section className="t-flex">
      <DashboardNavbar />
      <div className="t-p-f-24 t-grow">
        <Outlet />
      </div>
    </section>
  );
};

export default NfcDashboardSharedLayout;
