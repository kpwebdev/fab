import { NavLink, Outlet } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { mkConfig, generateCsv, download } from "export-to-csv";
import { contacts } from "../../data";

const FormInitialValue = {
  search: "",
  sortBy: "",
};

const csvConfig = mkConfig({ useKeysAsHeaders: true });

const contactsToDownload = contacts.map((contact, idx) => {
  const { favorite, name, mobileNum, emailId } = contact;
  return {
    "sl. No.": idx,
    Name: name,
    "Mobile Number": mobileNum,
    "Email ID": emailId,
    favorite: favorite ? "yes" : "no",
  };
});

const ContactSharedLayout = () => {
  const [formInput, setFormInput] = useState(FormInitialValue);
  const { search, sortBy } = formInput;
  const csv = generateCsv(csvConfig)(contactsToDownload);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormInput({ ...formInput, [name]: value });
  };

  return (
    <section>
      <header className="t-flex t-justify-between">
        <h3 className="t-text-f-3xl">Contacts</h3>
        <p>
          Total Members: <span className="t-text-f-primary-40">2000</span>
        </p>
      </header>

      {/* action container */}
      <div className="t-flex t-justify-between t-my-f-24">
        <div className="t-flex t-gap-f-8">
          <NavLink className="f-btn-lg f-btn-primary">+Add new</NavLink>
          <button
            type="button"
            className="f-btn-lg f-btn-primary-outline"
            onClick={() => download(csvConfig)(csv)}
          >
            Export as CSV
          </button>
        </div>

        <form className="t-text-f-md t-flex t-gap-f-8">
          <div className="t-flex t-items-center t-gap-f-8 t-px-f-8 t-border t-rounded-f-8">
            <IoIosSearch />
            <input
              type="search"
              name="search"
              value={search}
              onChange={handleChange}
              placeholder="Search..."
              className="t-p-f-8 t-outline-none"
            />
          </div>

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

      {/* children rending region */}
      <div>
        <Outlet />
      </div>
    </section>
  );
};

export default ContactSharedLayout;
