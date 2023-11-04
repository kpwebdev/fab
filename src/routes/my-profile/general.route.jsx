import { BiSolidPencil } from "react-icons/bi";
import { AiFillCamera } from "react-icons/ai";
import { AiOutlineInfoCircle, AiFillPlusCircle } from "react-icons/ai";
import { userData } from "../../data";
import defaultProfilePic from "../../assets/user-review.png";
import defaultBannerImage from "../../assets/banner-image.png";
import { Link } from "react-router-dom";
import {
  addDocument,
  updateSocialMedia,
  updateUserDetails,
  uploadFile,
} from "../../utils/firebase/firebase.util";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { getUser } from "../../utils/firebase/firebase.util";
import { useState } from "react";
import { userFormSchema, socialMediaSchema } from "../../schema";
import { Formik, Form, Field } from "formik";
import PhoneInput from "react-phone-input-2";
// icons
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const General = () => {
  const queryClient = useQueryClient();
  // const { profilePic } = userData;
  const [isEditing, setIsEditing] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

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
    onSuccess: () => {
      toast.success("Updated user data successfully.");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      setIsEditing(false);
    },
    onError: () => {
      toast.error(`User data not updated. error: ${error.message}`);
      console.log(userError);
    },
  });

  const {
    mutate: updateSocialMedias,
    isPending: isUpdatingSocialMedias,
    isError: isErrorUpdatingSocialMedia,
    error: errorUpdatingSocialMedia,
  } = useMutation({
    mutationFn: updateSocialMedia,
    onSuccess: () => {
      toast.success("Updated the social medias successfully.");
      setShowDropdown(false);
      queryClient.invalidateQueries();
    },
    onError: () =>
      toast.error(
        "Failed updating the social medias. Please contact the web admin."
      ),
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
    bannerImage,
    profilePic,
    companyVision,
    companyAddress,
    profile,
    status,
    card,
  } = data;

  const [
    { href: facebookHref, has: hasFacebook },
    { href: instagramHref, has: hasInstagram },
    { href: whatsappNum, has: hasWhatsapp },
    { href: twitterHref, has: hasTwitter },
    { href: linkedInHref, has: hasLinkedIn },
  ] = socialMedia;

  return (
    <div>
      <Formik
        initialValues={{
          userName,
          fullName,
          companyName,
          role,
          website,
          contact,
          bannerImage,
          profilePic,
          companyVision,
          companyAddress,
          fileBannerImage: "",
          fileProfilePic: "",
        }}
        validationSchema={userFormSchema}
      >
        {({
          errors,
          touched,
          handleChange,
          values,
          setFieldValue,
          setSubmitting,
          isSubmitting,
        }) => {
          return (
            <>
              {/* banner */}
              <div className="t-h-f-144 t-bg-f-primary-30 t-relative t-rounded-f-8 t-overflow-hidden">
                <img
                  src={values.bannerImage || defaultBannerImage}
                  alt="Banner Image"
                  className="t-w-full t-h-full t-object-cover"
                />
                {isEditing && (
                  <>
                    <label
                      htmlFor="fileBannerImage"
                      className="t-absolute t-top-f-8 t-right-f-8 t-text-white t-text-3xl t-bg-f-primary-10 t-p-f-8 t-rounded-full t-cursor-pointer"
                    >
                      <BiSolidPencil />
                    </label>
                    <input
                      type="file"
                      className="t-hidden"
                      name="fileBannerImage"
                      id="fileBannerImage"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = () => {
                          setFieldValue("fileBannerImage", e.target.files[0]);
                          setFieldValue("bannerImage", reader.result);
                        };
                      }}
                    />
                    <Field type />
                  </>
                )}
              </div>

              <div className="t-grid t-grid-cols-2 t-gap-f-48">
                {/* left side */}
                <div>
                  {/* profile picture and name, company */}

                  <div className="t-flex t-items-end t-gap-f-8 t-ml-f-24 -t-mt-f-48 t-mb-f-24 t-z-10 t-relative">
                    <div className="overflow-hidden t-relative t-rounded-f-8">
                      <img
                        src={values.profilePic || defaultProfilePic}
                        alt="Profile Picture"
                        className="t-w-f-144 t-h-f-144 t-object-cover t-border-2 t-border-f-primary-70"
                      />
                      {isEditing && (
                        <>
                          <label
                            htmlFor="fileProfilePic"
                            className="t-absolute t-w-full t-h-full t-top-0 t-left-0 t-bg-f-primary-98 t-bg-opacity-50 t-cursor-pointer"
                          >
                            <AiFillCamera className="t-absolute t-top-1/2 t-left-1/2 -t-translate-x-1/2 -t-translate-y-1/2 t-text-f-4xl t-text-f-primary-30" />
                          </label>
                          <input
                            type="file"
                            name="fileProfilePic"
                            id="fileProfilePic"
                            className="t-hidden"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              const reader = new FileReader();
                              reader.readAsDataURL(file);
                              reader.onload = () => {
                                setFieldValue(
                                  "fileProfilePic",
                                  e.target.files[0]
                                );
                                setFieldValue("profilePic", reader.result);
                              };
                            }}
                          />
                        </>
                      )}
                    </div>
                    <header>
                      <h6 className="t-text-f-xl">{fullName}</h6>
                      <p className="t-text-f-md">{companyName}</p>
                    </header>
                  </div>

                  {/* user details form */}

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
                            <span className="input-group-text">
                              {`${window.location.origin.replace(
                                /https?:\/\//,
                                ""
                              )}/profiles/`}
                            </span>
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

                    {/* companyVision container */}
                    <div className="t-mb-f-16">
                      <div className="row">
                        <label
                          htmlFor="companyVision"
                          className="col-sm-2 col-form-label"
                        >
                          Company Vision
                        </label>
                        <div className="col-sm-10">
                          <Field
                            type="text"
                            className="form-control"
                            name="companyVision"
                            id="companyVision"
                            readOnly={!isEditing}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>
                      {errors.companyVision && touched.companyVision && (
                        <p className="t-text-red-500 t-bg-red-200 t-py-f-8 t-text-f-xs">
                          {errors.companyVision}
                        </p>
                      )}
                    </div>

                    {/* companyAddress container */}
                    <div className="t-mb-f-16">
                      <div className="row">
                        <label
                          htmlFor="companyAddress"
                          className="col-sm-2 col-form-label"
                        >
                          Company Address
                        </label>
                        <div className="col-sm-10">
                          <Field
                            type="text"
                            className="form-control"
                            name="companyAddress"
                            id="companyAddress"
                            readOnly={!isEditing}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>
                      {errors.companyAddress && touched.companyAddress && (
                        <p className="t-text-red-500 t-bg-red-200 t-py-f-8 t-text-f-xs">
                          {errors.companyAddress}
                        </p>
                      )}
                    </div>

                    {/* role container */}
                    <div className="t-mb-f-16">
                      <div className="row">
                        <label
                          htmlFor="role"
                          className="col-sm-2 col-form-label"
                        >
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
                        <PhoneInput
                          inputProps={{
                            id: "contact",
                            name: "contact",
                            readOnly: !isEditing,
                          }}
                          disabled={!isEditing}
                          inputClass="form-control"
                          inputStyle={{ width: "100%" }}
                          country={"in"}
                          value={contact}
                          onChange={(value, country, e, formattedValue) =>
                            handleChange(e)
                          }
                        />
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
                        <Formik
                          initialValues={{
                            hasFacebook: hasFacebook,
                            facebookHref: facebookHref,
                            hasInstagram: hasInstagram,
                            instagramHref: instagramHref,
                            hasWhatsapp: hasWhatsapp,
                            whatsappNum: whatsappNum,
                            hasTwitter: hasTwitter,
                            twitterHref: twitterHref,
                            hasLinkedIn: hasLinkedIn,
                            linkedInHref: linkedInHref,
                          }}
                          validationSchema={socialMediaSchema}
                        >
                          {({ touched, errors, handleChange, values }) => {
                            return (
                              <>
                                <ul className="t-flex t-gap-f-8 t-items-center t-justify-start t-relative">
                                  {values.hasFacebook &&
                                    !errors.facebookHref &&
                                    values.facebookHref && (
                                      <Link
                                        to={values.facebookHref}
                                        target="_blank"
                                      >
                                        <BsFacebook className="t-text-f-primary-40 t-text-f-md hover:t-text-f-primary-70" />
                                      </Link>
                                    )}
                                  {values.hasInstagram &&
                                    !errors.instagramHref &&
                                    values.instagramHref && (
                                      <Link
                                        to={values.instagramHref}
                                        target="_blank"
                                      >
                                        <AiFillInstagram className="t-text-f-primary-40 t-text-f-md hover:t-text-f-primary-70" />
                                      </Link>
                                    )}
                                  {values.hasWhatsapp &&
                                    values.whatsappNum &&
                                    !errors.whatsappNum && (
                                      <Link
                                        to={
                                          "https://wa.me/" +
                                          values.whatsappNum.replace(
                                            /[\s\+\(\)\-]/g,
                                            ""
                                          )
                                        }
                                        target="_blank"
                                      >
                                        <IoLogoWhatsapp className="t-text-f-primary-40 t-text-f-md hover:t-text-f-primary-70" />
                                      </Link>
                                    )}
                                  {values.hasTwitter &&
                                    !errors.twitterHref &&
                                    values.twitterHref && (
                                      <Link
                                        to={values.twitterHref}
                                        target="_blank"
                                      >
                                        <AiOutlineTwitter className="t-text-f-primary-40 t-text-f-md hover:t-text-f-primary-70" />
                                      </Link>
                                    )}
                                  {values.hasLinkedIn &&
                                    !errors.linkedInHref &&
                                    values.linkedInHref && (
                                      <Link
                                        to={values.linkedInHref}
                                        target="_blank"
                                      >
                                        <AiFillLinkedin className="t-text-f-primary-40 t-text-f-md hover:t-text-f-primary-70" />
                                      </Link>
                                    )}

                                  <div className="t-absolute -t-top-f-8 -t-right-f-8 t-translate-x-full">
                                    <div className="dropdown">
                                      <button
                                        type="button"
                                        className="t-underline t-text-sm"
                                        // data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        // data-bs-auto-close="false"
                                        onClick={() =>
                                          setShowDropdown(() => !showDropdown)
                                        }
                                      >
                                        Edit
                                      </button>
                                      {showDropdown && (
                                        <div
                                          className="dropdown-menu show t-min-w-[500px] t-p-f-8 t-shadow-md"
                                          style={{
                                            transform: "translateY(-100%)",
                                          }}
                                        >
                                          <Form>
                                            <div className="t-mb-f-16">
                                              <div className="t-flex t-items-center t-gap-f-8">
                                                <div className="form-check">
                                                  <label
                                                    htmlFor="hasFacebook"
                                                    className="form-check-label t-hidden t-mb-0"
                                                  >
                                                    Has facebook
                                                  </label>
                                                  <Field
                                                    type="checkbox"
                                                    id="hasFacebook"
                                                    name="hasFacebook"
                                                    className="form-check-input"
                                                  />
                                                </div>
                                                <div className="t-flex t-items-center t-gap-f-8">
                                                  <label
                                                    htmlFor="facebookHref"
                                                    className="form-label t-min-w-fit t-mb-0"
                                                  >
                                                    Facebook Url:
                                                  </label>
                                                  <Field
                                                    type="url"
                                                    id="facebookHref"
                                                    name="facebookHref"
                                                    className="form-control"
                                                    disabled={
                                                      !values.hasFacebook
                                                    }
                                                  />
                                                </div>
                                              </div>
                                              {errors.facebookHref &&
                                                touched.facebookHref && (
                                                  <p className="t-text-red-500 t-text-f-sm t-mt-f-8">
                                                    {errors.facebookHref}
                                                  </p>
                                                )}
                                            </div>

                                            <div className="t-mb-f-16">
                                              <div className="t-flex t-items-center t-gap-f-8">
                                                <div className="form-check">
                                                  <label
                                                    htmlFor="hasInstagram"
                                                    className="form-check-label t-hidden t-mb-0"
                                                  >
                                                    Has Instagram
                                                  </label>
                                                  <Field
                                                    type="checkbox"
                                                    id="hasInstagram"
                                                    name="hasInstagram"
                                                    className="form-check-input"
                                                  />
                                                </div>
                                                <div className="t-flex t-items-center t-gap-f-8">
                                                  <label
                                                    htmlFor="instagramHref"
                                                    className="form-label t-min-w-fit t-mb-0"
                                                  >
                                                    Instagram Url:
                                                  </label>
                                                  <Field
                                                    type="url"
                                                    id="instagramHref"
                                                    name="instagramHref"
                                                    className="form-control"
                                                    disabled={
                                                      !values.hasInstagram
                                                    }
                                                  />
                                                </div>
                                              </div>
                                              {errors.instagramHref &&
                                                touched.instagramHref && (
                                                  <p className="t-text-red-500 t-text-f-sm t-mt-f-8">
                                                    {errors.instagramHref}
                                                  </p>
                                                )}
                                            </div>

                                            <div className="t-mb-f-16">
                                              <div className="t-flex t-items-center t-gap-f-8">
                                                <div className="form-check">
                                                  <label
                                                    htmlFor="hasWhatsapp"
                                                    className="form-check-label t-hidden t-mb-0"
                                                  >
                                                    Has Whatsapp
                                                  </label>
                                                  <Field
                                                    type="checkbox"
                                                    id="hasWhatsapp"
                                                    name="hasWhatsapp"
                                                    className="form-check-input"
                                                  />
                                                </div>
                                                <div className="t-flex t-items-center t-gap-f-8">
                                                  <label
                                                    htmlFor="whatsappNum"
                                                    className="form-label t-min-w-fit t-mb-0"
                                                  >
                                                    Whatsapp Number:
                                                  </label>
                                                  <PhoneInput
                                                    type="url"
                                                    inputProps={{
                                                      id: "whatsappNum",
                                                      name: "whatsappNum",
                                                    }}
                                                    inputStyle={{
                                                      width: "100%",
                                                    }}
                                                    inputClass="form-control"
                                                    country={"in"}
                                                    value={values.whatsappNum}
                                                    onChange={(
                                                      value,
                                                      country,
                                                      e,
                                                      formattedValue
                                                    ) => handleChange(e)}
                                                    disabled={
                                                      !values.hasWhatsapp
                                                    }
                                                  />
                                                </div>
                                              </div>
                                              {errors.whatsappNum &&
                                                touched.whatsappNum && (
                                                  <p className="t-text-red-500 t-text-f-sm t-mt-f-8">
                                                    {errors.whatsappNum}
                                                  </p>
                                                )}
                                            </div>

                                            <div className="t-mb-f-16">
                                              <div className="t-flex t-items-center t-gap-f-8">
                                                <div className="form-check">
                                                  <label
                                                    htmlFor="hasTwitter"
                                                    className="form-check-label t-hidden t-mb-0"
                                                  >
                                                    Has Twitter
                                                  </label>
                                                  <Field
                                                    type="checkbox"
                                                    id="hasTwitter"
                                                    name="hasTwitter"
                                                    className="form-check-input"
                                                  />
                                                </div>
                                                <div className="t-flex t-items-center t-gap-f-8">
                                                  <label
                                                    htmlFor="twitterHref"
                                                    className="form-label t-min-w-fit t-mb-0"
                                                  >
                                                    Twitter Url:
                                                  </label>
                                                  <Field
                                                    type="url"
                                                    id="twitterHref"
                                                    name="twitterHref"
                                                    className="form-control"
                                                    disabled={
                                                      !values.hasTwitter
                                                    }
                                                  />
                                                </div>
                                              </div>
                                              {errors.twitterHref &&
                                                touched.twitterHref && (
                                                  <p className="t-text-red-500 t-text-f-sm t-mt-f-8">
                                                    {errors.twitterHref}
                                                  </p>
                                                )}
                                            </div>

                                            <div className="t-mb-f-16">
                                              <div className="t-flex t-items-center t-gap-f-8">
                                                <div className="form-check">
                                                  <label
                                                    htmlFor="hasLinkedIn"
                                                    className="form-check-label t-hidden t-mb-0"
                                                  >
                                                    Has LinkedIn
                                                  </label>
                                                  <Field
                                                    type="checkbox"
                                                    id="hasLinkedIn"
                                                    name="hasLinkedIn"
                                                    className="form-check-input"
                                                  />
                                                </div>
                                                <div className="t-flex t-items-center t-gap-f-8">
                                                  <label
                                                    htmlFor="linkedInHref"
                                                    className="form-label t-min-w-fit t-mb-0"
                                                  >
                                                    LinkedIn Url:
                                                  </label>
                                                  <Field
                                                    type="url"
                                                    id="linkedInHref"
                                                    name="linkedInHref"
                                                    className="form-control"
                                                    disabled={
                                                      !values.hasLinkedIn
                                                    }
                                                  />
                                                </div>
                                              </div>
                                              {errors.linkedInHref &&
                                                touched.linkedInHref && (
                                                  <p className="t-text-red-500 t-text-f-sm t-mt-f-8">
                                                    {errors.linkedInHref}
                                                  </p>
                                                )}
                                            </div>

                                            {isErrorUpdatingSocialMedia && (
                                              <p className="t-text-f-sm t-text-red-500 t-bg-red-200 t-py-f-8">
                                                {
                                                  errorUpdatingSocialMedia.message
                                                }
                                              </p>
                                            )}

                                            <button
                                              type="button"
                                              className="f-btn-sm f-btn-primary"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                const {
                                                  facebookHref,
                                                  instagramHref,
                                                  whatsappNum,
                                                  twitterHref,
                                                  linkedInHref,
                                                  hasFacebook,
                                                  hasInstagram,
                                                  hasWhatsapp,
                                                  hasTwitter,
                                                  hasLinkedIn,
                                                } = values;
                                                const socialMedia = [
                                                  {
                                                    title: "Facebook",
                                                    has: hasFacebook,
                                                    href: facebookHref,
                                                  },
                                                  {
                                                    title: "Instagram",
                                                    has: hasInstagram,
                                                    href: instagramHref,
                                                  },
                                                  {
                                                    title: "Whatsapp",
                                                    has: hasWhatsapp,
                                                    href: whatsappNum,
                                                  },
                                                  {
                                                    title: "Twitter",
                                                    has: hasTwitter,
                                                    href: twitterHref,
                                                  },
                                                  {
                                                    title: "LinkedIn",
                                                    has: hasLinkedIn,
                                                    href: linkedInHref,
                                                  },
                                                ];
                                                updateSocialMedias(socialMedia);
                                              }}
                                            >
                                              {isUpdatingSocialMedias
                                                ? "Saving..."
                                                : "Save"}
                                            </button>
                                          </Form>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </ul>
                              </>
                            );
                          }}
                        </Formik>
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
                          disabled={isUserUpdating || isSubmitting}
                          className={`f-btn-md f-btn-primary t-px-f-56${
                            isUserUpdating || isSubmitting
                              ? " t-cursor-not-allowed"
                              : ""
                          }`}
                          onClick={async (e) => {
                            e.preventDefault();
                            setSubmitting(true);
                            const {
                              fileBannerImage,
                              fileProfilePic,
                              ...newValues
                            } = values;
                            const newBannerImage = await uploadFile(
                              "users",
                              fileBannerImage,
                              "banner-image"
                            );
                            const newProfilePic = await uploadFile(
                              "users",
                              fileProfilePic,
                              "profile-pic"
                            );
                            setSubmitting(false);
                            updateUser({
                              ...newValues,
                              bannerImage: newBannerImage || profilePic,
                              profilePic: newProfilePic || profilePic,
                            });
                          }}
                        >
                          {isUserUpdating || isSubmitting
                            ? "Updating..."
                            : "Save"}
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="f-btn-md f-btn-primary-outline t-px-f-56"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsEditing(true);
                          }}
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  </Form>
                </div>

                {/* right side */}
                <div className="t-flex t-flex-col t-justify-between t-py-f-48">
                  {/* status container */}
                  {/* <div className=" t-flex t-flex-col t-gap-f-24 t-border-f-secondary-95 t-shadow-xl t-border-2 t-p-f-16 t-rounded-f-8"> */}
                  {/* <h6 className="t-text-f-xl">Status</h6> */}
                  {/* status card container */}
                  {/* <div className="t-flex t-gap-f-24">
              {status.map(({ title, num }, idx) => (
                <div
                  key={idx}
                  className="t-flex t-flex-col t-gap-f-8 t-p-f-24 t-bg-f-secondary-70 t-rounded-f-8"
                >
                  <span className="t-text-f-2xl">{num}</span>
                  <span className="">{title}</span>
                </div>
              ))}
            </div> */}
                  {/* <button type="button" className="f-btn-md f-btn-secondary">
              View Progress
            </button> */}
                  {/* </div> */}

                  {/* buttons container */}
                  <div className="t-flex t-flex-col t-gap-f-24 t-px-f-96 t-text-center">
                    <div className="t-flex t-flex-col t-gap-f-4">
                      <Link
                        className={`f-btn-md f-btn-primary-outline ${
                          !card
                            ? "t-cursor-not-allowed t-pointer-events-none"
                            : ""
                        }`}
                        to="/nfc/creation/digital-profile/template"
                      >
                        {profile
                          ? "Customize Digital Profile"
                          : "Create Digital Profile"}
                      </Link>
                      {!card && (
                        <small className="t-block t-text-start">
                          You can create digital profile only after creating a
                          card.
                        </small>
                      )}
                    </div>

                    {!card && (
                      <Link
                        className="f-btn-md f-btn-primary"
                        to="/nfc/creation/physical-card"
                      >
                        Create your own fabtap
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default General;
