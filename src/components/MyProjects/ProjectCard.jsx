import React from "react";
import "./ProjectCard.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className="project-card-container">
      <img
        src={imageSrc}
        alt={`Image of ${title}`}
        className="project-card-image"
      />
      <h3 className="project-card-title color-special">{title}</h3>
      <p className="project-card-description">{description}</p>
      <ul className="project-card-skills">
        {skills.map((skill, id) => {
          return (
            <li key={id} className="project-card-skill">
              {skill}
            </li>
          );
        })}
      </ul>
      <div className="project-card-links">
        <a href={demo} className="btn-primary">
          Navštívit
        </a>
        <a href={source} className="btn-primary">
          Github
        </a>
      </div>
    </div>
  );
};
