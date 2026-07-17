import { Link } from "react-router-dom";
import { useState } from "react";
import "./Footer.css";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h4>TechConference</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/speakers">Speakers</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/venue">Venue</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>hello@techconference.dev</p>
          <div className="social-links">
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Newsletter</h4>
          {subscribed ? (
            <p>Thanks, you're subscribed!</p>
          ) : (
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Sign up</button>
            </form>
          )}
        </div>
      </div>

      <p className="copyright">© 2026 TechConference. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
