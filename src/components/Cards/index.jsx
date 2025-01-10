import React from "react";

const Card = ({ title, description, iconClass, showButton = true }) => {
  return (
    <div className="bg-transparent rounded-lg shadow-lg p-4 text-center">
      <div className="text-4xl text-green-600 mb-4">
        <i className={iconClass}></i>
      </div>
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
      {/* Conditionally render the button */}
      {showButton && (
        <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Learn More
        </button>
      )}
    </div>
  );
};

export default Card;
