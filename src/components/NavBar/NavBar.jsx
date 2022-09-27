import React from "react";
import "./NavBar.css";
import logo from "../../assets/wazuh-log.svg";

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="LeftLogoSide">
        <img src={logo} alt="WazuhLogo" />
      </div>
      <div className="RightmenuItems">
        <div className="IconsBarNavigate">
          <span>
            <a
              href="https://wazuh.com/platform/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Plataform
            </a>
          </span>
          <span>
            <a
              href="https://wazuh.com/cloud/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cloud
            </a>
          </span>
          <span>
            <a
              href="https://documentation.wazuh.com/current/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </span>
          <span>
            <a
              href="https://wazuh.com/professional-services/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Services
            </a>
          </span>
          <span className="MainColorButton">
            <a
              href="https://wazuh.com/install/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Install Wazuh
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
