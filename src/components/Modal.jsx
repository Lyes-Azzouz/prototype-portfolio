import React from "react";
import projectsData from "../projets.json";
import "../styles/components/modal.scss";

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
        <p>{project.modalText}</p>

        {project.imageModal.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}

        {project.langagelogo.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 1}`} />
        ))}

        <a href={project.lienprojet} target="_blank" rel="noopener noreferrer">
          Lien vers le projet
        </a>

        <button onClick={props.onClose}>Fermer</button>
      </div>
    </div>
  );
}

export default Modal;
