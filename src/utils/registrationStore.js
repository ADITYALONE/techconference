const STORAGE_KEY = "techconf_registrations";

function readAll() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch (e) {
    return {};
  }
}

function writeAll(registrations) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(registrations));
}

export function saveRegistration(data) {
  const registrations = readAll();
  const id = Date.now().toString();
  const registration = {
    id,
    tier: data.tier,
    name: data.name,
    email: data.email,
    school: data.school,
    dietary: data.dietary,
    registeredAt: new Date().toISOString(),
    status: "confirmed",
  };
  registrations[id] = registration;
  writeAll(registrations);
  return registration;
}

export function getRegistration(id) {
  const registrations = readAll();
  return registrations[id] || null;
}

export function getAllRegistrations() {
  const registrations = readAll();
  return Object.values(registrations);
}

export function updateRegistration(id, updates) {
  const registrations = readAll();
  if (!registrations[id]) return null;
  registrations[id] = { ...registrations[id], ...updates };
  writeAll(registrations);
  return registrations[id];
}

export function deleteRegistration(id) {
  const registrations = readAll();
  if (!registrations[id]) return;
  registrations[id].status = "cancelled";
  writeAll(registrations);
}

export function getLastRegistrationId() {
  return localStorage.getItem("techconf_last_registration");
}

export function setLastRegistrationId(id) {
  localStorage.setItem("techconf_last_registration", id);
}
