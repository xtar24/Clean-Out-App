import React from "react";
import { Link } from "react-router-dom";
import waste from "../assets/waste.png";

function Brand() {
  return (
    <div className="flex items-center">
      <img src={waste} alt="Logo" className="h-10" />
      <Link to="/" className="font-bold text-2xl text-green-700 mx-3">
        CLEAN-OUT
      </Link>
    </div>
  );
}

export default Brand;
