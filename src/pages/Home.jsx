import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { eventDate, speakers } from "../data/data";
import SpeakerCard from "../components/SpeakerCard";
import Button from "../components/Button";
import "./Home.css";

function getTimeLeft() {
  const total = new Date(eventDate).getTime() - new Date().getTime();
  if (total <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
}

function Home() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const featuredSpeakers = speakers.slice(0, 4);

  return (
    <div>
      <section className="hero">
        <div className="hero-text">
          <h1>TechConference 2026</h1>
          <p className="hero-tagline">
            Three days. Three tracks. One room full of people who actually build things.
          </p>
          <Link to="/register">
            <Button>Register Now</Button>
          </Link>
        </div>

        <div className="countdown">
          <div className="countdown-boxes">
            <div className="countdown-box">
              <span className="countdown-number">{timeLeft.days}</span>
              <span className="countdown-label">Days</span>
            </div>
            <div className="countdown-box">
              <span className="countdown-number">{timeLeft.hours}</span>
              <span className="countdown-label">Hours</span>
            </div>
            <div className="countdown-box">
              <span className="countdown-number">{timeLeft.minutes}</span>
              <span className="countdown-label">Minutes</span>
            </div>
            <div className="countdown-box">
              <span className="countdown-number">{timeLeft.seconds}</span>
              <span className="countdown-label">Seconds</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Featured Speakers</h2>
        <div className="speaker-grid">
          {featuredSpeakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </section>

      <section className="section cta-section">
        <h2>Why Attend?</h2>
        <div className="cta-grid">
          <div className="cta-item">
            <h3>Learn from real practitioners</h3>
            <p>Every speaker is currently working in the field, not just talking about it.</p>
          </div>
          <div className="cta-item">
            <h3>Three tracks, one ticket</h3>
            <p>Move between Web Dev, AI/ML, and Open Source sessions all day.</p>
          </div>
          <div className="cta-item">
            <h3>Meet other developers</h3>
            <p>Lunch, coffee breaks, and an evening social are all built into the schedule.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
