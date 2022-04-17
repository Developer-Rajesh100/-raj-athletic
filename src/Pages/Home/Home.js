import React from "react";
import Banner from "./Banner/Banner";
import Cart from "./Cart/Cart";
import NavBar from "./NavBar/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Cart></Cart>
    </div>
  );
};

export default Home;
