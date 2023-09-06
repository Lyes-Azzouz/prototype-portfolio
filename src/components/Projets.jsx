import React, { useState } from "react";
import "../styles/components/projets.scss";
import projectsData from "../projets.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import Modal from "./Modal";

const Projets = () => {
  const projets = projectsData;
  const scrollableContentRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleScroll = (direction) => {
    const targetElement = scrollableContentRef.current;
    if (targetElement) {
      const scrollAmount = 380;
      if (direction === "up") {
        targetElement.scrollTo({
          top: targetElement.scrollTop - scrollAmount,
          behavior: "smooth",
        });
      } else if (direction === "down") {
        targetElement.scrollTo({
          top: targetElement.scrollTop + scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  const handleProjetClick = (projectIndex) => {
    const project = projets[projectIndex];
    setSelectedProject(project); // Met a jour l'etat pour afficher la modal
    setTimeout(() => {
      setSelectedProject((prev) => ({
        ...prev,
        entering: true, // Ajoute la propriete "entering" pour ajouter la nouvelle classe
      }));
    }, 0);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="projets">
      <div className="top-texts">
        <h2>Mes projets</h2>
        <p>
          Voici la liste de tous les projets que j'ai réalisés ou auxquels j'ai
          participé.
          <br />
          Faites défiler le carrousel à l'aide des chevrons.
        </p>
      </div>
      <div className="projets-content">
        <div className="cards-content" ref={scrollableContentRef}>
          {projets.map((projet, index) => (
            <div
              className="project-card"
              key={index}
              onClick={() => handleProjetClick(index)}
            >
              <h3>{projet.title}</h3>
              <p>{projet.description}</p>
            </div>
          ))}
        </div>
        <div className="chevrons">
          <button
            className="scroll-button up"
            onClick={() => handleScroll("up")}
          >
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
          <button
            className="scroll-button down"
            onClick={() => handleScroll("down")}
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      </div>

      {selectedProject && (
        <Modal project={selectedProject} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default Projets;
