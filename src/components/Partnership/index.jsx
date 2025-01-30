import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Importing dropdown icons

const Partnership = () => {
  // Define the items array
  const [list, setList] = useState([
    {
      id: 1,
      word: "Launch a Recycling Program",
      details: [
        "Engage your customers and community by launching a recycling program. For consumer goods brands, we run programs that allow your consumers to return their packaging wastes for rewards while Clean-Out powers the recovery. For offices and facilities, we offer monthly recycling pickups and provide waste diversion reports for your business communications.",
      ],
      isOpen: false,
    },
    {
      id: 2,
      word: "Be a Partner Collector",
      details: [
        "Collect recyclable wastes from Clean-Out users near you to earn a commission for every pickup or drop-off you complete.",
      ],
      isOpen: false,
    },
    {
      id: 3,
      word: "Sponsor Empowerment Programs",
      details: [
        "As your corporate social responsibility or simply a way of giving back, you can sponsor any of Clean-Out’s empowerment programs for internally displaced women or informal waste pickers.",
      ],
      isOpen: false,
    },
  ]);

  // Function to handle toggle
  const toggleItem = (id) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (
    <div className="p-6">
      <ul className="space-y-6">
        {list.map((item) => (
          <li key={item.id} className="bg-white shadow-lg rounded-lg">
            <div
              className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => toggleItem(item.id)}
            >
              <span className="text-lg font-semibold text-green-900">
                {item.word}
              </span>
              <span className="text-green-700">
                {item.isOpen ? (
                  <FaChevronUp size={20} />
                ) : (
                  <FaChevronDown size={20} />
                )}
              </span>
            </div>
            {item.isOpen && (
              <ul className="p-4 border-t border-gray-200 space-y-2">
                {item.details.map((detail, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-700 space-x-2"
                  >
                    <span className="text-green-500 mt-1">⭐</span>
                    <p>{detail}</p>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Partnership;
