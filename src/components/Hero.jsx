import { IconPerson, IconGrid, IconLeaf, IconRefresh, IconPlay } from "./Icons";
import "./Hero.css";

const FEATURES = [
  {
    icon: <IconPerson />,
    bg: "orange-light",
    title: "People First",
    text: "Putting people's needs and well-being at the heart of everything.",
  },
  {
    icon: <IconGrid />,
    bg: "blue-light",
    title: "Transparent Leadership",
    text: "Honest, accountable and transparent governance for everyone.",
  },
  {
    icon: <IconLeaf />,
    bg: "green-solid",
    title: "Development for All",
    text: "Inclusive growth and equal opportunities for every citizen.",
  },
  {
    icon: <IconRefresh />,
    bg: "orange-solid",
    title: "Stronger Tomorrow",
    text: "Building a better, stronger and self-reliant India together.",
  },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background Image Layer */}
      <div className="hero__bg"></div>

      <div className="container hero__inner">
        <span className="eyebrow">Together We Can</span>
        <h1 className="hero__title">
          Build a Better <span>Tomorrow</span>
        </h1>
        <p className="hero__desc">
          Committed to the people, dedicated to progress. Working today for a
          stronger, better and self-reliant tomorrow.
        </p>
        <div className="hero__actions">
          <a href="#about" className="btn btn-green">
            Know More About Me
          </a>
          <a href="#video" className="hero__watch">
            <span className="hero__watch-icon">
              <IconPlay />
            </span>
            Watch Video
          </a>
        </div>
      </div>

      <div className="container">
  <div className="hero__features">
    {FEATURES.map((f) => (
      <div className="feature-card" key={f.title}>
        <div className={`feature-card__icon feature-card__icon--${f.bg}`}>
          {f.icon}
        </div>
        <div className="feature-card__content">
          <h3>{f.title}</h3>
          <p>{f.text}</p>
        </div>
      </div>
    ))}
  </div>
</div>
    </section>
  );
}