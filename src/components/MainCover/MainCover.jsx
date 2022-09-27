import React from "react";
import "./MainCover.css";
import salesforce from "../../assets/salesforc-gray.png";
import groupon from "../../assets/groupon-gray.png";
import cisco from "../../assets/cisco-gray.png";
import walgreens from "../../assets/wallgreens-gray.png";
import nasa from "../../assets/nasa-gray.png";
import pwc from "../../assets/pwc-gray.png";

export const MainCover = () => {
  return (
    <>
      <div className="HomeCover">
        <div className="CenterTextHome">
          <span>
            The Open Source <br /> Security Platform
          </span>

          <span>
            Unified XDR and SIEM protection for endpoints <br /> and cloud
            workloads.
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
      <div className="CompaniesLogos">
        <span>
          <img src={salesforce} alt="salesforce" />
        </span>
        <span>
          <img src={groupon} alt="groupon" />
        </span>
        <span>
          <img src={cisco} alt="cisco" />
        </span>
        <span>
          <img src={walgreens} alt="walgreens" />
        </span>
        <span>
          <img src={nasa} alt="nasa" />
        </span>
        <span>
          <img src={pwc} alt="pwc" />
        </span>
      </div>
    </>
  );
};
