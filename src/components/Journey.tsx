import { achievements } from "../content.js";
import WindowCard from "./WindowCard.js";

export default function Journey() {
  return (
    <div className="journey-strip">
      <div className="section">
        <h2 className="section-header">Journey</h2>
        <div className="timeline">
          {achievements.map((item) => (
            <div key={item.id} className="timeline-item">
              <WindowCard title={item.title} className="timeline-card">
                <span className="timeline-year">{item.year}</span>
                <span className="timeline-title">{item.title}</span>
                <p className="timeline-desc">{item.description}</p>
              </WindowCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
