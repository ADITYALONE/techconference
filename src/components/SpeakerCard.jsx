import Badge from "./Badge";
import "./SpeakerCard.css";

function SpeakerCard({ speaker }) {
  return (
    <div className="speaker-card">
      <div className="speaker-photo">photo</div>
      <h3>{speaker.name}</h3>
      <p className="speaker-title">{speaker.title}</p>
      <p className="speaker-bio">{speaker.bio}</p>
      <div>
        {speaker.tracks.map((track) => (
          <Badge key={track} label={track} />
        ))}
      </div>
    </div>
  );
}

export default SpeakerCard;
