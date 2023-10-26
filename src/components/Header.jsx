import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { BsChevronDoubleDown } from "react-icons/bs";
import "../styles/components/header.scss";

const Header = () => {
  const [texteVisible, setTexteVisible] = useState(false);

  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = "./lyes-azzouz-cv.pdf";
    link.download = "CurriculumVitae.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleTexte = () => {
    setTexteVisible(!texteVisible);
  };

  return (
    <header className="header" id="accueil">
      <div className="container">
        <div className="texts-content">
          <div className="titles">
            <h1>
              <span id="l">L</span>
              <span id="yes">yes</span> <span id="a">A</span>
              <span id="zzouz">zzouz</span>
            </h1>
            <div className="subtitle-wd">
              <span id="fe-f">F</span>
              <span id="fe-r">r</span>
              <span id="fe-o">o</span>
              <span id="fe-n">n</span>
              <span id="fe-t">t</span>
              <span id="fe--">-</span>
              <span id="fe-e">E</span>
              <span id="fe-n-2">n</span>
              <span id="fe-d">d</span>
              <div className="espace"></div>
              <span id="rt-r">R</span>
              <span id="rt-e">e</span>
              <span id="rt-a">a</span>
              <span id="rt-c">c</span>
              <span id="rt-t">t</span>
              <div className="espace"></div>
              <span id="st-d">D</span>
              <span id="st-e-1">e</span>
              <span id="st-v">v</span>
              <span id="st-e-2">e</span>
              <span id="st-l">l</span>
              <span id="st-o">o</span>
              <span id="st-p-1">p</span>
              <span id="st-p-2">p</span>
              <span id="st-e-3">e</span>
              <span id="st-r">r</span>
            </div>
          </div>

          {texteVisible && (
            <p>
              Je suis Lyes, un développeur front-end junior. J'ai suivi une
              formation chez Openclassroom, ce qui m'a permis de maîtriser le
              développement web. J'ai acquis des compétences avancées grâce à
              des projets concrets et travaille également sur le développement
              back-end (Express.js, MongoDB). Depuis l'enfance, ma passion pour
              l'informatique m'a poussé à maîtriser la conception 3D et les
              moteurs graphiques. Aujourd'hui, je veux créer des applications
              web et continuer à évoluer dans ce domaine.
            </p>
          )}
          <div
            className={`fleche ${texteVisible ? "active" : ""}`}
            onClick={toggleTexte}
          >
            <span className="text">
              {texteVisible ? "Masquer le texte" : "En savoir plus"}
            </span>
            <span className="chevrons">
              <BsChevronDoubleDown />
            </span>
          </div>

          <button className="cv" title="Télécharger" onClick={downloadPdf}>
            Curriculum vitae <FaDownload />
          </button>
        </div>
      </div>{" "}
    </header>
  );
};

export default Header;
