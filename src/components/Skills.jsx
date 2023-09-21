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
                <Collapse title={"Node.js"}>
                  <div className="collapse-content">
                    <ul>
                      <li>
                        Maîtrise de Node.js, un environnement d'exécution
                        JavaScript côté serveur.
                      </li>
                      <li>
                        Création de serveurs web et d'applications back-end avec
                        Node.js.
                      </li>
                      <li>
                        Gestion des requêtes HTTP, des routes et des middlewares
                        avec Express.js.
                      </li>
                      <li>
                        Utilisation de packages npm pour étendre les
                        fonctionnalités de Node.js.
                      </li>
                    </ul>
                  </div>
                </Collapse>

                <Collapse title={"Express.js"}>
                  <div className="collapse-content">
                    <ul>
                      <li>
                        Utilisation d'Express.js, un framework web pour Node.js.
                      </li>
                      <li>
                        Création d'applications web modérément complexes avec
                        Express.js.
                      </li>
                      <li>Routage, middleware et gestion des requêtes HTTP.</li>
                    </ul>
                  </div>
                </Collapse>

                <Collapse title={"API RESTful"}>
                  <div className="collapse-content">
                    <ul>
                      <li>
                        Conception et développement d'API RESTful pour l'échange
                        de données.
                      </li>
                      <li>
                        Utilisation des méthodes HTTP pour créer des points de
                        terminaison.
                      </li>
                      <li>Sérialisation et désérialisation de données JSON.</li>
                    </ul>
                  </div>
                </Collapse>

                <Collapse title={"Bcrypt"}>
                  <div className="collapse-content">
                    <ul>
                      <li>
                        Utilisation de Bcrypt pour le hachage sécurisé des mots
                        de passe.
                      </li>
                      <li>
                        Implémentation de l'authentification sécurisée dans les
                        applications.
                      </li>
                    </ul>
                  </div>
                </Collapse>
              </div>
            </div>
            <div className="bdd">
              <span>Base de données</span>
              <div
                className={`content ${
                  selectedSkills["Base de données"] ? "open" : ""
                }`}
              >
                <Collapse title={"MongoDB"}>
                  <div className="collapse-content">
                    <ul>
                      <li>
                        Familiarité avec MongoDB, une base de données NoSQL.
                      </li>
                    </ul>
                  </div>
                </Collapse>
              </div>
            </div>

            <div className="versioning">
              <span className="v">Gestion de version</span>
              <div
                className={`content ${
                  selectedSkills["Gestion de version"] ? "open" : ""
                }`}
              >
                <Collapse title={"Git"}>
                  <div className="collapse-content">
                    <ul>
                      <li>
                        Maîtrise de Git, un système de contrôle de version.
                      </li>
                    </ul>
                  </div>
                </Collapse>

                <Collapse title={"GitHub"}>
                  <div className="collapse-content">
                    <ul>
                      <li>
                        Utilisation de GitHub pour le stockage et la
                        collaboration de code.
                      </li>
                    </ul>
                  </div>
                </Collapse>
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
                <Collapse title={"VsCode"}>
                  <div className="collapse-content">
                    <ul>
                      <li>
                        Maîtrise d'outils tels que Visual Studio Code (VsCode)
                        pour le développement.
                      </li>
                    </ul>
                  </div>
                </Collapse>

                <Collapse title={"3dsmax"}>
                  <div className="collapse-content">
                    <ul>
                      <li>Utilisation de 3dsmax pour la modélisation 3D.</li>
                    </ul>
                  </div>
                </Collapse>

                <Collapse title={"Figma"}>
                  <div className="collapse-content">
                    <ul>
                      <li>
                        Utilisation avancée de Figma pour la conception
                        d'interfaces utilisateur.
                      </li>
                    </ul>
                  </div>
                </Collapse>

                <Collapse title={"Gimp"}>
                  <div className="collapse-content">
                    <ul>
                      <li>Maîtrise de Gimp pour l'édition d'images.</li>
                    </ul>
                  </div>
                </Collapse>
              </div>
            </div>

            <div className="dev-tools">
              <span className="dt">Outils de développement</span>
              <div
                className={`content ${
                  selectedSkills["Outils de développement"] ? "open" : ""
                }`}
              >
                <Collapse title={"Google DevTool"}>
                  <div className="collapse-content">
                    <ul>
                      <li>
                        Utilisation avancée de Google DevTool pour le débogage.
                      </li>
                    </ul>
                  </div>
                </Collapse>

                <Collapse title={"Google Lighthouse"}>
                  <div className="collapse-content">
                    <ul>
                      <li>
                        Utilisation de Google Lighthouse pour l'optimisation des
                        performances.
                      </li>
                    </ul>
                  </div>
                </Collapse>

                <Collapse title={"Waze"}>
                  <div className="collapse-content">
                    <ul>
                      <li>
                        Utilisation de Waze (ou autre) pour la navigation.
                      </li>
                    </ul>
                  </div>
                </Collapse>

                <Collapse title={"Json web token"}>
                  <div className="collapse-content">
                    <ul>
                      <li>
                        Utilisation de JSON Web Tokens (JWT) pour
                        l'authentification et l'autorisation.
                      </li>
                    </ul>
                  </div>
                </Collapse>

                <Collapse title={"Shemas.org"}>
                  <div className="collapse-content">
                    <ul>
                      <li>
                        Connaissance de Shemas.org pour la structuration des
                        données.
                      </li>
                    </ul>
                  </div>
                </Collapse>

                <Collapse title={"JSONVue"}>
                  <div className="collapse-content">
                    <ul>
                      <li>
                        Utilisation de JSONVue pour la visualisation et la
                        manipulation de données JSON.
                      </li>
                    </ul>
                  </div>
                </Collapse>

                <Collapse title={"Talent Api tester"}>
                  <div className="collapse-content">
                    <ul>
                      <li>
                        Utilisation de Talent Api Tester pour le test d'APIs.
                      </li>
                    </ul>
                  </div>
                </Collapse>

                <Collapse title={"Postman"}>
                  <div className="collapse-content">
                    <ul>
                      <li>
                        Utilisation de Postman pour le développement et le test
                        d'APIs.
                      </li>
                    </ul>
                  </div>
                </Collapse>

                <Collapse title={"Swagger"}>
                  <div className="collapse-content">
                    <ul>
                      <li>
                        Utilisation de Swagger pour la documentation et le test
                        d'APIs.
                      </li>
                    </ul>
                  </div>
                </Collapse>

                <Collapse title={"Regex101"}>
                  <div className="collapse-content">
                    <ul>
                      <li>
                        Utilisation de Regex101 pour la création et le test
                        d'expressions régulières.
                      </li>
                    </ul>
                  </div>
                </Collapse>
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
                <Collapse title={"Trello"}>
                  <div className="collapse-content">
                    <ul>
                      <li>Utilisation de Trello pour la gestion de projets.</li>
                    </ul>
                  </div>
                </Collapse>

                <Collapse title={"Microsoft Teams"}>
                  <div className="collapse-content">
                    <ul>
                      <li>
                        Collaboration avec Microsoft Teams pour la communication
                        d'équipe.
                      </li>
                    </ul>
                  </div>
                </Collapse>

                <Collapse title={"Slack"}>
                  <div className="collapse-content">
                    <ul>
                      <li>
                        Utilisation de Slack pour la communication et la
                        collaboration d'équipe.
                      </li>
                    </ul>
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
