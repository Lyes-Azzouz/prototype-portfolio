import React from "react";
import "../styles/components/projets.scss";
import projectsData from "../projets.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

const Projets = () => {
  const projets = projectsData;
  const scrollableContentRef = useRef(null);

  const handleScroll = (direction) => {
    const targetElement = scrollableContentRef.current;
    if (targetElement) {
      const scrollAmount = 380; // Ajustez la quantité de défilement ici (380 pour que le scroll affiche les projets 2 par 2)
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

  return (
    <section className="projets">
      <div className="top-texts">
        <h2>Mes projets</h2>
        <p>
          Voici la liste de tout les projets que j'ai réalisé ou auquels j'ai
          participé.
          <br />
          Faites défiler le carousel à l'aide des chevrons.
        </p>
      </div>
      <div className="projets-content">
        <div className="cards-content" ref={scrollableContentRef}>
          {projets.map((projet, index) => (
            <div className="project-card " key={index}>
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
    </section>
  );
};

export default Projets;
