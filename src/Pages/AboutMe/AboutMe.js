import React from "react";
import MyPhoto from "../../Images/AboutMe/me.jpg";
import "./AboutMe.css";
const AboutMe = () => {
  return (
    <div className="container aboutMeContainer mt-5">
      <img className="aboutMePhoto" src={MyPhoto} alt="" />
      <h3 className="title">রাজেশ মন্ডল</h3>
      <p className="aboutMeParagraph">
        আমি রাজেশ, একজন একাদশ শ্রেনির ছাত্র এবং একজন জুনিয়র ওয়েব ডেভেলপার। আমি
        গত একবছর ধরে ওয়েব ডেভেলপমেন্ট শিখে চলেছি এবং গত চার মাস ধরে প্রোগ্রামিং
        হিরো টিমের কাছ থেকে ট্রেনিং নিচ্ছি। আপাতত আমার Html, Html5, Css, Css3,
        Bootstrap5, Tailwind, Javascript, Es6, React js, React Router, Firebase
        টেকনোলজি শেখা হয়ে গিয়েছে এবং পরবর্তী তিন মাসের মধ্যে Node js, MongoDB,
        Typescript ইত্যাদি টেকনোলজি শেখা আমার লক্ষ্য।
      </p>
    </div>
  );
};

export default AboutMe;
