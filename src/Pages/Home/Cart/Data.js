import React from "react";
import sprint from "../../../Images/Cart Img/sprint.jpeg";
import highJump from "../../../Images/Cart Img/high-jump.jpg";
import hurdles from "../../../Images/Cart Img/hurdles.png";
import javelinThrow from "../../../Images/Cart Img/javelin-throw.jpg";
import longJump from "../../../Images/Cart Img/long-jump.jpg";
import poalVolt from "../../../Images/Cart Img/poal-volt.jpg";
import Cart from "./Cart";
const Data = () => {
  const Data = [
    {
      id: 1,
      img: { sprint },
      service: "Sprint",
      fee: 300,
      description: "",
    },
    {
      id: 2,
      img: { highJump },
      service: "High Jump",
      fee: 370,
      description: "",
    },
    {
      id: 3,
      img: { hurdles },
      service: "Hurdles",
      fee: 350,
      description: "",
    },
    {
      id: 4,
      img: { javelinThrow },
      service: "Javelin Throw",
      fee: 360,
      description: "",
    },
    {
      id: 5,
      img: { longJump },
      service: "Long Jump",
      fee: 330,
      description: "",
    },
    {
      id: 6,
      img: { poalVolt },
      service: "Poal Volt",
      fee: 390,
      description: "",
    },
  ];
  //   const [id, img, service, fee] = Data;
  return (
    <div>
      {Data.map((Data) => (
        <Cart
          key={Data.id}
          photo={Data.img}
          servise={Data.service}
          fee={Data.fee}
        ></Cart>
      ))}
    </div>
  );
};

export default Data;
