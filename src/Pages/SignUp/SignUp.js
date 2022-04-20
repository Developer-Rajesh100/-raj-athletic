import React, { useRef } from "react";
import "./SignUp.css";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase.Init";
import { sendEmailVerification } from "firebase/auth";

// const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

const SignUp = () => {
  const nameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  let navigate = useNavigate();
  let location = useLocation();
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  let from = location.state?.from?.pathname || "/";

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const handleSubmit = (event) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    event.preventDefault();
    createUserWithEmailAndPassword(email, password).then(() => {
      verifyEmail();
    });
  };
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {});
  };
  return (
    <div className="form-container d-flex flex-column justify-content-center">
      <h1 className="titl">Sign Up</h1>
      <form>
        <label htmlFor="name">
          <input
            ref={nameRef}
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
            ref={emailRef}
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
            ref={passwordRef}
            className="inp form-control"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
        </label>
        <br />

        <p>
          <Link className="text-decoration-none text-primary" to="/login">
            Sign In
          </Link>{" "}
        </p>
        <div>
          <input
            onClick={handleSubmit}
            className="signInBtn px-3"
            type="button"
            value="Sign Up"
          />

          <button onClick={() => signInWithGoogle()} className="btn">
            <img src="https://i.ibb.co/0ydWNnY/google-Logo-1.png" alt="" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
