import { useState } from "react";
import { Link } from "react-router-dom";

const FORM_INITIAL_VALUE = {
  email: "",
  password: "",
  confirmPassword: "",
  rememberMe: false,
};

const SignUp = () => {
  const [formInputs, setFormInputs] = useState(FORM_INITIAL_VALUE);
  const { email, password, confirmPassword, rememberMe } = formInputs;

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (e.target.type === "checkbox") {
      const checked = e.target.checked;
      setFormInputs({ ...formInputs, [name]: checked });
    } else {
      setFormInputs({ ...formInputs, [name]: value });
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("formInputs", formInputs);
    console.log("Submitted the form");
  };

  return (
    <div className="t-flex t-flex-col t-gap-f-32 t-text-f-md">
      <header>
        <h2 className="t-text-f-4xl">Welcome back!</h2>
        <h3 className="t-text-f-md">Let's get started!</h3>
      </header>
      <form onSubmit={onSubmitHandler} className="t-flex t-flex-col t-gap-f-24">
        {/* email container */}
        <div>
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
        </div>

        {/* password container */}
        <div>
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
        </div>

        {/* confirm password container */}
        <div>
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
        </div>

        {/* remember me and forgot password container */}
        <div>
          {/* remember me container */}
          <div className="form-check t-flex t-items-center t-gap-f-8">
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
          </div>
        </div>

        {/* buttons container */}
        <div className="t-flex t-flex-col t-gap-f-16">
          <Link className="f-btn-lg f-btn-primary t-text-center">
            Create Account
          </Link>
          {/* divider */}
          <div className="t-flex t-gap-f-24 t-items-center">
            {/* left line */}
            <div className="t-h-f-2 t-grow t-bg-f-primary-20"></div>
            <span>or</span>
            {/* right line */}
            <div className="t-h-f-2 t-grow t-bg-f-primary-20"></div>
          </div>
          <button type="button" className="f-btn-lg f-btn-primary-outline">
            Login with Google
          </button>
        </div>
      </form>

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
