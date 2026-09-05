import { useState } from "react";
import { projects } from "../content.js";
import WindowCard from "./WindowCard.js";

const LEVELS = ["Intermediate", "Beginner", "Starter"]; // "Expert", "Advanced", 

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState(LEVELS[0]);

  const filtered = projects.filter((p) => p.level === activeFilter);

  return (
    <div id="projects" className="projects-strip">
      <div className="section">
        <h2 className="section-header">Projects</h2>
        <div className="filter-bar">
          {LEVELS.map((lvl) => (
            <button
              key={lvl}
              className={`filter-btn${activeFilter === lvl ? " active" : ""}`}
              onClick={() => setActiveFilter(lvl)}
            >
              {lvl}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filtered.length === 0 ? (
            <div className="project-empty">No projects at this level yet!</div>
          ) : (
            filtered.map((proj) => (
              <WindowCard key={proj.id} title={proj.name} className="project-card">
                <span className="project-name">{proj.name}</span>
                <span className="project-level">{proj.level}</span>
                <div className="project-stack">
                  {proj.techStack.map((t) => (
                    <span key={t} className="stack-tag">{t}</span>
                  ))}
                </div>
                <p className="project-desc">{proj.description}</p>
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm" style={{ width: "fit-content" }}>
                  GitHub ↗
                </a>
              </WindowCard>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
