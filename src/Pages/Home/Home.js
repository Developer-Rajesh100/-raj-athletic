import React from "react";
// import SignIn from "../SignIn/SignIn";
import Banner from "./Banner/Banner";
import Cart from "./Cart/Cart";
import NavBar from "./NavBar/NavBar";

const Home = () => {
  return (
    <div>
      {/* <NavBar></NavBar> */}
      <Banner></Banner>
      <Cart></Cart>
      {/* <SignIn></SignIn> */}
    </div>
  );
};

export default Home;
