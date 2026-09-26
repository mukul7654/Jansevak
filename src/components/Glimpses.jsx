import { useState } from "react";
import { IMG_FLAGS, IMG_MEETING, IMG_ROAD, IMG_SPEECH } from "../assets/images";
import "./Glimpses.css";

const TABS = ["All Photos", "Campaign", "Community", "Projects"];

const PHOTOS = [
  { id: 1, category: "Campaign", image: IMG_FLAGS },
  { id: 2, category: "Community", image: IMG_MEETING },
  { id: 3, category: "Projects", image: IMG_ROAD },
  { id: 4, category: "Campaign", image: IMG_SPEECH },
  { id: 5, category: "Projects", image: IMG_ROAD },
  { id: 6, category: "Community", image: IMG_MEETING },
  { id: 7, category: "Campaign", image: IMG_FLAGS },
  { id: 8, category: "Projects", image: IMG_SPEECH },
];

export default function Glimpses() {
  const [active, setActive] = useState(TABS[0]);

  const visible =
    active === "All Photos"
      ? PHOTOS
      : PHOTOS.filter((p) => p.category === active);

  return (
    <section className="glimpses section bg-white" id="events">
      <div className="container">
        <div className="section-head-row">
          <div>
            <h2 className="section-heading">Glimpses of Service</h2>
          </div>
          <a href="#all-glimpses" className="btn btn-outline btn-sm">
            View All Glimpses
          </a>
        </div>

        <div className="glimpses__tabs">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`glimpses__tab ${active === tab ? "is-active" : ""}`}
              onClick={() => setActive(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="glimpses__grid">
          {visible.map((p) => (
            <div
              className="glimpse-tile"
              key={p.id}
              style={{ backgroundImage: `url(${p.image})` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
