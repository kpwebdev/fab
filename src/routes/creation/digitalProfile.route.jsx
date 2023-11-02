import { useContext, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getUser,
  updateProfileDetails,
  uploadDataUrlImage,
  uploadFile,
} from "../../utils/firebase/firebase.util";

import DigitalProfileTemplate1 from "../../components/creation/digitalProfileTemplate1.component";
import DigitalProfileTemplate2 from "../../components/creation/digitalProfileTemplate2.component";
import DigitalProfileTemplate3 from "../../components/creation/digitalProfileTemplate3.component";
import { ProfileContext } from "../../contexts/ProfileProvider.context";
import { Formik, Form, Field } from "formik";
import { toast } from "react-toastify";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";

const DigitalProfile = () => {
  const { profileTemplate } = useContext(ProfileContext);
  const navigate = useNavigate();
  const { name, colors } = profileTemplate;

  const { data, isError, error, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  const {
    mutate: updateProfile,
    isError: isErrorUpdatingProfile,
    error: errorUpdatingProfile,
    isPending: isUpdatingProfile,
  } = useMutation({
    mutationFn: updateProfileDetails,
    onSuccess: () => {
      toast.success("Saved Profile details successfully");
      navigate(`/profiles/${data.userName}`);
    },
    onError: () =>
      toast.error("Something went wrong. Please contact web admin"),
  });

  if (isPending) {
    return (
      <div className="t-flex t-justify-center t-my-f-24">
        <span className="custom-loader"></span>
      </div>
    );
  }

  if (name === "template-1") {
    return (
      <Formik
        initialValues={{ ...colors }}
        onSubmit={async (values) => {
          updateProfile({
            ...profileTemplate,
            colors: values,
          });
        }}
      >
        {({ values }) => {
          const {
            bodyTextColor,
            themeColor,
            metaBandBgColor,
            metaRoleTextColor,
            metaUserNameColor,
            metaFullNameColor,
            grayTextColor,
          } = values;
          return (
            <>
              <DigitalProfileTemplate1
                data={data}
                colors={{
                  bodyTextColor,
                  themeColor,
                  metaBandBgColor,
                  metaRoleTextColor,
                  metaUserNameColor,
                  metaFullNameColor,
                  grayTextColor,
                }}
              />
              <Form className="t-max-w-[450px] t-mx-auto t-flex t-items-center t-justify-between t-gap-f-8 t-mb-f-16 t-p-f-8 t-rounded-f-8 t-shadow-lg">
                <div className="t-flex t-gap-f-8 t-flex-wrap">
                  <Field
                    type="color"
                    className="form-control form-control-color"
                    id="bodyTextColor"
                    name="bodyTextColor"
                  />
                  <Field
                    type="color"
                    className="form-control form-control-color"
                    id="themeColor"
                    name="themeColor"
                  />
                  <Field
                    type="color"
                    className="form-control form-control-color"
                    id="metaBandBgColor"
                    name="metaBandBgColor"
                  />
                  <Field
                    type="color"
                    className="form-control form-control-color"
                    id="metaRoleTextColor"
                    name="metaRoleTextColor"
                  />
                  <Field
                    type="color"
                    className="form-control form-control-color"
                    id="metaUserNameColor"
                    name="metaUserNameColor"
                  />
                  <Field
                    type="color"
                    className="form-control form-control-color"
                    id="grayTextColor"
                    name="grayTextColor"
                  />
                </div>
                <button
                  type="submit"
                  className={`f-btn-sm f-btn-primary${
                    isUpdatingProfile ? " t-cursor-not-allowed" : ""
                  }`}
                  disabled={isUpdatingProfile}
                >
                  {isUpdatingProfile ? "Saving..." : "Save"}
                </button>
              </Form>
            </>
          );
        }}
      </Formik>
    );
  }

  if (name === "template-2") {
    return (
      <Formik
        initialValues={{ ...colors }}
        onSubmit={async (values) => {
          updateProfile({
            ...profileTemplate,
            colors: values,
          });
        }}
      >
        {({ values }) => {
          const {
            bodyTextColor,
            themeColor,
            metaBandBgColor,
            metaRoleTextColor,
            metaUserNameColor,
            metaFullNameColor,
            grayTextColor,
          } = values;
          return (
            <>
              <DigitalProfileTemplate2
                data={data}
                colors={{
                  bodyTextColor,
                  themeColor,
                  metaBandBgColor,
                  metaRoleTextColor,
                  metaUserNameColor,
                  metaFullNameColor,
                  grayTextColor,
                }}
              />
              <Form className="t-max-w-[450px] t-mx-auto t-flex t-items-center t-justify-between t-gap-f-8 t-mb-f-16 t-p-f-8 t-rounded-f-8 t-shadow-lg">
                <div className="t-flex t-gap-f-8 t-flex-wrap">
                  <Field
                    type="color"
                    className="form-control form-control-color"
                    id="bodyTextColor"
                    name="bodyTextColor"
                  />
                  <Field
                    type="color"
                    className="form-control form-control-color"
                    id="themeColor"
                    name="themeColor"
                  />
                  <Field
                    type="color"
                    className="form-control form-control-color"
                    id="metaBandBgColor"
                    name="metaBandBgColor"
                  />
                  <Field
                    type="color"
                    className="form-control form-control-color"
                    id="metaFullNameColor"
                    name="metaFullNameColor"
                  />
                  <Field
                    type="color"
                    className="form-control form-control-color"
                    id="grayTextColor"
                    name="grayTextColor"
                  />
                </div>
                <button
                  type="submit"
                  className={`f-btn-sm f-btn-primary${
                    isUpdatingProfile ? " t-cursor-not-allowed" : ""
                  }`}
                  disabled={isUpdatingProfile}
                >
                  {isUpdatingProfile ? "Saving..." : "Save"}
                </button>
              </Form>
            </>
          );
        }}
      </Formik>
    );
  }

  if (name === "template-3") {
    return (
      <Formik
        initialValues={{ ...colors }}
        onSubmit={async (values) => {
          updateProfile({
            ...profileTemplate,
            colors: values,
          });
        }}
      >
        {({ values }) => {
          const {
            bodyTextColor,
            themeColor,
            metaBandBgColor,
            metaRoleTextColor,
            metaUserNameColor,
            metaFullNameColor,
            grayTextColor,
          } = values;
          return (
            <>
              <DigitalProfileTemplate3
                data={data}
                colors={{
                  bodyTextColor,
                  themeColor,
                  metaBandBgColor,
                  metaRoleTextColor,
                  metaUserNameColor,
                  metaFullNameColor,
                  grayTextColor,
                }}
              />
              <Form className="t-max-w-[450px] t-mx-auto t-flex t-items-center t-justify-between t-gap-f-8 t-mb-f-16 t-p-f-8 t-rounded-f-8 t-shadow-lg">
                <div className="t-flex t-gap-f-8 t-flex-wrap">
                  <Field
                    type="color"
                    className="form-control form-control-color"
                    id="bodyTextColor"
                    name="bodyTextColor"
                  />
                  <Field
                    type="color"
                    className="form-control form-control-color"
                    id="themeColor"
                    name="themeColor"
                  />
                  <Field
                    type="color"
                    className="form-control form-control-color"
                    id="metaBandBgColor"
                    name="metaBandBgColor"
                  />
                  <Field
                    type="color"
                    className="form-control form-control-color"
                    id="grayTextColor"
                    name="grayTextColor"
                  />
                </div>
                <button
                  type="submit"
                  className={`f-btn-sm f-btn-primary${
                    isUpdatingProfile ? " t-cursor-not-allowed" : ""
                  }`}
                  disabled={isUpdatingProfile}
                >
                  {isUpdatingProfile ? "Saving..." : "Save"}
                </button>
              </Form>
            </>
          );
        }}
      </Formik>
    );
  }
};

export default DigitalProfile;
