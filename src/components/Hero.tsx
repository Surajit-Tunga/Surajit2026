import { name, role, description, profileImage, email, education } from "../content.js";
import WindowCard from "./WindowCard.js";

export default function Hero() {
  const mailtoHref = `mailto:${email}`;

  return (
    <>
      <div className="hero-strip">
        <div className="section">
          <div className="hero-text">
            <h1>{name}</h1>
            <span className="role-badge">{role}</span>
            <p>{description}</p>
            <div className="hero-ctas">
              <a href={mailtoHref} className="btn btn-primary">Connect via Mail</a>
              <a href="#projects" className="btn btn-secondary">View Projects</a>
            </div>
          </div>
          <div className="hero-image-side">
            <div className="profile-frame">
              <img src={profileImage} alt={`${name} profile`} />
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-header">Education</h2>
        <div className="edu-row">
          {education.map((edu) => (
            <WindowCard key={edu.id} title={edu.institute} className="edu-card">
              <span className="edu-institute">{edu.institute}</span>
              <span className="edu-course">{edu.course}</span>
              <div className="edu-meta">
                <span>{edu.score}</span>
                <span>{edu.duration}</span>
              </div>
            </WindowCard>
          ))}
        </div>
      </div>
    </>
  );
}
