import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons"; // Importez l'icône pour "x"
import "../styles/components/collapse.scss";

const Collapse = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`collapse ${isCollapsed ? "" : "open"}`}
      onClick={handleToggleCollapse}
    >
      <div className="collapse-header">
        <h2>{title}</h2>
        <button className="collapse-toggle" onClick={handleToggleCollapse}>
          <FontAwesomeIcon icon={isCollapsed ? faPlus : faTimes} />{" "}
          {/* Utilisez l'icône appropriée en fonction de l'état */}
        </button>
      </div>
      {!isCollapsed && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;
