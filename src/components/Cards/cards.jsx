import React from "react";

const Cardd = ({ image, message, name, location }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg text-center">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 mx-auto rounded-xl mb-4"
      />
      <p className="text-gray-700 italic mb-2">"{message}"</p>
      <h4 className="text-green-900 font-bold">{name}</h4>
      <span className="text-gray-500 text-sm">{location}</span>
    </div>
  );
};

export default Cardd;
