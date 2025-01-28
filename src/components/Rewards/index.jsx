import React from "react";
import Card from "../Cards";

const Rewards = () => {
  const handleLinkClick = (title) => {
    alert(`You clicked on ${title}`);
  };

  const cardData = [
    {
      title: "Cash",
      description:
        "Withdraw your recycling points as cash directly into your bank account from the Clean-Out app.",
      iconClass: "fas fa-money-bill-wave", // Correct icon for cash
    },
    {
      title: "Ecofriendly Products",
      description:
        "Shop a variety of low-waste products on the Clean-Out marketplace with your recycling points as a currency.",
      iconClass: "fas fa-leaf", // Correct icon for eco-friendly
    },
    {
      title: "Health Insurance",
      description:
        "Subscribe for a quarterly basic health insurance plan with points earned from recycling with Clean-Out.",
      iconClass: "fas fa-heartbeat", // Correct icon for health insurance
    },
    {
      title: "Donation to Charity",
      description:
        "Donate to any Clean-Out featured charity or social cause by transferring your recycling points on the Clean-Out app.",
      iconClass: "fas fa-hand-holding-heart", // Correct icon for donation/charity
      
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
          onTextClick={() => handleLinkClick(card.title)} // Replace button with text click functionality
        />
      ))}
    </div>
  );
};

export default Rewards;
