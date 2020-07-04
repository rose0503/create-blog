import React from "react";
import "./Logo.css";
// import { ReactComponent as Red } from "../Images/Red.svg";
import Red from "../Images/Red.ico";

export default function Logo() {
  return (
    <div className="">
      <img className="logo" alt="x" src={Red} />
    </div>
  );
}
