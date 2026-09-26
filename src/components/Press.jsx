import "./Press.css";

const ITEMS = [
  {
    tag: "Press Released",
    title: "New Development Project Launched in Noida",
  },
  { tag: "News", title: "Meeting with Youth Delegates" },
  { tag: "Media", title: "Interview on Future Development Plans" },
  { tag: "Event", title: "Public Rally for a Better Tomorrow" },
];

export default function Press() {
  return (
    <section className="press section bg-white" id="news">
      <div className="container">
        <div className="section-head-row">
          <div>
            <h2 className="section-heading">In The Press</h2>
            <p className="section-sub">
              Coverage from leading national and regional publications.
            </p>
          </div>
          <a href="#coverage" className="btn btn-outline btn-sm">
            All Coverage
          </a>
        </div>

        <div className="press__grid">
          {ITEMS.map((item) => (
            <div className="press-card" key={item.title}>
              <span className="press-card__tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <a href="#read" className="link-arrow">
                Read More <span>&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
