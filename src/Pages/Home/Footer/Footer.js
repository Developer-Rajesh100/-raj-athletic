import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div fixed="bottom">
      <footer>
        <p className="background text-center">
          {" "}
          <strong>&#169; {new Date().getFullYear()}</strong>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
