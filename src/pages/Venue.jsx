import "./Venue.css";

function Venue() {
  return (
    <div className="page">
      <h1>Venue</h1>
      <p className="page-subtitle">Here's where to find us.</p>

      <div className="venue-layout">
        <div className="map-placeholder">Map Placeholder</div>

        <div className="venue-details">
          <h3>Madison Convention Center</h3>
          <p>1 John Nolen Dr, Madison, WI 53703</p>

          <h4>Getting There</h4>
          <p>The venue is a 5 minute walk from the downtown transit center. If you're driving, the parking garage attached to the building is $12/day if you arrive before 9am.</p>

          <h4>Nearby Hotels</h4>
          <ul>
            <li>Hilton Madison Monona Terrace — 3 min walk</li>
            <li>The Edgewater — 10 min walk</li>
            <li>Graduate Madison — 15 min walk</li>
          </ul>

          <h4>Accessibility</h4>
          <p>The venue is fully wheelchair accessible, including all session rooms and restrooms.</p>
        </div>
      </div>
    </div>
  );
}

export default Venue;
