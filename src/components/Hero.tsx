import { name, role, description, email, education } from "../content.js";
import WindowCard from "./WindowCard.js";

const terminalLines = [
  { prompt: "~$", cmd: "whoami", out: "surajit_tunga" },
  { prompt: "~$", cmd: "cat passion.txt", out: "Building scalable apps with AI ✦" },
  { prompt: "~$", cmd: "ls skills/", out: "java  javascript  python  react  node  mongodb" },
  { prompt: "~$", cmd: "cat focus.txt", out: "Full-stack development & AI" },
];

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

          <div className="hero-visual">
            {/* Terminal window */}
            <div className="hero-terminal">
              <div className="terminal-titlebar">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                <span className="terminal-title">surajit@portfolio: ~</span>
              </div>
              <div className="terminal-body">
                {terminalLines.map((line, i) => (
                  <div key={i} className="terminal-line">
                    <span className="terminal-prompt">{line.prompt}</span>
                    <span className="terminal-cmd"> {line.cmd}</span>
                    <div className="terminal-out">{line.out}</div>
                  </div>
                ))}
                <div className="terminal-line">
                  <span className="terminal-prompt">~$</span>
                  <span className="terminal-cursor">▋</span>
                </div>
              </div>
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
