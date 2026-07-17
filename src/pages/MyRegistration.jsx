import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getRegistration,
  updateRegistration,
  deleteRegistration,
  getLastRegistrationId,
} from "../utils/registrationStore";
import { ticketTiers } from "../data/data";
import Button from "../components/Button";
import "./MyRegistration.css";

function MyRegistration() {
  const [registrationId, setRegistrationId] = useState("");
  const [registration, setRegistration] = useState(null);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", school: "", dietary: "" });
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const lastId = getLastRegistrationId();
    if (lastId) {
      const found = getRegistration(lastId);
      if (found) {
        setRegistrationId(lastId);
        setRegistration(found);
        setForm(found);
      }
    }
  }, []);

  function handleLookup(e) {
    e.preventDefault();
    const found = getRegistration(registrationId.trim());
    if (found) {
      setRegistration(found);
      setForm(found);
      setNotFound(false);
    } else {
      setRegistration(null);
      setNotFound(true);
    }
  }

  function handleEditToggle() {
    setForm(registration);
    setEditing(true);
  }

  function handleSaveEdit() {
    const updated = updateRegistration(registration.id, form);
    setRegistration(updated);
    setEditing(false);
  }

  function handleCancelRegistration() {
    const confirmed = window.confirm(
      "Are you sure you want to cancel your registration? This cannot be undone."
    );
    if (!confirmed) return;
    deleteRegistration(registration.id);
    setRegistration({ ...registration, status: "cancelled" });
  }

  const tierName = registration
    ? ticketTiers.find((t) => t.id === registration.tier)?.name
    : null;

  return (
    <div className="page">
      <h1>My Registration</h1>

      {!registration && (
        <div className="lookup-box">
          <p className="page-subtitle">Enter your confirmation number to view your registration.</p>
          <form onSubmit={handleLookup} className="lookup-form">
            <input
              type="text"
              placeholder="Confirmation number"
              value={registrationId}
              onChange={(e) => setRegistrationId(e.target.value)}
            />
            <Button type="submit">Look Up</Button>
          </form>
          {notFound && <p className="field-error">No registration found with that number.</p>}
          <p className="not-registered">
            Not registered yet? <Link to="/register">Register here</Link>.
          </p>
        </div>
      )}

      {registration && registration.status === "cancelled" && (
        <div className="registration-card cancelled">
          <p>This registration has been cancelled.</p>
          <Link to="/register">Register again</Link>
        </div>
      )}

      {registration && registration.status !== "cancelled" && !editing && (
        <div className="registration-card">
          <p><strong>Confirmation #:</strong> {registration.id}</p>
          <p><strong>Tier:</strong> {tierName}</p>
          <p><strong>Name:</strong> {registration.name}</p>
          <p><strong>Email:</strong> {registration.email}</p>
          <p><strong>School / Organization:</strong> {registration.school || "N/A"}</p>
          <p><strong>Dietary Restrictions:</strong> {registration.dietary || "None"}</p>
          <p><strong>Registered:</strong> {new Date(registration.registeredAt).toLocaleString()}</p>

          <div className="step-actions">
            <Button variant="secondary" onClick={handleEditToggle}>Edit Registration</Button>
            <Button variant="danger" onClick={handleCancelRegistration}>Cancel Registration</Button>
          </div>
        </div>
      )}

      {registration && editing && (
        <div className="registration-card">
          <div className="form-field">
            <label>Full Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="form-field">
            <label>Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="form-field">
            <label>School / Organization</label>
            <input
              type="text"
              value={form.school}
              onChange={(e) => setForm({ ...form, school: e.target.value })}
            />
          </div>
          <div className="form-field">
            <label>Dietary Restrictions</label>
            <input
              type="text"
              value={form.dietary}
              onChange={(e) => setForm({ ...form, dietary: e.target.value })}
            />
          </div>
          <div className="step-actions">
            <Button variant="secondary" onClick={() => setEditing(false)}>Cancel</Button>
            <Button onClick={handleSaveEdit}>Save Changes</Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyRegistration;
