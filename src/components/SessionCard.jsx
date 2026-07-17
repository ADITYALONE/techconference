import Badge from "./Badge";
import "./SessionCard.css";

function SessionCard({ session }) {
  return (
    <div className="session-card">
      <div className="session-time">{session.time}</div>
      <div className="session-info">
        <h4>{session.title}</h4>
        <p className="session-room">Room: {session.room}</p>
        <Badge label={session.track} />
      </div>
    </div>
  );
}

export default SessionCard;
