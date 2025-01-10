import React from "react";

const Card = ({ title, description, icon, linkUrl, linkText }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {/* Icon */}
      <div className="p-6 flex justify-center">
        <img src={icon} alt={title} className="w-16 h-16 object-contain mb-4" />
      </div>

      {/* Card Content */}
      <div className="px-6 py-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 text-base">{description}</p>
      </div>

      {/* Link */}
      <div className="px-6 pt-4 pb-2">
        <a
          href={linkUrl}
          className="inline-flex items-center justify-center bg-green-100 text-customGreen text-sm sm:text-base px-3 py-1 rounded-md hover:bg-blue-950 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default Card;
