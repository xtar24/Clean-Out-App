import React from "react";
import Card from "../Cards";

const Actions = () => {
  const cardData = [
    {
      title: "Create Account",
      description: "Download the Clean-Out app on the Play Store.",
      iconClass: "fas fa-user-plus", // Icon for account creation
      bgColor: "bg-purple-100", // Background color for this card
    },
    {
      title: "Request Pickup",
      description: "Sort your waste & request doorstep pickup anytime.",
      iconClass: "fas fa-truck", // Icon for a truck (pickup)
      bgColor: "bg-red-100", // Background color for this card
    },
    {
      title: "Earn Points",
      description: "Earn points every time we pick up from you.",
      iconClass: "fas fa-coins", // Icon for coins (points)
      bgColor: "bg-yellow-100", // Background color for this card
    },
    {
      title: "Redeem Points",
      description: "Withdraw, transfer, donate, or shop with your points.",
      iconClass: "fas fa-gift", // Icon for a gift (redeem points)
      bgColor: "bg-red-100", // Background color for this card
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {cardData.map((card, index) => (
        <div key={index} className={`rounded-lg shadow-md ${card.bgColor} p-4`}>
          <Card
            title={card.title}
            description={card.description}
            iconClass={card.iconClass} // Pass the icon class to Card
            showButton={false}
          />
        </div>
      ))}
    </div>
  );
};

export default Actions;
