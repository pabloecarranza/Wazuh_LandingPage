import React from "react";
import "./XDRProtection.css";

export const XDRProtection = () => {
  return (
    <div className="XDRPrincipalBox">
      <div className="SUP-HalfBox">
        <div className="XDR-Text">
          <div className="InnerText">
            <span>Active XDR protection</span>
            <span>from modern threats</span>
            <span>
              Wazuh provides analysts real-time correlation and context. Active
              responses are granular, encompassing on-device remediation so
              enpoints are kept clean and operational.
            </span>
          </div>
        </div>
        <div className="storageImage"></div>
      </div>
      <div className="Bottom-HalfBox">
        <div className="storageImage2"></div>
        <div className="Cloud-Text">
          <div className="InnerTextCloud">
            <span>
              Explore the potential of <br /> Wazuh Cloud
            </span>
            <span>
              Wazuh has created an entirely new cloud-based architecture to
              reduce complexity and improve security while providing stringer
              endpoint protection.
            </span>
            <span className="ButtonFreeTrial">
              <a
                href="https://console.cloud.wazuh.com/sign-up?landing=trial"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start your free trial
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
