import { IconMapPin, IconPhone, IconMail, IconGlobe } from "./Icons";
import "./Footer.css";

const QUICK_LINKS = ["Home", "About Me", "My Vision", "My Work", "Events", "Contact"];
const SERVICES = ["News", "Gallery", "Videos", "Volunteer", "Join with Us"];

const SOCIALS = [
  { label: "Facebook", path: "M15 3h-2a5 5 0 0 0-5 5v2H6v4h2v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3Z" },
  {
    label: "Instagram",
    path: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5ZM17.5 6.2a.9.9 0 1 0 .9.9.9.9 0 0 0-.9-.9Z",
  },
  {
    label: "LinkedIn",
    path: "M4.5 8.5h3V19h-3V8.5ZM6 4a1.8 1.8 0 1 1 0 3.6A1.8 1.8 0 0 1 6 4Zm4.5 4.5h2.9v1.4h.04c.4-.76 1.4-1.6 2.9-1.6 3.1 0 3.66 2 3.66 4.7V19h-3v-4.9c0-1.2 0-2.7-1.66-2.7s-1.9 1.3-1.9 2.6V19h-3V8.5Z",
  },
  {
    label: "Twitter",
    path: "M20 6.4a6.8 6.8 0 0 1-1.9.5 3.3 3.3 0 0 0 1.45-1.83 6.6 6.6 0 0 1-2.1.8 3.3 3.3 0 0 0-5.63 3 9.4 9.4 0 0 1-6.8-3.45 3.3 3.3 0 0 0 1 4.4 3.3 3.3 0 0 1-1.5-.4v.05a3.3 3.3 0 0 0 2.64 3.2 3.3 3.3 0 0 1-1.49.06 3.3 3.3 0 0 0 3.08 2.3A6.6 6.6 0 0 1 4 16.4a9.3 9.3 0 0 0 5.06 1.48c6.08 0 9.4-5.04 9.4-9.4v-.43A6.7 6.7 0 0 0 20 6.4Z",
  },
];

export default function Footer() {
  return (
    <footer className="footer bg-navy" id="contact">
      <div className="container footer__grid">
        <div className="footer__brand">
          <p>
            Committed to serve the people and work for the progress and
            development of our society.
          </p>
          <div className="footer__socials">
            {SOCIALS.map((s) => (
              <a href="#social" key={s.label} aria-label={s.label} className="footer__social">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            {QUICK_LINKS.map((l) => (
              <li key={l}>
                <a href="#link">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Our Services</h4>
          <ul>
            {SERVICES.map((l) => (
              <li key={l}>
                <a href="#link">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col footer__contact">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <IconMapPin />
              <span>123, Tech Park, Sector 62, Noida, Uttar Pradesh, India</span>
            </li>
            <li>
              <IconPhone />
              <span>+91 70606 1XXX</span>
            </li>
            <li>
              <IconMail />
              <span>hello@grysora.com</span>
            </li>
            <li>
              <IconGlobe />
              <span>www.grysora.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© 2025 Jansevak. All Rights Reserved.</p>
          <div className="footer__legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
