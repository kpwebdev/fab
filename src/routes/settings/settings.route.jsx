import { Outlet } from "react-router-dom";

const Settings = () => {
  return (
    <section>
      <header className="t-flex t-justify-between">
        <h3 className="t-text-f-l md:t-text-f-xl lg:t-text-f-2xl xl:t-text-f-3xl">
          Settings
        </h3>
      </header>

      {/* children rendering region */}
      <Outlet />
    </section>
  );
};

export default Settings;
