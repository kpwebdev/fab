import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Field } from "formik";
import { logInSchema } from "../../schema";
import { useSignIn } from "../../hooks/useSignIn.hook";
import { useGoogleSignIn } from "../../hooks/useGoogleSignIn.hook";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  signInWithEmail,
  signInWithGoogle,
} from "../../utils/firebase/firebase.util";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider.context";
import { APIContext } from "../../contexts/APIProvider.context";
import { auth } from "../../utils/firebase/firebase.util";

const FORM_INITIAL_VALUE = {
  email: "",
  password: "",
};

const Login = () => {
  const queryClient = useQueryClient();
  const { currentUser } = useContext(AuthContext);
  const { webAdminEmail } = useContext(APIContext);
  const navigate = useNavigate();
  const { mutate: signInFunc, isPending, error, data } = useMutation({
    mutationFn: signInWithEmail,
    onSuccess: () => {
      toast.success("Successfully loggedIn.");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      if (auth.currentUser.email === webAdminEmail) {
        navigate("/web-admin");
      } else {
        navigate("/nfc/dashboard");
      }
    },
    onError: () => {
      toast.error("Something went wrong. Please contact admin for support.");
    },
  });

  const {
    isPending: googleLoading,
    error: googleError,
    data: googleData,
    mutate: googleSignInFunc,
  } = useMutation({
    mutationFn: signInWithGoogle,
    onSuccess: () => {
      toast.success("Successfully logged in with google.");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      navigate("/nfc/dashboard");
    },
    onError: () => {
      toast.error("Something went wrong. Please contact admin for support.");
    },
  });

  // const { isLoading, error, data, signInFunc } = useSignIn();
  // const {
  //   isLoading: googleLoading,
  //   error: googleError,
  //   data: googleData,
  //   googleSignInFunc,
  // } = useGoogleSignIn();

  return (
    <div className="t-flex t-flex-col xl:t-items-start t-gap-f-16 md:t-gap-f-32 t-text-f-md">
      <header className="t-text-center xl:t-text-start">
        <h2 className="t-text-f-l md:t-text-f-xl lg:t-text-f-3xl xl:t-text-f-4xl">
          Welcome back!
        </h2>
        <h3 className="t-text-f-base lg:t-text-f-md">Your Platform awaits.</h3>
      </header>
      <div className="xl:t-min-w-[400px]">
        <Formik
          initialValues={FORM_INITIAL_VALUE}
          validationSchema={logInSchema}
          onSubmit={(values) => {
            const { email, password } = values;
            signInFunc({ email, password });
          }}
        >
          {(formik) => (
            <form
              onSubmit={formik.handleSubmit}
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
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  required
                  className="form-control form-control-lg"
                />
                {formik.errors.email && formik.touched.email && (
                  <p className="t-text-red-500 t-text-f-xs t-mt-f-8">
                    {formik.errors.email}
                  </p>
                )}
              </div>

              {/* password container */}
              <div>
                <label htmlFor="email" className="t-mb-f-8">
                  Password*
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  required
                  className="form-control form-control-lg"
                />
                {formik.errors.password && formik.touched.password && (
                  <p className="t-text-red-500 t-text-f-xs t-mt-f-8">
                    {formik.errors.password}
                  </p>
                )}
              </div>

              {/* remember me and forgot password container */}
              {/* <div> */}
              {/* remember me container */}
              {/* <div className="form-check">
                <Field
                  className="form-check-input"
                  type="checkbox"
                  value="yes"
                  id="rememberMe"
                  name="rememberMe"
                  onChange={formik.handleChange}
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember Me
                </label>
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
                    isPending || googleLoading ? " t-cursor-not-allowed" : ""
                  }`}
                  disabled={isPending || googleLoading}
                >
                  {isPending ? "Logging in..." : "Login"}
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
                    isPending || googleLoading ? " t-cursor-not-allowed" : ""
                  }`}
                  disabled={isPending || googleLoading}
                  onClick={googleSignInFunc}
                >
                  {googleLoading
                    ? "Logging with google..."
                    : "Login with Google"}
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>

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
          <label htmlFor="email" className="t-mb-f-8">
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

      {/* remember me and forgot password container */}
      {/* <div> */}
      {/* remember me container */}
      {/* <div className="form-check">
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
      {/* <div className="t-flex t-flex-col t-gap-f-16"> */}
      {/* <Link className="f-btn-lg f-btn-primary t-text-center">Login</Link> */}
      {/* divider */}
      {/* <div className="t-flex t-gap-f-24 t-items-center"> */}
      {/* left line */}
      {/* <div className="t-h-f-2 t-grow t-bg-f-primary-20"></div>
            <span>or</span> */}
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
        Newbie? Your account is just a{" "}
        <Link to="/nfc/authentication/sign-up" className="t-text-f-primary-30">
          sign-up
        </Link>{" "}
        away!
      </p>
    </div>
  );
};

export default Login;
