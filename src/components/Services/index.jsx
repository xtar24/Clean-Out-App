import React from "react";
import Card from "../Cards";

const Services = () => {
  const handleLinkClick = (title) => {
    alert(`You clicked on ${title}`);
  };

  const cardData = [
    {
      title: "Doorstep Pickups",
      description:
        "Request pickup via the mobile app and we will pick up from your doorstep on scheduled days, free of charge.",
      iconClass: "fas fa-truck", // FontAwesome icon for a truck
    },
    {
      title: "Community Hubs",
      description:
        "Locate the nearest community hub to drop off your recyclable waste and earn points.",
      iconClass: "fas fa-home", // FontAwesome icon for home
    },
    {
      title: "Self-Service",
      description:
        "Locate the closest automated machine to recycle only plastics & cans and get a voucher.",
      iconClass: "fas fa-cogs", // FontAwesome icon for settings
    },
    {
      title: "Offload",
      description:
        "Sell functional, but decommissioned items in bulk to get maximum value and ensure they don’t end up as waste.",
      iconClass: "fas fa-box", // FontAwesome icon for a box
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          iconClass={card.iconClass} // Pass the icon class to Card
          onButtonClick={() => handleLinkClick(card.title)}
        />
      ))}
    </div>
  );
};

export default Services;
