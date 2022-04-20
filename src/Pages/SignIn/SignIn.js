import React, { useRef, useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase.Init";
import "./SignIn.css";

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const passwordRef = useRef();
  const emailRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

  const handleSubmit = (event) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="cont d-flex flex-column justify-content-center">
      <h1 className="title">Sign In</h1>
      <form onSubmit={handleSubmit}>
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
        <Link className="text-decoration-none text-primary" to="/signup">
          Creat Account
        </Link>
        <div>
          <input
            onClick={handleSubmit}
            className="signInBtn px-3"
            type="button"
            value="Sign In"
          />
          <button className="btn" onClick={() => signInWithGoogle()}>
            <img src="https://i.ibb.co/0ydWNnY/google-Logo-1.png" alt="" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
