import { publications } from "../content.js";
import WindowCard from "./WindowCard.js";

export default function Publications() {
  return (
    <div className="publications-strip">
      <div className="section">
        <h2 className="section-header">Publications</h2>
        <div className="timeline">
          {publications.map((item) => (
            <div key={item.id} className="timeline-item">
              <WindowCard title={item.publisher} className="timeline-card">
                <span className="timeline-year">{item.year}</span>
                <span className="timeline-title">{item.title}</span>
                <p className="timeline-desc">{item.description}</p>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-sm"
                    style={{ width: "fit-content" }}
                  >
                    See More ↗
                  </a>
                )}
              </WindowCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
