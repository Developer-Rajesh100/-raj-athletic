import React from "react";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
// import SignIn from "../SignIn/SignIn";
import Banner from "./Banner/Banner";
// import Cart from "./Cart/Cart";
import Data from "./Cart/Data";
import NavBar from "./NavBar/NavBar";

const Home = () => {
  return (
    <div>
      {/* <NavBar></NavBar> */}
      <Banner></Banner>
      <Data></Data>
      <PrivateRoute></PrivateRoute>
      {/* <SignIn></SignIn> */}
    </div>
  );
};

export default Home;
