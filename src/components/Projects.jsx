import { useState } from "react";
import projects from "../data/projects";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    "All",
    "Power BI",
    "AI",
    "Data Engineering",
    "Experiments & Systems",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="section-heading">
        <span>02</span>
        <h2>Selected Work</h2>
      </div>

      <div className="project-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={activeFilter === category ? "active" : ""}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <article
            className="project-card"
            key={project.id}
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-preview">
              <span>{project.number}</span>

              <div className="project-preview-lines">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>

            <div className="project-card-content">
              <div>
                <p className="project-category">{project.category}</p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>
              </div>

              <span className="project-arrow">↗</span>
            </div>

            <div className="project-tech">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

            <p className="project-category">
              {selectedProject.category}
            </p>

            <h2>{selectedProject.title}</h2>

            <p className="modal-description">
              {selectedProject.description}
            </p>

            <div className="modal-section">
              <span>THE PROBLEM</span>
              <p>{selectedProject.problem}</p>
            </div>

            <div className="modal-section">
              <span>THE APPROACH</span>
              <p>{selectedProject.approach}</p>
            </div>

            <div className="modal-section">
              <span>WHAT I LEARNED</span>
              <p>{selectedProject.learning}</p>
            </div>

            <div className="modal-technologies">
              {selectedProject.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <div className="modal-links">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;