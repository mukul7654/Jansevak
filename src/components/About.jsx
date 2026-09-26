import { IconPerson, IconAward } from "./Icons";
import "./About.css";

const STATS = [
  { icon: <IconPerson />, value: "15+", label: "Years of Public Service" },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
        <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="13" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="4" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="13" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    value: "50+",
    label: "Project Completed",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
        <circle cx="8" cy="9" r="3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16" cy="9" r="3" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M2.5 19c.8-3 3-4.7 5.5-4.7s4.7 1.7 5.5 4.7M12.5 19c.7-2.6 2.6-4.7 5.5-4.7 2 0 3.7 1 4.5 2.7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    value: "1.5L+",
    label: "People Connected",
  },
  { icon: <IconAward />, value: "25+", label: "Awards & Recognition" },
];

export default function About() {
  return (
    <section className="about section bg-light" id="about">
      <div className="container about__grid">
        {/* Left Content */}
        <div className="about__text">
          <h2 className="section-heading">About Me</h2>
          <p className="section-sub">
            I am committed to serve the people and work for the overall
            development of our society. My journey in public life is driven by
            trust, transparency and dedication.
          </p>
          <a href="#more" className="btn btn-navy about__cta">
            Read More
          </a>
        </div>

        {/* Right Stats Card */}
        <div className="about__stats">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat__icon">{s.icon}</div>
              <div className="stat__info">
                <div className="stat__value">{s.value}</div>
                <div className="stat__label">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}