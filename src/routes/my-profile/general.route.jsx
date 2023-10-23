import { BiSolidPencil } from "react-icons/bi";
import { AiOutlineInfoCircle, AiFillPlusCircle } from "react-icons/ai";
import { userData } from "../../data";
import { Link } from "react-router-dom";
import {
  addDocument,
  updateUserDetails,
} from "../../utils/firebase/firebase.util";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { getUser } from "../../utils/firebase/firebase.util";
import { useState } from "react";
import { userFormSchema } from "../../schema";
import { Formik, Form, Field } from "formik";

const General = () => {
  const { bannerImage, profilePic } = userData;
  const [isEditing, setIsEditing] = useState(false);

  const { data, error, isError, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  const {
    mutate: updateUser,
    isPending: isUserUpdating,
    isError: isUserError,
    error: userError,
  } = useMutation({
    mutationFn: updateUserDetails,
    onSuccess: () => toast.success("Updated user data successfully."),
    onError: () => {
      toast.error(`User data not updated. error: ${error.message}`);
      console.log(userError);
    },
  });

  if (isPending) {
    return (
      <div className="t-flex t-justify-center t-py-f-48">
        <span className="custom-loader"></span>
      </div>
    );
  }

  const {
    userName,
    fullName,
    companyName,
    role,
    website,
    contact,
    socialMedia,
    status,
  } = data;

  console.log("userName", userName);
  console.log("fullName", fullName);
  console.log("companyName", companyName);
  console.log("role", role);
  console.log("website", website);
  console.log("contact", contact);

  return (
    <div>
      {/* banner */}
      <div className="t-h-f-144 t-bg-f-primary-30 t-relative t-rounded-f-8 t-overflow-hidden">
        <img
          src={bannerImage}
          alt="Banner Image"
          className="t-w-full t-h-full t-object-cover"
        />
        <button
          type="button"
          className="t-absolute t-top-f-8 t-right-f-8 t-text-white t-text-3xl t-bg-f-primary-10 t-p-f-8 t-rounded-full"
        >
          <BiSolidPencil />
        </button>
      </div>

      <div className="t-grid t-grid-cols-2 t-gap-f-48">
        {/* left side */}
        <div>
          {/* profile picture and name, company */}
          <div className="t-flex t-items-end t-gap-f-8 t-ml-f-24 -t-mt-f-48 t-mb-f-24 t-z-10 t-relative">
            <img
              src={profilePic}
              alt="Profile Picture"
              className="t-w-f-144 t-h-f-144 t-object-cover t-rounded-f-8 t-border-2 t-border-f-primary-70"
            />
            <header>
              <h6 className="t-text-f-xl">{fullName}</h6>
              <p className="t-text-f-md">{companyName}</p>
            </header>
          </div>

          {/* user details form */}
          <Formik
            initialValues={{
              userName,
              fullName,
              companyName,
              role,
              website,
              contact,
            }}
            validationSchema={userFormSchema}
            onSubmit={(values) => updateUser(values)}
          >
            {({ errors, touched }) => {
              return (
                <Form className="t-text-f-base">
                  {/* userName container */}
                  <div className="t-mb-f-16">
                    <div className="row">
                      <label
                        htmlFor="userName"
                        className="col-sm-2 col-form-label"
                      >
                        User Name
                      </label>
                      <div className="col-sm-10">
                        <div className="input-group">
                          <span className="input-group-text">fabtab.com/</span>
                          <Field
                            type="text"
                            className="form-control"
                            name="userName"
                            id="userName"
                            readOnly={!isEditing}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>
                    </div>
                    {errors.userName && touched.userName && (
                      <p className="t-text-red-500 t-bg-red-200 t-py-f-8 t-text-f-xs">
                        {errors.userName}
                      </p>
                    )}
                  </div>

                  {/* fullName container */}
                  <div className="t-mb-f-16">
                    <div className="row">
                      <label
                        htmlFor="fullName"
                        className="col-sm-2 col-form-label"
                      >
                        Full Name
                      </label>
                      <div className="col-sm-10">
                        <Field
                          type="text"
                          className="form-control"
                          name="fullName"
                          id="fullName"
                          readOnly={!isEditing}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    {errors.fullName && touched.fullName && (
                      <p className="t-text-red-500 t-bg-red-200 t-py-f-8 t-text-f-xs">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* companyName container */}
                  <div className="t-mb-f-16">
                    <div className="row">
                      <label
                        htmlFor="companyName"
                        className="col-sm-2 col-form-label"
                      >
                        Company Name
                      </label>
                      <div className="col-sm-10">
                        <Field
                          type="text"
                          className="form-control"
                          name="companyName"
                          id="companyName"
                          readOnly={!isEditing}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    {errors.companyName && touched.companyName && (
                      <p className="t-text-red-500 t-bg-red-200 t-py-f-8 t-text-f-xs">
                        {errors.companyName}
                      </p>
                    )}
                  </div>

                  {/* role container */}
                  <div className="t-mb-f-16">
                    <div className="row">
                      <label htmlFor="role" className="col-sm-2 col-form-label">
                        Role
                      </label>
                      <div className="col-sm-10">
                        <Field
                          type="text"
                          className="form-control"
                          name="role"
                          id="role"
                          readOnly={!isEditing}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    {errors.role && touched.role && (
                      <p className="t-text-red-500 t-bg-red-200 t-py-f-8 t-text-f-xs">
                        {errors.role}
                      </p>
                    )}
                  </div>

                  {/* website container */}
                  <div className="t-mb-f-16">
                    <div className="row">
                      <label
                        htmlFor="website"
                        className="col-sm-2 col-form-label"
                      >
                        Website
                      </label>
                      <div className="col-sm-10">
                        <div className="t-flex t-items-center t-gap-f-16">
                          <div className="input-group">
                            <span className="input-group-text">http://</span>
                            <Field
                              type="text"
                              className="form-control"
                              name="website"
                              id="website"
                              readOnly={!isEditing}
                              disabled={!isEditing}
                            />
                          </div>

                          {/* addd button */}
                          {/* <button className="t-text-f-xl t-text-f-primary-30">
                      <AiFillPlusCircle />
                    </button> */}
                        </div>
                      </div>
                    </div>
                    {errors.website && touched.website && (
                      <p className="t-text-red-500 t-bg-red-200 t-py-f-8 t-text-f-xs">
                        {errors.website}
                      </p>
                    )}
                  </div>

                  {/* contact container */}
                  <div className="row t-mb-f-16">
                    <label
                      htmlFor="contact"
                      className="col-sm-2 col-form-label"
                    >
                      Contact
                    </label>
                    <div className="col-sm-10">
                      <div className="t-flex t-gap-f-16">
                        <div className="input-group t-mb-f-16">
                          <span className="input-group-text">+91</span>
                          <Field
                            type="text"
                            className="form-control"
                            name="contact"
                            id="contact"
                            readOnly={!isEditing}
                            disabled={!isEditing}
                          />
                        </div>

                        {/* addd button */}
                        {/* <button className="t-text-f-xl t-text-f-primary-30">
                      <AiFillPlusCircle />
                    </button> */}
                      </div>

                      {/* isWhatsappNum */}
                      {/* <div className="form-check t-flex t-gap-f-16 t-items-center">
                    <Field
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="isWhatsappNum"
                    />
                    <label
                      className="form-check-label t-text-f-base t-flex"
                      htmlFor="isWhatsappNum"
                    >
                      Same as WhatsApp{" "}
                      <button type="button">
                        <AiOutlineInfoCircle />
                      </button>
                    </label>
                  </div> */}
                      <div className="t-mb-f-16"></div>
                    </div>
                    {errors.contact && touched.contact && (
                      <p className="t-text-red-500 t-bg-red-200 t-py-f-8 t-text-f-xs">
                        {errors.contact}
                      </p>
                    )}
                  </div>

                  {/* social media container */}
                  <div className="row t-mb-f-16">
                    <label
                      htmlFor="socialMedia"
                      className="col-sm-2 col-form-label"
                    >
                      Social
                    </label>
                    <div className="col-sm-10 t-flex t-justify-start">
                      <ul className="t-flex t-gap-f-8 t-justify-start t-relative">
                        {socialMedia.map(({ title, href }, idx) => (
                          <li key={idx}>
                            <Link target="_blank" to={href} title={title}>
                              {/* <Icon /> */}
                            </Link>
                          </li>
                        ))}

                        <button
                          type="button"
                          className="t-underline t-absolute -t-top-f-8 -t-right-f-8 t-translate-x-full t-text-sm"
                        >
                          Edit
                        </button>
                      </ul>
                    </div>
                  </div>

                  {isUserError && (
                    <p className="t-text-red-500 t-bg-red-200 t-py-f-8">
                      {userError.message}
                    </p>
                  )}

                  {/* buttons container */}
                  <div>
                    {isEditing ? (
                      <button
                        type="submit"
                        className="f-btn-md f-btn-primary t-px-f-56"
                      >
                        {isUserUpdating ? "Updating..." : "Save"}
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="f-btn-md f-btn-primary-outline t-px-f-56"
                        onClick={() => setIsEditing(true)}
                      >
                        Edit
                      </button>
                    )}
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>

        {/* right side */}
        <div className="t-flex t-flex-col t-justify-between t-py-f-48">
          {/* status container */}
          <div className=" t-flex t-flex-col t-gap-f-24 t-border-f-secondary-95 t-shadow-xl t-border-2 t-p-f-16 t-rounded-f-8">
            <h6 className="t-text-f-xl">Status</h6>
            {/* status card container */}
            <div className="t-flex t-gap-f-24">
              {status.map(({ title, num }, idx) => (
                <div
                  key={idx}
                  className="t-flex t-flex-col t-gap-f-8 t-p-f-24 t-bg-f-secondary-70 t-rounded-f-8"
                >
                  <span className="t-text-f-2xl">{num}</span>
                  <span className="">{title}</span>
                </div>
              ))}
            </div>
            <button type="button" className="f-btn-md f-btn-secondary">
              View Progress
            </button>
          </div>

          {/* buttons container */}
          <div className="t-flex t-flex-col t-gap-f-24 t-px-f-96 t-text-center">
            <Link
              className="f-btn-md f-btn-primary-outline"
              to="/nfc/creation/digital-profile"
            >
              Digital Profile
            </Link>

            <Link
              className="f-btn-md f-btn-primary"
              to="/nfc/creation/physical-card"
            >
              Create your own fabtap
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
