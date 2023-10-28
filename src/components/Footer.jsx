import React from "react";
import "../styles/components/footer.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import logo from "./logo/footer_logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="elements">
          <div className="icon">
            <FaLinkedin style={{ color: "#0A66C2" }} />{" "}
            <FaGithub style={{ color: "#FFF" }} />
          </div>
          <ul>
            <a href="https://www.linkedin.com/in/ly%C3%A8s-azzouz-4283aa202/">
              Linkedin
            </a>
            <a href="https://github.com/Lyes-Azzouz">Github</a>
          </ul>
        </div>
        <div className="text">
          <span>Portfolio</span>
          <span>designed and created by</span>
          <span>Lyes Azzouz</span>
        </div>
        <div className="me">
          <img src={logo} alt="logo_footer" />
        </div>
      </div>
      <div id="links"></div>
    </footer>
  );
};

export default Footer;
