import React from "react";
import "./SignIn.css";
// import google from "../../Images/signInSignUp/googleLogo (1).png";
// import facebook from "../../Images/signInSignUp/Facebook-Logo (1).pnggoogleLogo (1).png";
const SignIn = () => {
  return (
    <div className="cont d-flex flex-column justify-content-center">
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
        <div>
          <input className="signInBtn px-3" type="button" value="Sign In" />
          <a href="">
            <img src="https://i.ibb.co/0ydWNnY/google-Logo-1.png" alt="" />
          </a>
          <a href="">
            <img
              className="facebook-icon"
              src="https://i.ibb.co/Rj85LRS/Facebook-Logo-1.png"
              alt=""
            />
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
