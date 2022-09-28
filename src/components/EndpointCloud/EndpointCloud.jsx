import React from "react";
import "./EndpointCloud.css";
import Enpoint from "../../assets/Endpoint Security@4x.png";
import Cloud from "../../assets/Cloud Security@4x.png";
import Threat from "../../assets/Threat Intelligence@4x.png";
import Security from "../../assets/Security Ops@4x.png";

import { BsCheckLg } from "react-icons/bs";

const cardsInfo = [
  {
    id: 1,
    image: Enpoint,
    title: "Endpoint Security",
    subtitle1: "Configuration Assessment",
    subtitle2: "Endpoint Detection & Response",
    subtitle3: " File Integrity Monitoring",
  },
  {
    id: 2,
    image: Threat,
    title: "Threat Intelligence",
    subtitle1: "Threat Hunting",
    subtitle2: "IT Hygiene",
    subtitle3: " Vulnerability Detection",
  },
  {
    id: 3,
    image: Security,
    title: "Security Operations",
    subtitle1: "Log Data Analysis",
    subtitle2: "Malware Detection",
    subtitle3: " Audit & Compliance",
  },
  {
    id: 4,
    image: Cloud,
    title: "Cloud Security",
    subtitle1: "Posture Management",
    subtitle2: "Workload Protection",
    subtitle3: " Container Security",
  },
];

export const EndpointCloud = () => {
  return (
    <div className="Principal-Endpoint-Box">
      <div className="text-area">
        <span>Endpoint & Cloud Workload Protection</span>
        <span>
          Wazuh unifies historically separate functions into a single agent and
          plataform architecture.
        </span>
        <span>
          Protection is provided for public clouds, private clouds, and
          on-premise data centers.
        </span>
      </div>
      <div className="card-Area">
        {cardsInfo.map((card) => (
          <div className="card" key={card.id}>
            <span className="imageCard">
              <img src={card.image} />
            </span>
            <span>{card.title}</span>
            <span>
              <BsCheckLg className="icon" /> {card.subtitle1}
            </span>
            <span>
              <BsCheckLg className="icon" />
              {card.subtitle2}
            </span>
            <span>
              <BsCheckLg className="icon" />
              {card.subtitle3}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
