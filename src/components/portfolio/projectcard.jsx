import React from "react";
import "./projectcard.css";

const ProjectCard = ({ title, image, description, link }) => {
  return (
    <div className="project-card" onClick={() => window.open(link, "_blank")}>
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
