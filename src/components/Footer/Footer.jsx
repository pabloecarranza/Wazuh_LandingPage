import React from "react";
import "./Footer.css";
import logo from "../../assets/logowhite.svg";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineTwitter, AiFillGithub, AiOutlineSlack } from "react-icons/ai";
import { FaLinkedinIn, FaRedditAlien } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";

export const Footer = () => {
  return (
    <div className="FooterBox">
      <div className="SupAreaFooter">
        <img src={logo} alt="WazuhLogo" />
      </div>
      <div className="MediumAreaFooter">
        <div className="cardOneFooter">
          <span>
            <a
              href="https://wazuh.com/platform/"
              target="_blank"
              rel="noopener noreferrer"
            >
              PLATAFORM
            </a>
          </span>
          <span>
            <a
              href="https://wazuh.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Product
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
        </div>

        <div className="cardOneFooter">
          <span>
            <a
              href="https://documentation.wazuh.com/current/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOCUMENTATION
            </a>
          </span>
          <span>
            <a
              href="https://documentation.wazuh.com/current/quickstart.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quickstart
            </a>
          </span>
          <span>
            <a
              href="https://documentation.wazuh.com/current/getting-started/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Getting started
            </a>
          </span>
        </div>

        <div className="cardOneFooter">
          <span>
            <a href="#" rel="noopener noreferrer">
              SERVICES
            </a>
          </span>
          <span>
            <a
              href="https://wazuh.com/professional-services/#services-support"
              target="_blank"
              rel="noopener noreferrer"
            >
              Support
            </a>
          </span>
          <span>
            <a
              href="https://wazuh.com/professional-services/#services-training"
              target="_blank"
              rel="noopener noreferrer"
            >
              Training
            </a>
          </span>
        </div>

        <div className="cardOneFooter">
          <span>
            <a href="#" rel="noopener noreferrer">
              RESOURCES
            </a>
          </span>
          <span>
            <a
              href="https://wazuh.com/blog/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </span>
          <span>
            <a
              href="https://wazuh.com/community/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Community
            </a>
          </span>
        </div>
        <div className="subscribe">
          <span>Subscribe to our newsletter</span>
          <div>
            <input
              type="text"
              placeholder="E-mail adress"
              className="inputSearch2"
            />
            <button className="SubscribeButton">
              <AiOutlineRight />
            </button>
          </div>
        </div>
      </div>
      <div className="EndAreaFooter">
        <div className="TextFooter">
          <span>© 2022 Wazuh, Inc.</span>
          <span>
            <a
              href="https://wazuh.com/general-privacy-statement/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy
            </a>
          </span>
          <span>
            <a
              href="https://wazuh.com/terms-of-use/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of service
            </a>
          </span>
        </div>
        <div></div>
        <div className="SocialMediaIconsFooter">
          <span>
            <a
              href="https://twitter.com/wazuh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter className="IconFooter" />
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/company/wazuh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="IconFooter" />
            </a>
          </span>
          <span>
            <a
              href="https://www.reddit.com/r/Wazuh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaRedditAlien className="IconFooter" />
            </a>
          </span>
          <span>
            <a
              href="https://github.com/wazuh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="IconFooter" />
            </a>
          </span>
          <span>
            <a
              href="https://wazuh.slack.com/join/shared_invite/zt-1gcav2l82-ti8yjw709bIHQ04K8WiziA#/shared-invite/email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineSlack className="IconFooter" />
            </a>
          </span>
          <span>
            <a
              href="mailto:wazuh+subscribe@googlegroups.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiUsers className="IconFooter" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
