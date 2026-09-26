import { useState } from "react";
import { IconPhone } from "./Icons";
import "./Navbar.css";

const LINKS = [
  { label: "Home", href: "#home", active: true },
  { label: "About Us", href: "#about" },
  { label: "My Vision", href: "#vision" },
  { label: "Work", href: "#work" },
  { label: "Media", href: "#media" },
  { label: "Events", href: "#events" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        {/* Logo */}
        <a href="#home" className="navbar__logo">
          Jan<span>sevak</span>
        </a>

        {/* Links */}
        <nav className={`navbar__links ${open ? "is-open" : ""}`}>
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`navbar__link ${link.active ? "is-active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <div className="navbar__mobile-cta">
            <a href="#join" className="btn btn-green btn-sm">
              Join With Us
            </a>
          </div>
        </nav>

        {/* Right side */}
        <div className="navbar__right">
          <a href="tel:+91706061XXX" className="navbar__call">
            <span className="navbar__call-icon">
              <IconPhone />
            </span>
            <span className="navbar__call-text">
              <strong>+91 70606 1878</strong>
              <small>Call Us Anytime</small>
            </span>
          </a>

          <a href="#join" className="btn btn-green navbar__cta">
            Join With Us
          </a>

          <button
            className={`navbar__burger ${open ? "is-open" : ""}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}