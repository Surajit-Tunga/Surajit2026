export default function WindowCard({ title, children, className = "" }) {
  return (
    <div className={`window-card ${className}`}>
      <div className="window-titlebar">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="title-text">{title}</span>
      </div>
      <div className="window-body">{children}</div>
    </div>
  );
}
