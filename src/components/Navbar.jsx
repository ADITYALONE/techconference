import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/speakers", label: "Speakers" },
  { to: "/schedule", label: "Schedule" },
  { to: "/register", label: "Register" },
  { to: "/my-registration", label: "My Registration" },
  { to: "/faq", label: "FAQ" },
  { to: "/venue", label: "Venue" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          Tech<span>Conference</span>
        </NavLink>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={menuOpen ? "navbar-links open" : "navbar-links"}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
