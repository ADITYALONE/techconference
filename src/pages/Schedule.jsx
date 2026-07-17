import { useState } from "react";
import { sessions } from "../data/data";
import SessionCard from "../components/SessionCard";
import "./Schedule.css";

const tabs = ["Web Dev", "AI/ML", "Open Source"];

function Schedule() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const sessionsForTab = sessions.filter((session) => session.track === activeTab);

  return (
    <div className="page">
      <h1>Schedule</h1>
      <p className="page-subtitle">Pick a track to see what's happening.</p>

      <div className="schedule-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "tab-btn active" : "tab-btn"}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="session-list">
        {sessionsForTab.map((session) => (
          <SessionCard key={session.id} session={session} />
        ))}
      </div>
    </div>
  );
}

export default Schedule;
