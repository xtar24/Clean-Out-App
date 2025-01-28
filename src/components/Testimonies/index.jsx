import React from "react";
import Cardd from "../Cards/cards";
import lady from "../../assets/lady.jpg";
import handsome from "../../assets/handsome.jpg";
import hoodie from "../../assets/hoodie.jpg";
import smiles from "../../assets/smiles.jpg";

const Testimonies = () => {
  const cardData = [
    {
      image: lady,
      message:
        "It's such a pleasure to be able to recycle from the comfort of my home.",
      name: "Sophia",
      location: "Customer (Lagos)",
    },
    {
      image: hoodie,
      message:
        "Clean-Out has made waste management so much easier for my household!",
      name: "Mayowa",
      location: "Customer (Abuja)",
    },
    {
      image: smiles,
      message: "I love how seamless and eco-friendly the entire process is.",
      name: "Sophia",
      location: "Customer (Lagos)",
    },
    {
      image: handsome,
      message:
        "It's amazing to see my recycling efforts make a real difference.",
      name: "Mayowa",
      location: "Customer (Abuja)",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {cardData.map((card, index) => (
        <Cardd
          key={index}
          image={card.image}
          message={card.message}
          name={card.name}
          location={card.location}
        />
      ))}
    </div>
  );
};

export default Testimonies;
