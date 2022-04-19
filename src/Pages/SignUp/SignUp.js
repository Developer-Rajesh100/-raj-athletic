import React from "react";
import "./SignUp.css";
const SignUp = () => {
  return (
    <div className="con d-flex flex-column justify-content-center">
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

export default SignUp;
