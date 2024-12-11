import React from "react";
import "./Projects.css";
import { useLanguage } from "../../context/LanguageContext";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const { globalTexts, projectsData } = useLanguage();
  return (
    <section className="container" id="projects">
      <h2 className="section-title">{globalTexts.sectionProjects}</h2>
      <div className="projects">
        {projectsData.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
