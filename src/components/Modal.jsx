import React from "react";
import projectsData from "../projets.json";
import "../styles/components/modal.scss";
import Carousel from "./Carousel";

function Modal(props) {
  const { project } = props;

  if (!project) {
    return null;
  }

  const modalClasses = ["modal-content"];
  if (project.entering) {
    modalClasses.push("modal-entering");
  }

  return (
    <div className="modal">
      <div className={modalClasses.join(" ")}>
        <h2>{project.title}</h2>

        <Carousel images={project.imageModal} />
        <div className="modal-elements">
          <p>{project.modalText}</p>
          <div className="logos">
            {project.langagelogo.map((logo, index) => (
              <img key={index} src={logo} alt={`Logo ${index + 1}`} />
            ))}
          </div>

          <a
            href={project.lienprojet}
            target="_blank"
            rel="noopener noreferrer"
          >
            Lien vers le repository GitHub
          </a>
        </div>

        <button onClick={props.onClose} className="button-modal">
          Fermer
        </button>
      </div>
    </div>
  );
}

export default Modal;
