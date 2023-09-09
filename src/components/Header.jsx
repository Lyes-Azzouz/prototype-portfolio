import React from "react";
import "../styles/components/header.scss";
import Projets from "./Projets";

const Header = () => {
  return (
    <header className="header">
      <div id="accueil"></div>
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
            Je m'appel Lyes, je suis un développeur web tout droit sorti de la
            formation "Developpeur Web" chez OpenClassrooms, déterminé à
            transformer des lignes de code en expériences numériques
            exceptionnelles. Ma passion pour l'informatique au sens large a été
            nourrie depuis mes 11 ans en créant des mods pour les jeux vidéo ,
            mes premiers projets étaient donc orientés vers les jeux vidéos, où
            j'ai acquis une solide expertise en modélisation , créativité etc..
            J'ai par la suite continuer à alimenter cette passion en me
            dirigeant dans le monde de de la programmation , c'est pour cela que
            j'ai suivi un cursus complet chez OpenClassrooms. Je suis spécialisé
            dans la création d'interfaces conviviales et élégantes qui mettent
            en valeur chaque projet. L'utilisation de technologies telles que
            Node.js, Express, MongoDB et React me permet de développer des
            applications web performantes et interactives. Ayant récemment
            achevé ma formation, je suis à l'aube de ma carrière en tant que
            développeur web, et je suis impatient de contribuer à des projets
            innovants. J'apporte un dévouement inébranlable à chaque tâche que
            j'entreprends, et ma volonté de toujours apprendre et m'améliorer me
          </p>
          <button className="cv">Curriculum vitae</button>
        </div>
      </div>{" "}
      <div className="rectangle"></div>
      <Projets />
    </header>
  );
};

export default Header;
