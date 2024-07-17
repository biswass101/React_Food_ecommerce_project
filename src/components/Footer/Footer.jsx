import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem,
            beatae perspiciatis reprehenderit ipsam pariatur veniam
            necessitatibus nemo dolores eligendi eius similique excepturi,
            dolorum odio inventore totam neque. Facere, perferendis aliquam.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center"></div>
        <div className="footer-content-right"></div>
      </div>
    </div>
  );
};

export default Footer;
