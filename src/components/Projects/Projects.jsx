import React from "react";
import "./projects.css";
import { projects } from "../../data";
import ProjectCard from "../../ui/Projectcard/ProjectCard";

function Projects() {
  return (
    <section id="projects">
      <div className="section__wrapper">
        <div className="section__header">
          <h2 className="shine">Projects</h2>
        </div>
        <div className="projects__container">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
