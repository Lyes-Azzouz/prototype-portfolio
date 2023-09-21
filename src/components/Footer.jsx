import React from "react";
import "../styles/components/footer.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";

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
            <a href="">Linkedin</a>
            <a href="">Github</a>
          </ul>
        </div>
        <div className="text">
          <span>Portfolio</span>
          <span>designed and created by</span>
          <span>Lyes Azzouz</span>
        </div>
        <div className="me">
          <div className="name">
            {" "}
            <span className="l">L</span>
            <span className="a">A</span>
          </div>

          <div className="poste">
            <span className="w">W</span>
            <span className="d">D</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
