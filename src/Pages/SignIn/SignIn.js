import React from "react";
import "./SignIn.css";
const SignIn = () => {
  return (
    <div className="cont d-flex flex-column  justify-content-center mt-5">
      <h1 className="title">Sign In</h1>
      <form>
        <label htmlFor="email">
          <input
            className="inp form-control"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </label>
        <br />
        <label htmlFor="password">
          <input
            className="inp form-control"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
        </label>
        <br />
        <input className="signInBtn px-3" type="button" value="Sign In" />
      </form>
    </div>
  );
};

export default SignIn;
