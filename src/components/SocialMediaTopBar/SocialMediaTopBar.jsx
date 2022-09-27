import React from "react";
import "./SocialMediaTopBar.css";
import { AiOutlineTwitter, AiFillGithub, AiOutlineSlack } from "react-icons/ai";
import { FaLinkedinIn, FaRedditAlien } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";

export const SocialMediaTopBar = () => {
  return (
    <div className="SocialMedia-Bar">
      <div className="SocialMedia-No_Icons"></div>
      <div className="SocialMedia-Icons">
        <span>
          <a
            href="https://wazuh.com/community/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Community
          </a>
        </span>
        <span>
          <a
            href="https://wazuh.com/contact-us/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact us
          </a>
        </span>
        <span>
          <a
            href="https://twitter.com/wazuh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineTwitter />
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/company/wazuh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a
            href="https://www.reddit.com/r/Wazuh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaRedditAlien />
          </a>
        </span>
        <span>
          <a
            href="https://github.com/wazuh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
        </span>
        <span>
          <a
            href="https://wazuh.slack.com/join/shared_invite/zt-1gcav2l82-ti8yjw709bIHQ04K8WiziA#/shared-invite/email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineSlack />
          </a>
        </span>
        <span>
          <a
            href="mailto:wazuh+subscribe@googlegroups.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiUsers />
          </a>
        </span>
        <input type="text" placeholder="Search" className="inputSearch" />
      </div>
    </div>
  );
};
