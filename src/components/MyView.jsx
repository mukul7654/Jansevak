import { IMG_FLAGS, IMG_MEETING, IMG_ROAD, IMG_SPEECH } from "../assets/images";
import "./MyView.css";

const PHOTOS = [
  { id: 1, image: IMG_FLAGS },
  { id: 2, image: IMG_MEETING },
  { id: 3, image: IMG_ROAD },
  { id: 4, image: IMG_SPEECH },
  { id: 5, image: IMG_ROAD },
  { id: 6, image: IMG_MEETING },
];

export default function MyView() {
  return (
    <section className="myview section bg-light" id="media-2">
      <div className="container">
        <div className="section-head-row">
          <div>
            <h2 className="section-heading">My View</h2>
            <p className="section-sub">
              Reflections from the road — the ideas, moments and people
              shaping the mission.
            </p>
          </div>
          <a href="#all-glimpses" className="btn btn-outline btn-sm">
            View All Glimpses
          </a>
        </div>

        <div className="myview__grid">
          {PHOTOS.map((p) => (
            <div
              className={`myview-tile myview-tile--${p.id}`}
              key={p.id}
              style={{ backgroundImage: `url(${p.image})` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
