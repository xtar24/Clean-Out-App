import React from "react";

const Card = ({ title, description, imageUrl, onButtonClick }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 max-w-sm bg-white">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover rounded-md"
        />
      )}
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <button
        onClick={onButtonClick}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Learn More
      </button>
    </div>
  );
};

export default Card;
