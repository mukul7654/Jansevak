import { IconPlay } from "./Icons";
import { GALLERY_IMAGES } from "../assets/images";
import "./VideoGallery.css";

const VIDEOS = [
  "Public Rally for a Better Tomorrow",
  "Interview on Future Development Plans",
  "Meeting with Youth Delegates",
  "Launch of the New Development Project",
  "Speech on Education for All",
  "Visit to Rural Development Sites",
  "Healthcare Camp Inauguration",
  "Community Town Hall Discussion",
].map((caption, i) => ({
  id: i + 1,
  caption,
  image: GALLERY_IMAGES[i % GALLERY_IMAGES.length],
}));

export default function VideoGallery() {
  return (
    <section className="videos section bg-light" id="media">
      <div className="container">
        <div className="section-head-row">
          <div>
            <h2 className="section-heading">Video Gallery</h2>
            <p className="section-sub">
              Speeches, interviews and public engagements — straight from the
              ground.
            </p>
          </div>
          <a href="#all-videos" className="btn btn-outline btn-sm">
            View All Videos
          </a>
        </div>

        <div className="videos__grid">
          {VIDEOS.map((v) => (
            <div
              className="video-card"
              key={v.id}
              style={{ backgroundImage: `url(${v.image})` }}
            >
              <div className="video-card__overlay" />
              <button className="video-card__play" aria-label="Play video">
                <IconPlay />
              </button>
              <p>{v.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
