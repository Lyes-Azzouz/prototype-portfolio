import React from "react";
import "../styles/components/navbar.scss";

class Navbar extends React.Component {
  mouseOver = () => {
    console.log("ova");
  };

  mouseOut = () => {
    console.log("out");
  };

  scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  render() {
    return (
      <nav className="navbar-container" onMouseOver={this.mouseOver}>
        <div className="elements">
          <div className="me">
            <span className="name">Lyes Azzouz</span>
            <span className="poste">Web developer</span>
          </div>
          <div className="square"></div>
          <ul>
            <li
              className="liste"
              onClick={() => this.scrollToSection("accueil")}
            >
              Accueil
            </li>
            <li
              className="liste"
              onClick={() => this.scrollToSection("projets")}
            >
              Compétences
            </li>
            <li
              className="liste"
              onClick={() => this.scrollToSection("contact")}
            >
              Contact
            </li>
          </ul>
        </div>
        <div className="line"></div>
      </nav>
    );
  }
}

export default Navbar;
