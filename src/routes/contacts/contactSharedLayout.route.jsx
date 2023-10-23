import { NavLink, Outlet } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { mkConfig, generateCsv, download } from "export-to-csv";
// import { contacts } from "../../data";
import { GrClose } from "react-icons/gr";
import { Formik, Form, Field } from "formik";
import PhoneInput from "react-phone-input-2";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { contactFormSchema } from "../../schema";
import { getUser } from "../../utils/firebase/firebase.util";
import { updateContacts } from "../../utils/firebase/firebase.util";
import { toast } from "react-toastify";

const FormInitialValue = {
  search: "",
  sortBy: "",
};

const csvConfig = mkConfig({ useKeysAsHeaders: true });

const ContactSharedLayout = () => {
  const queryClient = useQueryClient();
  const { data, error, isError, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });
  const { contacts } = data;

  const {
    mutate: updateContact,
    isPending: isUpdatingContact,
    isError: isErrorUpdatingContact,
    error: errorUpdatingContact,
  } = useMutation({
    mutationFn: updateContacts,
    onSuccess: () => toast.success("Contacts has been updated successfully."),
    onError: () => {
      toast.error(
        "Something went wrong while updating the contacts. Please contact the web admin"
      );
      console.log(error);
    },
  });

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

  const [formInput, setFormInput] = useState(FormInitialValue);
  const { search, sortBy } = formInput;
  const csv = generateCsv(csvConfig)(contactsToDownload);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormInput({ ...formInput, [name]: value });
  };

  if (isPending) {
    return (
      <div className="t-flex t-justify-center t-py-f-48">
        <span className="custom-loader"></span>
      </div>
    );
  }

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
          <button
            type="button"
            className="f-btn-lg f-btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#addContact"
          >
            +Add new
          </button>
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
        <Outlet context={{ formInput, contacts }} />
      </div>

      {/* modal to add a contact starts */}

      <div
        className="modal fade"
        id="addContact"
        tabIndex="-1"
        aria-labelledby="addContactLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addContactLabel">
                Add Contact
              </h1>
              <button
                type="button"
                className=""
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <GrClose />
              </button>
            </div>
            <div className="modal-body">
              <Formik
                initialValues={{
                  favorite: false,
                  profilePic: "",
                  name: "",
                  mobileNum: "",
                  emailId: "",
                }}
                validationSchema={contactFormSchema}
                onSubmit={(values) => {
                  const newContacts = [...contacts, { ...values }];
                  updateContact(newContacts);
                }}
              >
                {({ errors, touched, values, handleChange }) => {
                  console.log("current values", values);
                  return (
                    <Form>
                      <div className="form-check t-mb-f-16">
                        <Field
                          type="checkbox"
                          className="form-check-input"
                          id="favorite"
                          name="favorite"
                        />
                        <label htmlFor="favorite" className="form-check-label">
                          Favourite
                        </label>
                        {errors.favorite && touched.favorite && (
                          <p className="t-text-red-500 t-py-f-8 t-text-f-sm">
                            {errors.favorite}
                          </p>
                        )}
                      </div>

                      <div className="t-mb-f-16">
                        <label htmlFor="name" className="form-label">
                          Name
                        </label>
                        <Field
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                        />
                        {errors.name && touched.name && (
                          <p className="t-text-red-500 t-py-f-8 t-text-f-sm">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div className="t-mb-f-16">
                        <label htmlFor="mobileNum" className="form-label">
                          Number
                        </label>
                        <PhoneInput
                          type="tel"
                          name="mobileNum"
                          country={"in"}
                          inputProps={{ id: "mobileNum", name: "mobileNum" }}
                          value={values.mobileNum}
                          onChange={(value, country, e, formattedValue) =>
                            handleChange(e)
                          }
                        />
                        {errors.mobileNum && touched.mobileNum && (
                          <p className="t-text-red-500 t-py-f-8 t-text-f-sm">
                            {errors.mobileNum}
                          </p>
                        )}
                      </div>

                      <div className="t-mb-f-16">
                        <label htmlFor="emailId" className="form-label">
                          Email
                        </label>
                        <Field
                          type="email"
                          className="form-control"
                          name="emailId"
                        />
                        {errors.emailId && touched.emailId && (
                          <p className="t-text-red-500 t-py-f-8 t-text-f-sm">
                            {errors.emailId}
                          </p>
                        )}
                      </div>

                      {/* buttons container */}
                      <div className="t-flex t-gap-f-16 t-justify-end">
                        <button
                          type="button"
                          className="f-btn-sm f-btn-danger-outline"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="submit"
                          className="f-btn-sm f-btn-primary"
                        >
                          {isUpdatingContact
                            ? "Adding the contact"
                            : "+Add Contact"}
                        </button>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      {/* modal to add a contact ends */}
    </section>
  );
};

export default ContactSharedLayout;
