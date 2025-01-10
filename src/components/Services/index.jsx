import React from "react";
import Card from "../Cards";

const Services = () => {
  const cardData = [
    {
      title: "Doorstep Pickups",
      description:
        "Request pickup via the mobile app and we will pickup from your doorstep on schedules days free of charge.",
      icon: "fa-duotone fa-solid fa-truck-pickup", // Example: House icon from Simple Icons CDN
      linkUrl: "https://example.com/doorstep-pickups",
      linkText: "for households, organisations",
    },
    {
      title: "Community Hubs",
      description:
        "Locate the nearest community hub to drop off your recyclable wastes and earn points all the same.",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/community.svg", // Example: Community icon from Simple Icons CDN
      linkUrl: "https://example.com/community-hubs",
      linkText: "for households, for vendors",
    },
    {
      title: "Self-Service",
      description:
        "Locate the closest automated machine to recycle only plastics & cans and you get a voucher to redeem.",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/recycle.svg", // Example: Recycle icon from Simple Icons CDN
      linkUrl: "https://example.com/self-service",
      linkText: "for individuals",
    },
    {
      title: "Offload",
      description:
        "Sell functional, but decommissioned items in bulk to get maximum value and ensure they don’t end up as wastes.",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons/icons/sellcast.svg", // Example: Sell icon from Simple Icons CDN
      linkUrl: "https://example.com/offload",
      linkText: "for organisations, parks, malls, plazas",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          icon={card.icon} // Pass the icon to the Card component
          linkUrl={card.linkUrl}
          linkText={card.linkText}
        />
      ))}
    </div>
  );
};

export default Services;
