import React from "react";
import { useState } from "react";
import "../styles/components/bmenu.scss";

const Bmenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`burger-menu ${isOpen ? "open" : ""}`}>
      <div className="burger-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className="menu-items">
        <li>Accueil</li>
        <li>Services</li>
        <li>À propos</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Bmenu;
