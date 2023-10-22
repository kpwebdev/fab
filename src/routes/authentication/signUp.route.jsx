import { Link } from "react-router-dom";
import { Formik, Field } from "formik";
import { signUpSchema } from "../../schema";
import { useSignUp } from "../../hooks/useSignUp.hook";

const FORM_INITIAL_VALUE = {
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const { signUpFunc, isLoading, data, error } = useSignUp();
  console.log("signUpFunc-signUp", signUpFunc);
  console.log("isLoading-signUp", isLoading);
  console.log("data-signUp", data);
  console.log("error-signUp", error);

  return (
    <div className="t-flex t-flex-col t-gap-f-32 t-text-f-md">
      <header>
        <h2 className="t-text-f-4xl">Welcome back!</h2>
        <h3 className="t-text-f-md">Let's get started!</h3>
      </header>
      {/* formik form starts */}
      <Formik
        initialValues={FORM_INITIAL_VALUE}
        validationSchema={signUpSchema}
        onSubmit={(values) => {
          const { email, password } = values;
          signUpFunc(email, password);
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

          console.log("formik", formik);
          return (
            <form
              onSubmit={handleSubmit}
              className="t-flex t-flex-col t-gap-f-24"
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
                  className={`f-btn-lg f-btn-primary t-text-center${
                    isLoading ? " t-cursor-not-allowed t-bg-f-primary-20" : ""
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? "Creating an account..." : "Create Account"}
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
                  className={`f-btn-lg f-btn-primary-outline${
                    isLoading ? " t-cursor-not-allowed" : ""
                  }`}
                  disabled={isLoading}
                >
                  Login with Google
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
      <p>
        Already part of our family?{" "}
        <Link to="/nfc/authentication/login" className="t-text-f-primary-30">
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
