import { experience, experienceFallback } from "../content.js";
import WindowCard from "./WindowCard.js";

export default function Experience() {
  return (
    <div className="section">
      <h2 className="section-header">Experience</h2>
      {experience.length === 0 ? (
        <div className="exp-fallback">{experienceFallback}</div>
      ) : (
        <div className="exp-list">
          {experience.map((exp) => (
            <WindowCard key={exp.id} title={exp.company} className="exp-card">
              <div className="exp-header">
                <span className="exp-company">{exp.company}</span>
                <span className="exp-duration">{exp.duration}</span>
              </div>
              <div className="exp-role-line">
                <span className="exp-role">{exp.role}</span>
                <span className="exp-mode">{exp.mode}</span>
              </div>
              <p className="exp-desc">{exp.description}</p>
              {exp.blogLink && (
                <a href={exp.blogLink} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm" style={{ width: "fit-content" }}>
                  Blog ↗
                </a>
              )}
            </WindowCard>
          ))}
        </div>
      )}
    </div>
  );
}
