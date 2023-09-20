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
                <Collapse title={"Javascript"}>
                  <div className="collapse-content">
                    <ul>
                      <li>
                        Maîtrise avancée de JavaScript, un langage de
                        programmation puissant et polyvalent.
                      </li>
                      <li>
                        Développement front-end avancé, capable de créer des
                        applications web complexes et interactives.
                      </li>
                      <li>
                        Manipulation du DOM (Document Object Model) avec
                        JavaScript pour créer des pages web dynamiques.
                      </li>
                      <li>
                        Gestion des événements en JavaScript pour créer des
                        interfaces utilisateur réactives.
                      </li>
                      <li>
                        Bonne compréhension de la programmation orientée objet
                        (POO) pour une structuration efficace du code.
                      </li>
                      <li>
                        Utilisation de classes, d'objets et de l'héritage pour
                        une meilleure organisation du code.
                      </li>
                      <li>
                        Maîtrise des opérations asynchrones en JavaScript avec
                        l'utilisation de promesses (Promises) et de fonctions
                        asynchrones (async/await).
                      </li>
                      <li>
                        Familiarité avec l'écosystème JavaScript, y compris npm,
                        Webpack et les frameworks front-end comme React.
                      </li>
                      <li>
                        Capacité à configurer des projets, gérer les dépendances
                        et créer des projets à partir de zéro.
                      </li>
                    </ul>
                  </div>
                </Collapse>

                <Collapse title={"HTML"}>
                  <div className="collapse-content">
                    <ul>
                      <li>
                        Maîtrise de HTML, le langage fondamental pour créer des
                        sites web.
                      </li>
                      <li>
                        Conception de mises en page complexes et compatibles
                        avec différents navigateurs.
                      </li>
                      <li>
                        Utilisation de la syntaxe JSX pour React, permettant une
                        polyvalence dans la création de sites web.
                      </li>
                      <li>
                        Capacité à créer des sites simples en HTML ou à
                        travailler avec des frameworks tels que React.
                      </li>
                    </ul>
                  </div>
                </Collapse>

                <Collapse title={"CSS"}>
                  <div className="collapse-content">
                    <ul>
                      <li>
                        Maîtrise de CSS, le second langage fondamental du web.
                      </li>
                      <li>
                        Expertise en Flexbox et CSS Grid pour la mise en page.
                      </li>
                      <li>
                        Utilisation de SASS pour organiser et simplifier le code
                        CSS.
                      </li>
                      <li>Intégration fidèle et optimisée de maquettes.</li>
                    </ul>
                  </div>
                </Collapse>

                <Collapse title={"Sass"}>
                  <div className="collapse-content">
                    <ul>
                      <li>
                        Utilisation de Sass pour simplifier la gestion du style
                        CSS.
                      </li>
                      <li>Maintien d'un code CSS propre et modulaire.</li>
                      <li>
                        Utilisation de fonctionnalités telles que les variables.
                      </li>
                    </ul>
                  </div>
                </Collapse>

                <Collapse title={"React"}>
                  <div className="collapse-content">
                    <ul>
                      <li>
                        Bonne maîtrise de React pour créer des interfaces
                        utilisateur interactives.
                      </li>
                      <li>Développement de composants réutilisables.</li>
                      <li>Structuration d'applications web réactives.</li>
                      <li>
                        Gestion de l'état local des composants avec les states
                        et les props.
                      </li>
                      <li>
                        Utilisation de React Router pour gérer la navigation.
                      </li>
                      <li>
                        Intégration de bibliothèques externes et gestion des
                        dépendances.
                      </li>
                      <li>
                        Déploiement d'applications React, notamment sur GitHub
                        Pages.
                      </li>
                      <li>
                        Compréhension des hooks tels que useState, useEffect et
                        useContext.
                      </li>
                    </ul>
                  </div>
                </Collapse>

                <Collapse title={"Responsive Design"}>
                  <div className="collapse-content">
                    <ul>
                      <li>
                        Conception de sites web adaptatifs pour une expérience
                        utilisateur optimale sur différents appareils.
                      </li>
                      <li>
                        Maîtrise des media queries pour l'adaptation aux
                        différents formats d'écran.
                      </li>
                    </ul>
                  </div>
                </Collapse>
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
