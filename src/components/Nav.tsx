import { name, socials } from "../content.js";

export default function Nav() {
  return (
    <nav className="nav">
      <span className="nav-logo">{name.split(" ")[0]} ✦</span>
      <ul className="nav-socials">
        {socials.map((s) => (
          <li key={s.id}>
            <a href={s.url} target="_blank" rel="noopener noreferrer" title={s.label}>
              <img src={s.icon} alt={s.label} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
