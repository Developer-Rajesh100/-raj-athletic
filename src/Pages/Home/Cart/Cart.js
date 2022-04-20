import React from "react";
import { Link } from "react-router-dom";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import "./Cart.css";
const Cart = ({ data }) => {
  const { img, service, fee, description } = data;
  return (
    <div className="">
      <div className="cart">
        <div className="singel-cart">
          <img className="cart-image" src={img} alt="" />
          <p>
            {" "}
            <strong> Event: </strong> <i>{service}</i>{" "}
          </p>
          <p>
            {" "}
            <strong>Fees: </strong> <i>${fee}</i>
            <strong> /Month</strong>{" "}
          </p>
          <p>
            {" "}
            <small>{description} </small>{" "}
          </p>
          <Link to="/private">
            <button className="cart-btn px-4 py-1">Contract</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
