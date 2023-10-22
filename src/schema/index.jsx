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
