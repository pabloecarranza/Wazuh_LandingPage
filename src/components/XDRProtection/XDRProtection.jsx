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
      {/* <div className="Bottom-HalfBox">
        <div>//aqui background image</div>
        <div>
          <span>Explore the potential of Wazuh Cloud</span>
          <span>
            Wazuh has created an entirely new cloud-based architecture to reduce
            complexity and improve security while providing stringer endpoint
            protection.
          </span>
        </div>
      </div> */}
    </div>
  );
};
