import { useState } from "react";
import { speakers } from "../data/data";
import SpeakerCard from "../components/SpeakerCard";
import "./Speakers.css";

const tracks = ["All", "Web Dev", "AI/ML", "Open Source"];

function Speakers() {
  const [activeTrack, setActiveTrack] = useState("All");

  const filteredSpeakers =
    activeTrack === "All"
      ? speakers
      : speakers.filter((speaker) => speaker.tracks.includes(activeTrack));

  return (
    <div className="page speakers-page">
      <h1>Speakers</h1>
      <p className="page-subtitle">Meet the people speaking at this year's conference.</p>

      <div className="track-filter">
        {tracks.map((track) => (
          <button
            key={track}
            className={activeTrack === track ? "filter-btn active" : "filter-btn"}
            onClick={() => setActiveTrack(track)}
          >
            {track}
          </button>
        ))}
      </div>

      <div className="speaker-grid">
        {filteredSpeakers.map((speaker) => (
          <SpeakerCard key={speaker.id} speaker={speaker} />
        ))}
      </div>
    </div>
  );
}

export default Speakers;
