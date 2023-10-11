import { useState } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";

const FormInitialValue = {
  sortBy: "",
};

const OrdersSharedLayout = () => {
  const [formInput, setFormInput] = useState(FormInitialValue);
  const { sortBy } = formInput;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormInput({ ...formInput, [name]: value });
  };

  return (
    <section>
      <header className="t-flex t-justify-between">
        <h3 className="t-text-f-3xl">Orders</h3>
        <p>
          Total Members: <span className="t-text-f-primary-40">90</span>
        </p>
      </header>

      {/* actions container */}
      <div className="t-flex t-justify-between t-my-f-24">
        {/* navigation links */}
        <ul className="t-flex t-gap-f-24 t-py-f-16">
          <li>
            <NavLink to="/nfc/dashboard/orders">Self</NavLink>
          </li>
          <li>
            <NavLink to="/nfc/dashboard/orders/customer">Customer</NavLink>
          </li>
        </ul>

        <form className="t-text-f-md t-flex t-gap-f-8">
          <select
            name="sortBy"
            id="sortBy"
            value={sortBy}
            onChange={handleChange}
            className="t-p-f-8 t-rounded-f-8"
          >
            <option value="">Sort By</option>
            <option value="name">Name</option>
          </select>
        </form>
      </div>

      {/* children rendering region */}
      <Outlet />
    </section>
  );
};

export default OrdersSharedLayout;
