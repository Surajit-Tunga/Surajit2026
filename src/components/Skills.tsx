import { skills } from "../content.js";
import WindowCard from "./WindowCard.js";

export default function Skills() {
  return (
    <div className="skills-strip">
      <div className="section">
        <h2 className="section-header">Skills</h2>
        <div className="skills-domains">
          {skills.map((domain) => (
            <WindowCard key={domain.domain} title={domain.domain} className="skill-domain-card">
              {domain.items.map((item) => (
                <span key={item.name} className="skill-tag">
                  <img src={item.icon} alt={item.name} />
                  {item.name}
                </span>
              ))}
            </WindowCard>
          ))}
        </div>
      </div>
    </div>
  );
}
