import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ticketTiers, eventDate } from "../data/data";
import { saveRegistration, setLastRegistrationId } from "../utils/registrationStore";
import TicketTierCard from "../components/TicketTierCard";
import Button from "../components/Button";
import "./Register.css";

function Register() {
  const [step, setStep] = useState(1);
  const [tier, setTier] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", school: "", dietary: "" });
  const [errors, setErrors] = useState({});
  const [confirmation, setConfirmation] = useState(null);
  const navigate = useNavigate();

  function handleFieldChange(field, value) {
    setForm({ ...form, [field]: value });
  }

  function validateForm() {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit() {
    if (!validateForm()) return;
    const registration = saveRegistration({ tier, ...form });
    setLastRegistrationId(registration.id);
    setConfirmation(registration);
    setStep(3);
  }

  const selectedTier = ticketTiers.find((t) => t.id === tier);

  return (
    <div className="page register-page">
      <h1>Register</h1>

      <div className="step-indicator">
        <div className={step >= 1 ? "step active" : "step"}>1. Ticket</div>
        <div className={step >= 2 ? "step active" : "step"}>2. Your Info</div>
        <div className={step >= 3 ? "step active" : "step"}>3. Confirm</div>
      </div>

      {step === 1 && (
        <div>
          <h2>Pick a Ticket</h2>
          <div className="tier-list">
            {ticketTiers.map((t) => (
              <TicketTierCard
                key={t.id}
                tier={t}
                selected={tier === t.id}
                onSelect={setTier}
              />
            ))}
          </div>
          <div className="step-actions">
            <Button disabled={!tier} onClick={() => setStep(2)}>
              Next
            </Button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Your Info</h2>
          <div className="form-field">
            <label>Full Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => handleFieldChange("name", e.target.value)}
            />
            {errors.name && <p className="field-error">{errors.name}</p>}
          </div>

          <div className="form-field">
            <label>Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => handleFieldChange("email", e.target.value)}
            />
            {errors.email && <p className="field-error">{errors.email}</p>}
          </div>

          <div className="form-field">
            <label>School / Organization</label>
            <input
              type="text"
              value={form.school}
              onChange={(e) => handleFieldChange("school", e.target.value)}
            />
          </div>

          <div className="form-field">
            <label>Dietary Restrictions</label>
            <input
              type="text"
              placeholder="e.g. vegetarian, none"
              value={form.dietary}
              onChange={(e) => handleFieldChange("dietary", e.target.value)}
            />
          </div>

          <div className="step-actions">
            <Button variant="secondary" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </div>
      )}

      {step === 3 && confirmation && (
        <div className="confirmation-box">
          <h2>You're Registered!</h2>
          <p className="confirmation-number">Confirmation #{confirmation.id}</p>
          <p><strong>Tier:</strong> {selectedTier?.name}</p>
          <p><strong>Name:</strong> {confirmation.name}</p>
          <p><strong>Email:</strong> {confirmation.email}</p>
          <p><strong>Event Date:</strong> {new Date(eventDate).toLocaleDateString()}</p>
          <div className="step-actions">
            <Button onClick={() => navigate("/my-registration")}>
              View My Registration
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
