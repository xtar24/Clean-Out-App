import React from "react";
import Cardd from "../Cards/cards";
import sec from "../assets/sec.jpg";
import partner from "../assets/partner.jpg";
import md from "../assets/md.jpg";
import official from "../assets/official.jpg";
import man from "../assets/man.jpg";
import judith from "../assets/judith.jpg";

const Team = () => {
  const cardData = [
    {
      image: sec,
      name: "Rosemary Joseph",
      location: "CEO",
    },
    {
      image: man,
      name: "Micheal Oludeji",
      location: "General Manager",
    },
    {
      image: md,
      name: "Peter Best",
      location: "Public Relations",
    },
    {
      image: official,
      name: "Lydia Okoro",
      location: "Program Manager",
    },
    {
      image: partner,
      name: "John ",
      location: "Facility/Maintenance",
    },
    {
      image: judith,
      name: "Mayowa",
      location: "Production",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
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

export default Team;
