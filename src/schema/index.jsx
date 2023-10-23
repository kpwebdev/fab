import * as Yup from "yup";
import "yup-phone-lite";

export const logInSchema = Yup.object({
  email: Yup.string()
    .email()
    .required("Please enter your email"),
  password: Yup.string()
    .min(8)
    .required("Please enter a password"),
});

export const signUpSchema = Yup.object({
  email: Yup.string()
    .email()
    .required("Please enter an email"),
  password: Yup.string()
    .min(8)
    .required("Please enter a password"),
  confirmPassword: Yup.string()
    .required("Please confirm the password")
    .oneOf([Yup.ref("password"), null], "Password is not matching"),
});

export const userFormSchema = Yup.object({
  userName: Yup.string().required("Please enter an username."),
  fullName: Yup.string().required("Please enter a full name."),
  companyName: Yup.string().required("Please enter a company name."),
  role: Yup.string().required("Please enter your role."),
  website: Yup.string(),
  contact: Yup.string()
    .min(10, "KP wants it at leat 10 digits.")
    .required("Please enter a contact number."),
});

export const contactFormSchema = Yup.object({
  favorite: Yup.boolean(),
  name: Yup.string().required("Please enter a number"),
  mobileNum: Yup.string().required("Please enter a number"),
  emailId: Yup.string()
    .email("Please enter a valid email.")
    .required("Please enter an email"),
});

export const socialMediaSchema = Yup.object({
  hasFacebook: Yup.boolean(),
  facebookHref: Yup.string().when("hasFacebook", {
    is: true,
    then: () =>
      Yup.string()
        .required("Please enter a facebook profile link.")
        .url("Please enter a valid url"),
  }),
  hasInstagram: Yup.boolean(),
  instagramHref: Yup.string().when("hasInstagram", {
    is: true,
    then: () =>
      Yup.string()
        .required("Please enter an instagram profile link.")
        .url("Please enter a valid url"),
  }),
  hasWhatsapp: Yup.boolean(),
  whatsappNum: Yup.string().when("hasWhatsapp", {
    is: true,
    then: () =>
      Yup.string()
        .required("Please enter a whatsapp number.")
        .url("Please enter a valid url"),
  }),
  hasTwitter: Yup.boolean(),
  twitterHref: Yup.string().when("hasTwitter", {
    is: true,
    then: () =>
      Yup.string()
        .required("Please enter a twitter profile link.")
        .url("Please enter a valid url"),
  }),
  hasLinkedIn: Yup.boolean(),
  linkedInHref: Yup.string().when("hasLinkedIn", {
    is: true,
    then: () =>
      Yup.string()
        .required("Please enter a linkedIn profile link.")
        .url("Please enter a valid url"),
  }),
});
