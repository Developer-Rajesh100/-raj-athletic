import React from "react";
import "./SignUp.css";
const SignUp = () => {
  return (
    <div className="con d-flex flex-column justify-content-center mt-5">
      <h1 className="title">Sign Up</h1>
      <form>
        <label htmlFor="name">
          <input
            className="inp form-control"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </label>
        <br />
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
        <input className="signUpBtn px-3" type="button" value="Sign Up" />
      </form>
    </div>
  );
};

export default SignUp;
