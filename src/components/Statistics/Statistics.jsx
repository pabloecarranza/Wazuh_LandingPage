import React from "react";
import "./Statistics.css";
import Endpoints from "../../assets/Protected endpoints.png";
import Enterprise from "../../assets/Enterprise users.png";
import Downloads from "../../assets/Downloads per year.png";

export const statisticsInfo = [
  {
    id: 1,
    image: Endpoints,
    title: "15+Million",
    subtitle: "Protected endpoints",
  },
  {
    id: 2,
    image: Enterprise,
    title: "100+Thousand",
    subtitle: "Enterprise users",
  },
  {
    id: 3,
    image: Downloads,
    title: "10+Million",
    subtitle: "Downloads per year",
  },
];

export const Statistics = () => {
  return (
    <div className="StatisticsBox">
      {statisticsInfo.map((stat) => (
        <>
          <div className="cardStats" key={stat.id}>
            <div className="imageContainer">
              <img src={stat.image} alt={stat.image} />
            </div>
            <div className="textCointaner">
              <span>{stat.title}</span> <br />
              <span>{stat.subtitle}</span>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};
