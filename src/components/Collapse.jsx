import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/collapse.scss";

const Collapse = ({ title, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="collapse">
      <div className="collapse-header">
        <h2>{title}</h2>
        <button className="collapse-toggle" onClick={handleToggleCollapse}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      {!isCollapsed && <p className="collapse-content">{content}</p>}
    </div>
  );
};

export default Collapse;
