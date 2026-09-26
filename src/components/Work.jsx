import { IconGrid, IconPerson, IconLeaf } from "./Icons";
import "./Work.css";

const ITEMS = [
  {
    icon: <IconGrid />,
    title: "Rural Development",
    text: "Improving rural infrastructure, roads, and basic facilities.",
  },
  {
    icon: <IconPerson />,
    title: "Education Initiatives",
    text: "Building schools and supporting education for all.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
        <path
          d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path d="M8 7h8M8 11h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
    title: "Healthcare Projects",
    text: "Providing better healthcare facilities and support.",
  },
  {
    icon: <IconLeaf />,
    title: "Employment Programs",
    text: "Creating job opportunities and supporting local businesses.",
  },
];

export default function Work() {
  return (
    <section className="work section bg-light" id="work">
      <div className="container">
        <div className="section-head-row">
          <div>
            <h2 className="section-heading">My Work</h2>
            <p className="section-sub">
              Some of the key Initiative and achievements towards a better society.
            </p>
          </div>
          <a href="#all-work" className="btn btn-outline btn-sm work__view-all">
            View All Work
          </a>
        </div>

        <div className="work__grid">
          {ITEMS.map((item) => (
            <div className="work-card" key={item.title}>
              <div className="work-card__icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href="#read" className="work-card__link">
                Read More <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}