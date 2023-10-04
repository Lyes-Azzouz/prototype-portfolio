import React from "react";
import { FaDownload } from "react-icons/fa";
import "../styles/components/header.scss";

const Header = () => {
  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = "./lyes-azzouz-cv.pdf";
    link.download = "CurriculumVitae.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
              <span id="st-w">W</span>
              <span id="st-e-0">e</span>
              <span id="st-b">b</span>
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

          <p>
            Je m'appelle Lyes, je suis un développeur front-end junior. J'ai
            suivi une formation de développeur web chez Openclassroom qui m'a
            permis de comprendre réellement le métier de développeur web. Au
            cours de mon cursus de formation, j'ai aiguisé mes compétences de
            manière approfondie, notamment grâce aux projets réalisés au cours
            de la formation. D'autre part, j'ai aussi travaillé mes compétences
            en parallèle de mon parcours afin d'optimiser mon apprentissage, ce
            qui fait qu'aujourd'hui je suis capable de créer des applications
            complètes en React, d'intégrer des maquettes, de créer des sites web
            en JavaScript vanilla, et j'ai aussi développé des compétences côté
            back-end dans une moindre mesure (création d'un serveur, d'une API,
            connexions entre le front et le back, utilisation de frameworks tels
            que Express.js, utilisation et mise en place d'une base de données
            comme MongoDB). Je suis passionné par l'informatique depuis
            l'enfance, mes premiers "travaux" étaient des mods pour des jeux
            vidéo (je concevais des maps multijoueur et solo par pure passion) ;
            grâce à cette passion j'ai appris à maîtriser des logiciels de
            conception 3D tels que 3ds Max, à utiliser des moteurs graphiques, à
            faire du scriptage, etc. Maintenant, je veux créer des applications
            web, mettre à profit mes compétences ainsi qu'évoluer de manière
            constante dans ce domaine qui me passionne tout autant.
          </p>
          <button className="cv" title="Télécharger" onClick={downloadPdf}>
            Curriculum vitae <FaDownload />
          </button>
        </div>
      </div>{" "}
    </header>
  );
};

export default Header;
