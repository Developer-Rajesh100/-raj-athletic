import React from "react";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Banner from "./Banner/Banner";
import Data from "./Cart/Data";
import NavBar from "./NavBar/NavBar";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Data></Data>
    </div>
  );
};

export default Home;
