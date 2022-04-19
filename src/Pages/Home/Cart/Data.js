import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import "./data.css";
const Data = () => {
  const [Datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("CartData.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  return (
    <div>
      <h1 className="title">Service</h1>
      <div className="container main-container">
        {Datas.map((data) => (
          <Cart key={data.id} data={data}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Data;
