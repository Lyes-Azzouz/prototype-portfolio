import React, { useState, useEffect } from "react";
import "../styles/components/skills.scss";
import Collapse from "./Collapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const [selectedSkills, setSelectedSkills] = useState({
    "Front-end": false,
    "Back-end": false,
    "Base de données": false,
    "Gestion de version": false,
    Logiciels: false,
    "Outils de développement": false,
    "Gestion de projets & Communication": false,
  });

  const [isScrolling, setIsScrolling] = useState(false);

  const handleSkillToggle = (skill) => {
    setSelectedSkills((prevState) => ({
      ...prevState,
      [skill]: !prevState[skill],
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerValue = 1316;

      console.log("ScrollY:", scrollY);

      if (scrollY > triggerValue) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const containerClassName = `scroll-container ${
    isScrolling ? "scrolling" : ""
  }`;
  return (
    <section className="skills">
      <div id="skills"></div>
      <div className="sidebar">
        <div className={containerClassName}>
          <h1>Mes compétences</h1>
          <p id="subtitle">
            Dans cette section, vous trouverez toutes les compétences acquises
            par la pratique des différents langages et des différentes
            technologies utilisées dans le cadre du développement web. <br />
          </p>{" "}
          <div className="fleche">
            <FontAwesomeIcon icon={faArrowAltCircleDown} />
          </div>
        </div>
        <span id="check-msg">
          Afin de faciliter la visibilité des compétences, cochez les cases des
          menus qui vous intéressent, puis dépliez le contenu de chaque
          compétence en appuyant sur le bouton "+".
        </span>

        <div className="filter-bar">
          {Object.keys(selectedSkills).map((skill) => (
            <label key={skill}>
              <input
                type="checkbox"
                checked={selectedSkills[skill]}
                onChange={() => handleSkillToggle(skill)}
              />
              {skill}
            </label>
          ))}
        </div>

        <div className="sidebar-content">
          <div className="column-1">
            <div className="techno-front">
              <span>Front-end</span>
              <div
                className={`content ${
                  selectedSkills["Front-end"] ? "open" : ""
                }`}
              >
                <Collapse
                  title={"Javascript"}
                  content={
                    "Je possède une bonne maîtrise de JavaScript, l'un des langages de programmation les plus puissants et polyvalents du web. Mon niveau de maîtrise s'étend au dela des bases pour le coté front-end, ce qui me permet de créer des applications web complexes et interactives. Je suis capable de manipuler le Document Object Model (DOM) avec JavaScript pour créer des pages web dynamiques. Cela inclut l'ajout, la suppression et la modification d'éléments HTML en temps réel. Je sais gérer les événements en JavaScript, que ce soit pour la gestion de clics, de survols de souris ou d'autres interactions, je peux créer des interfaces utilisateur réactives.  J'ai une bonne compréhension de la programmation orientée objet (POO) ce qui me permet de structurer mon code de manière propre et efficace. J'utilise des classes, des objets et l'héritage pour mettre en place des solutions efficaces dans le code. Je sais utiliser des opérations asynchrones en JavaScript en utilisant des promesses (Promises) et des fonctions asynchrones (async/await). Cela me permet de traiter des opérations telles que les appels API.  Je suis familier avec l'écosystème JavaScript, y compris les gestionnaires de paquets tels que npm et les outils de construction comme Webpack ou bien les frameworks front-end comme React. Je peux configurer des projets, gérer les dépendances , créer des projets from scratch. "
                  }
                />
                <Collapse
                  title={"Html"}
                  content={
                    "Je possède une solide maitrise en HTML , le langage fondamental pour la création de sites web. Je peux concevoir des mises en page complexes et attrayantes, en veillant à ce qu'elles soient compatibles avec différents navigateurs. De plus je maitrise la syntaxe Jsx pour react ce qui me rend polyvalent dans la construction d'un site simple en html ou bien à l'aide d'un frameworks comme react."
                  }
                />
                <Collapse
                  title={"Css"}
                  content={
                    "Je possède une solide maîtrise en CSS, le second langage fondamental du web. Mon expertise en CSS me permet de créer des mises en pages solides et attrayante au visuel. Je mâitrise Flex et Grid , le positionnement , toutes les propriétés de bases , je sais utiliser SASS afin de mieux organiser le code , je sais intégrer une maquette de manière fidèle et optimisée."
                  }
                />
                <Collapse
                  title={"Sass"}
                  content={
                    "Je sais utiliser Sass pour simplifier et améliorer la gestion du style CSS. Cette technologie me permet de maintenir un code CSS propre et modulaire tout en aillant accès à des fonctionnalités telles que les variables."
                  }
                />
                <Collapse
                  title={"React"}
                  content={
                    "J'ai une bonne maîtrise de  React, je sais créer des interfaces utilisateur interactives. Je peux développer des composants réutilisables et structurer des applications web réactives avec plus de facilité, offrant ainsi une expérience utilisateur fluide. De plus ce portfolio est conçu avec React ce qui m'a permis d'améliorer mes compétences dans ce frameworks.Je sais gérer l'état local des composants avec les states et les props , je sais propager des données entre composants enfants et parents. Je sais utiliser React Routeur afin de gérer la navigation , je sais définir des routes , j'utilise des paramètres d'URL ou des liens. Je sais utiliser des bibliotheque comme Axios pour les appels API. Je sais intégrer des bibliotheques externes comme les packages NPM dans mon application React de manière efficace. Je sais déployer une application React , notament sur GitHub Pages. J'ai une bonne compréhension des hooks comme useState , useEffect ou useContext afin de gérer l'état et les effets dans les composants."
                  }
                />
                <Collapse
                  title={"Responsive Desing"}
                  content={
                    " Je sais concevoir un site qui s'adapte aux formats d'écrans, ce qui signifie que mes sites web sont conçus pour offrir une expérience utilisateur optimale sur divers appareils (desktop , tablet , mobile). Je maîtrise les media query afin d'adapter le site aux formats que je souhaites."
                  }
                />
              </div>
            </div>
            <div className="techno-back">
              <span>Back-end</span>
              <div
                className={`content ${
                  selectedSkills["Back-end"] ? "open" : ""
                }`}
              >
                <Collapse title={"Node.js"} content={"je test"} />
                <Collapse title={"Express.js"} content={"je test"} />
                <Collapse title={"Api RESTful"} content={"je test"} />
                <Collapse title={"Bcrypt"} content={"je test"} />
              </div>
            </div>
            <div className="bdd">
              <span>Base de données</span>
              <div
                className={`content ${
                  selectedSkills["Base de données"] ? "open" : ""
                }`}
              >
                <Collapse title={"MongoDB"} content={"Je test"} />
              </div>
            </div>

            <div className="versioning">
              <span className="v">Gestion de version</span>
              <div
                className={`content ${
                  selectedSkills["Gestion de version"] ? "open" : ""
                }`}
              >
                <Collapse title={"Git"} content={"test"} />
                <Collapse title={"GitHub"} content={"test"} />
              </div>
            </div>
          </div>
          <div className="column-2">
            <div className="logiciels">
              <span className="sw">Logiciels</span>
              <div
                className={`content ${
                  selectedSkills["Logiciels"] ? "open" : ""
                }`}
              >
                <Collapse title={"VsCode"} content={"test"} />
                <Collapse title={"3dsmax"} content={"test"} />
                <Collapse title={"Figma"} content={"test"} />
                <Collapse title={"Gimp"} content={"test"} />
              </div>
            </div>

            <div className="dev-tools">
              <span className="dt">Outils de développement</span>
              <div
                className={`content ${
                  selectedSkills["Outils de développement"] ? "open" : ""
                }`}
              >
                <Collapse title={"Google DevTool"} content={"test"} />
                <Collapse title={"Google Lighthouse"} content={"test"} />
                <Collapse title={"Waze"} content={"test"} />
                <Collapse title={"Json web token"} content={"test"} />
                <Collapse title={"Shemas.org"} content={"test"} />
                <Collapse title={"JSONVue"} content={"test"} />
                <Collapse title={"Talent Api tester"} content={"test"} />
                <Collapse title={"Postman"} content={"test"} />
                <Collapse title={"Swagger"} content={"test"} />
                <Collapse title={"Regex101"} content={"test"} />
              </div>
            </div>
            <div className="communication">
              <span className="com">Gestion de projets & Communication</span>
              <div
                className={`content ${
                  selectedSkills["Gestion de projets & Communication"]
                    ? "open"
                    : ""
                }`}
              >
                <Collapse title={"Trello"} content={"test"} />
                <Collapse title={"Microsoft Teams"} content={"test"} />
                <Collapse title={"Slack"} content={"test"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
