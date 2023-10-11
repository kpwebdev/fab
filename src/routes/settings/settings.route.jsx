import { Outlet } from "react-router-dom";

const Settings = () => {
  return (
    <section>
      <header className="t-flex t-justify-between">
        <h3 className="t-text-f-3xl">Settings</h3>
      </header>

      {/* children rendering region */}
      <Outlet />
    </section>
  );
};

export default Settings;
