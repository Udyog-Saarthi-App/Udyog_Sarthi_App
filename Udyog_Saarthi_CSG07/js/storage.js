// Basic LocalStorage helpers (kept intentionally small)
function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Failed to save', e);
  }
}

function load(key) {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : null;
  } catch (e) {
    console.error('Failed to load', e);
    return null;
  }
}

function remove(key) {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.error('Failed to remove', e);
  }
}
