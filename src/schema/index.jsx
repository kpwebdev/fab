import * as Yup from "yup";

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
