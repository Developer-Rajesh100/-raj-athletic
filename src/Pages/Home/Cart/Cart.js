import React from "react";
import "./Cart.css";
// import sprint from "../../../Images/Cart Img/sprint.jpeg";
// import highJump from "../../../Images/Cart Img/high-jump.jpg";
// import hurdles from "../../../Images/Cart Img/hurdles.png";
// import javelinThrow from "../../../Images/Cart Img/javelin-throw.jpg";
// import longJump from "../../../Images/Cart Img/long-jump.jpg";
// import poalVolt from "../../../Images/Cart Img/poal-volt.jpg";
const Cart = (props) => {
  const [key, photo, service, fee] = props;
  return (
    <div className="container">
      <div>
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

export default Cart;
