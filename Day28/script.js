const form = document.getElementById('contactForm');
const statusEl = document.getElementById('status');
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');
const clearDraftBtn = document.getElementById('clearDraftBtn');

const fields = {
  name: document.getElementById('name'),
  email: document.getElementById('email'),
  phone: document.getElementById('phone'),
  subject: document.getElementById('subject'),
  message: document.getElementById('message'),
};
const helps = {
  name: document.getElementById('nameHelp'),
  email: document.getElementById('emailHelp'),
  phone: document.getElementById('phoneHelp'),
  subject: document.getElementById('subjectHelp'),
  message: document.getElementById('messageHelp'),
};
const charCount = document.getElementById('charCount');

const result = document.getElementById('result');
const resultJson = document.getElementById('resultJson');

const DRAFT_KEY = 'contact_draft_v1';
let sending = false;

// Utils
const debounce = (fn, ms = 200) => {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
const phoneRegex = /^[+]?([0-9][\s-]?){7,}$/; // locker, international-freundlich

function setInvalid(field, msg) {
  const wrapper = field.closest('.field');
  wrapper.classList.add('invalid');
  helps[field.id].textContent = msg;
  field.setAttribute('aria-invalid', 'true');
}
function setValid(field) {
  const wrapper = field.closest('.field');
  wrapper.classList.remove('invalid');
  helps[field.id].textContent = '';
  field.removeAttribute('aria-invalid');
}

function validateName() {
  const v = fields.name.value.trim();
  if (v.length < 2) return setInvalid(fields.name, 'Mindestens 2 Zeichen.');
  if (v.length > 50) return setInvalid(fields.name, 'Maximal 50 Zeichen.');
  setValid(fields.name);
  return true;
}
function validateEmail() {
  const v = fields.email.value.trim();
  if (!v) return setInvalid(fields.email, 'E-Mail ist erforderlich.');
  if (!emailRegex.test(v)) return setInvalid(fields.email, 'Bitte eine gültige E-Mail eingeben.');
  setValid(fields.email);
  return true;
}
function validatePhone() {
  const v = fields.phone.value.trim();
  if (!v) {
    setValid(fields.phone);
    return true; // optional
  }
  const normalized = v.replace(/[()\s-]/g, '');
  if (!phoneRegex.test(normalized))
    return setInvalid(fields.phone, 'Telefonnummer prüfen (z. B. +49 151 12345678).');
  setValid(fields.phone);
  return true;
}
function validateSubject() {
  const v = fields.subject.value.trim();
  if (v.length < 3) return setInvalid(fields.subject, 'Mindestens 3 Zeichen.');
  if (v.length > 80) return setInvalid(fields.subject, 'Maximal 80 Zeichen.');
  setValid(fields.subject);
  return true;
}
function validateMessage() {
  const v = fields.message.value.trim();
  charCount.textContent = `${v.length} / 1000`;
  if (v.length < 10) return setInvalid(fields.message, 'Mindestens 10 Zeichen.');
  if (v.length > 1000) return setInvalid(fields.message, 'Maximal 1000 Zeichen.');
  setValid(fields.message);
  return true;
}

function validateForm() {
  const ok = [
    validateName(),
    validateEmail(),
    validatePhone(),
    validateSubject(),
    validateMessage(),
  ].every(Boolean);
  submitBtn.disabled = !ok || sending;
  return ok;
}

// Live events
fields.name.addEventListener('input', debounce(() => { validateName(); validateForm(); }));
fields.email.addEventListener('input', debounce(() => { validateEmail(); validateForm(); }));
fields.phone.addEventListener('input', debounce(() => { validatePhone(); validateForm(); }));
fields.subject.addEventListener('input', debounce(() => { validateSubject(); validateForm(); }));
fields.message.addEventListener('input', debounce(() => { validateMessage(); validateForm(); }));

['blur'].forEach(ev => {
  Object.values(fields).forEach(f => f.addEventListener(ev, () => { validateForm(); }));
});

// Draft Storage
function saveDraft() {
  const data = Object.fromEntries(new FormData(form).entries());
  localStorage.setItem(DRAFT_KEY, JSON.stringify(data));
}
function loadDraft() {
  const raw = localStorage.getItem(DRAFT_KEY);
  if (!raw) return;
  try {
    const data = JSON.parse(raw);
    Object.keys(fields).forEach(k => { if (data[k]) fields[k].value = data[k]; });
  } catch { }
}
function clearDraft() {
  localStorage.removeItem(DRAFT_KEY);
}

// Save draft on input
form.addEventListener('input', debounce(saveDraft, 300));
clearDraftBtn.addEventListener('click', () => {
  clearDraft();
  form.reset();
  charCount.textContent = '0 / 1000';
  Object.values(fields).forEach(setValid);
  validateForm();
  statusEl.textContent = '🗑️ Entwurf gelöscht.';
});
resetBtn.addEventListener('click', () => {
  form.reset();
  charCount.textContent = '0 / 1000';
  Object.values(fields).forEach(setValid);
  validateForm();
  statusEl.textContent = '↩️ Formular zurückgesetzt (Entwurf bleibt gespeichert).';
});

// Submit Simulation (später durch Python-Backend ersetzen)
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (sending) return;
  if (!validateForm()) {
    form.reportValidity?.();
    return;
  }

  sending = true;
  submitBtn.disabled = true;
  statusEl.textContent = '⏳ Sende Daten …';

  const payload = Object.fromEntries(new FormData(form).entries());

  // Simulation: „Server“ antwortet nach kurzer Zeit
  try {
    await new Promise(res => setTimeout(res, 900));
    statusEl.textContent = '✅ Gesendet.';
    result.classList.remove('hidden');
    result.setAttribute('aria-hidden', 'false');
    resultJson.textContent = JSON.stringify(payload, null, 2);

    // Nach erfolgreichem Senden Entwurf löschen
    clearDraft();
  } catch (err) {
    statusEl.textContent = '⚠️ Fehler beim Senden. Bitte später erneut versuchen.';
  } finally {
    sending = false;
    validateForm();
  }
});

// Init
window.addEventListener('load', () => {
  loadDraft();
  validateForm();
  validateMessage();
});
