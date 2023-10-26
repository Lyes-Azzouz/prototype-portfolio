import React, { useState } from "react";
import "../styles/components/bmenu.scss";

const Bmenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Meme fonction que pour la Navbar
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div className={`burger-menu ${isOpen ? "open" : ""}`}>
      <div className="burger-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className="menu-items">
        <li onClick={() => scrollToSection("accueil")}>Accueil</li>
        <li onClick={() => scrollToSection("projets")}>Projets</li>
        <li onClick={() => scrollToSection("skills")}>Compétences</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
        <li onClick={() => scrollToSection("links")}>Liens utiles</li>
      </ul>
    </div>
  );
};

export default Bmenu;
