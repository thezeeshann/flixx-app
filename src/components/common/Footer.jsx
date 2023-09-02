import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import "./Footer.css"

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="logo">
          <span>FLIXX</span>
        </div>
        <div className="social-links">
          <a href="https://www.facebook.com">
            <FaFacebookF/>
          </a>
          <a href="https://www.twitter.com">
            <FaInstagram/>
          </a>
          <a href="https://www.instagram.com">
            <FaTwitter/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
