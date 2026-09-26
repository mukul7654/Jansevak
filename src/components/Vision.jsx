import { IconCheck } from "./Icons";
import "./Vision.css";

const POINTS = [
  "Quality education for every child",
  "Healthcare for every citizen",
  "Employment and skill development",
  "Infrastructure and rural development",
];

export default function Vision() {
  return (
    <section className="vision section bg-white" id="vision">
      <div className="container vision__inner">
        <h2 className="section-heading">My Vision</h2>
        <p className="section-sub">
          A Strong Vision for a developed, empowered and united society.
        </p>

        <ul className="vision__list">
          {POINTS.map((point) => (
            <li key={point}>
              <span className="vision__icon">
                <IconCheck />
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <a href="#more" className="btn btn-navy vision__btn">
          Read More
        </a>
      </div>
    </section>
  );
}