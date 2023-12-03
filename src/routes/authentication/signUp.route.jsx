import { Link, useNavigate } from "react-router-dom";
import { Formik, Field } from "formik";
import { signUpSchema } from "../../schema";
import { useSignUp } from "../../hooks/useSignUp.hook";
import { useMutation } from "@tanstack/react-query";
import {
  addDocument,
  signInWithGoogle,
  signUp,
  addUser,
} from "../../utils/firebase/firebase.util";
import { toast } from "react-toastify";
import { defaultUserTestData } from "../../data";

const FORM_INITIAL_VALUE = {
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const navigate = useNavigate();
  const {
    mutate: initiateUser,
    isError: isErrorInitiatingUser,
    error: errorInitiatingUser,
    isPending: isInitiatingUser,
  } = useMutation({
    mutationFn: addUser,
    onError: () => {
      toast.error(`Something went wrong: ${errorInitiatingUser.message}`);
      console.log(errorInitiatingUser);
    },
    onSuccess: () => {
      navigate("/nfc/dashboard");
      toast.success("User initiated successfully!");
    },
  });
  const { isPending, error, isError, mutate: signUpFunc, data } = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      initiateUser(defaultUserTestData);
      toast.success("Successfully registered");
    },
    onError: () =>
      toast.error("Something went wrong. Please contact web admin."),
  });

  const {
    isPending: googleLoading,
    error: googleError,
    data: googleData,
    mutate: googleSignInFunc,
  } = useMutation({
    mutationFn: signInWithGoogle,
    onSuccess: () => {
      initiateUser(defaultUserTestData);
      toast.success("Successfully logged in with google.");
    },
    onError: () => {
      toast.error("Something went wrong. Please contact admin for support.");
    },
  });

  // const { signUpFunc, isPending, data, error, } = useSignUp();

  return (
    <div className="t-flex t-flex-col xl:t-items-start t-gap-f-16 md:t-gap-f-32 t-text-f-md">
      <header className="t-text-center xl:t-text-start">
        <h2 className="t-text-f-l md:t-text-f-xl lg:t-text-f-3xl xl:t-text-f-4xl">
          Welcome back!
        </h2>
        <h3 className="t-text-f-base lg:t-text-f-md">Let's get started!</h3>
      </header>
      {/* formik form starts */}
      <Formik
        initialValues={FORM_INITIAL_VALUE}
        validationSchema={signUpSchema}
        onSubmit={(values) => {
          const { email, password } = values;
          signUpFunc({ email, password });
        }}
      >
        {(formik) => {
          const {
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
          } = formik;
          const { email, password, confirmPassword, rememberMe } = values;

          return (
            <form
              onSubmit={handleSubmit}
              className="t-flex t-flex-col t-gap-f-24 t-text-f-base md:t-text-f-md"
            >
              {/* email container */}
              <div>
                <label htmlFor="email" className="t-mb-f-8">
                  Email*
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                  className="form-control form-control-lg"
                />
                {errors.email && touched.email && (
                  <p className="t-text-red-500 t-text-f-xs t-mt-f-8">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* password container */}
              <div>
                <label htmlFor="password" className="t-mb-f-8">
                  Password*
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  required
                  className="form-control form-control-lg"
                />
                {errors.password && touched.password && (
                  <p className="t-text-red-500 t-text-f-xs t-mt-f-8">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* confirm password container */}
              <div>
                <label htmlFor="confirmPassword" className="t-mb-f-8">
                  Confirm Password*
                </label>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                  required
                  className="form-control form-control-lg"
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <p className="t-text-red-500 t-text-f-xs t-mt-f-8">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* remember me and forgot password container */}
              {/* <div> */}
              {/* remember me container */}
              {/* <div className="form-check t-flex t-items-center t-gap-f-8">
                  <Field
                    className="form-check-input"
                    type="checkbox"
                    value="yes"
                    id="rememberMe"
                    name="rememberMe"
                    checked={rememberMe}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember Me
                  </label>
                  {errors.email && touched.email && (
                    <p className="t-text-red-500 t-text-f-xs t-mt-f-8">
                      {errors.email}
                    </p>
                  )}
                </div> */}
              {/* </div> */}

              {error && (
                <p className="t-text-red-500 t-bg-red-100 t-py-f-8 t-px-f-2">
                  {error.message}
                </p>
              )}

              {/* buttons container */}
              <div className="t-flex t-flex-col t-gap-f-16">
                <button
                  type="submit"
                  className={`f-btn-md md:f-btn-lg f-btn-primary t-text-center${
                    isPending || googleLoading || isInitiatingUser
                      ? " t-cursor-not-allowed t-bg-f-primary-20"
                      : ""
                  }`}
                  disabled={isPending || googleLoading || isInitiatingUser}
                >
                  {isPending ? "Creating an account..." : "Create Account"}
                </button>
                {/* divider */}
                <div className="t-flex t-gap-f-24 t-items-center">
                  {/* left line */}
                  <div className="t-h-f-2 t-grow t-bg-f-primary-20"></div>
                  <span>or</span>
                  {/* right line */}
                  <div className="t-h-f-2 t-grow t-bg-f-primary-20"></div>
                </div>
                <button
                  type="button"
                  className={`f-btn-md md:f-btn-lg f-btn-primary-outline${
                    isPending || googleLoading || isInitiatingUser
                      ? " t-cursor-not-allowed t-bg-f-primary-20"
                      : ""
                  }`}
                  disabled={isPending || googleLoading || isInitiatingUser}
                  onClick={googleSignInFunc}
                >
                  {googleLoading ? "Logging with Google" : "Login with Google"}
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
      {/* formik form ends */}
      {/* old form */}
      {/* <form onSubmit={onSubmitHandler} className="t-flex t-flex-col t-gap-f-24"> */}
      {/* email container */}
      {/* <div>
          <label htmlFor="email" className="t-mb-f-8">
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChangeHandler}
            required
            className="form-control form-control-lg"
          />
        </div> */}

      {/* password container */}
      {/* <div>
          <label htmlFor="password" className="t-mb-f-8">
            Password*
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChangeHandler}
            required
            className="form-control form-control-lg"
          />
        </div> */}

      {/* confirm password container */}
      {/* <div>
          <label htmlFor="confirmPassword" className="t-mb-f-8">
            Confirm Password*
          </label>
          <input
            type="confirmPassword"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChangeHandler}
            required
            className="form-control form-control-lg"
          />
        </div> */}

      {/* remember me and forgot password container */}
      {/* <div> */}
      {/* remember me container */}
      {/* <div className="form-check t-flex t-items-center t-gap-f-8">
            <input
              className="form-check-input"
              type="checkbox"
              value="yes"
              id="rememberMe"
              name="rememberMe"
              checked={rememberMe}
              onChange={onChangeHandler}
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember Me
            </label>
          </div> */}
      {/* </div> */}

      {/* buttons container */}
      {/* <div className="t-flex t-flex-col t-gap-f-16">
          <Link className="f-btn-lg f-btn-primary t-text-center">
            Create Account
          </Link> */}
      {/* divider */}
      {/* <div className="t-flex t-gap-f-24 t-items-center"> */}
      {/* left line */}
      {/* <div className="t-h-f-2 t-grow t-bg-f-primary-20"></div> */}
      {/* <span>or</span> */}
      {/* right line */}
      {/* <div className="t-h-f-2 t-grow t-bg-f-primary-20"></div> */}
      {/* </div> */}
      {/* <button type="button" className="f-btn-lg f-btn-primary-outline">
            Login with Google
          </button> */}
      {/* </div> */}
      {/* </form> */}

      {/* alternate option */}
      <p className="t-text-f-sm sm:t-text-f-base">
        Already part of our family?{" "}
        <Link to="/nfc/authentication/login" className="t-text-f-primary-30">
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
