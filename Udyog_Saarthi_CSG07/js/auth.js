// auth.js - signup + login + profile helpers + small toast + admin modal + excel export

// --- small utilities ----------------------------------------------------------------
function showToast(msg, timeout = 3000) {
  const t = document.getElementById('toast');
  if (!t) {
    console.warn('Toast element not found:', msg);
    return;
  }
  t.hidden = false;
  t.textContent = msg;
  clearTimeout(t._hid);
  t._hid = setTimeout(() => { t.hidden = true; }, timeout);
}

function fileToDataURL(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result);
    r.onerror = () => reject(new Error('File read error'));
    r.readAsDataURL(file);
  });
}

// --- main DOM ready boot -------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {

  // SIGNUP
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = (document.getElementById('name') || {}).value?.trim();
      const email = ((document.getElementById('email') || {}).value || '').trim().toLowerCase();
      const password = (document.getElementById('password') || {}).value || '';
      const disability = (document.getElementById('disability') || {}).value?.trim();

      const proofInput = document.getElementById('proof');
      const resumeInput = document.getElementById('resume');

      if (!name || !email || !password || !disability || !proofInput?.files?.length || !resumeInput?.files?.length) {
        showToast('Please complete all required fields.');
        return;
      }

      const proofFile = proofInput.files[0];
      const resumeFile = resumeInput.files[0];

      if (!resumeFile.name.toLowerCase().endsWith('.pdf')) {
        showToast('Resume must be a PDF.');
        return;
      }

      try {
        const proofData = await fileToDataURL(proofFile);
        const resumeData = await fileToDataURL(resumeFile);

        let users = load('users') || [];
        if (users.find(u => u.email === email)) {
          showToast('Email already registered. Please login.');
          return;
        }

        const newUser = {
          id: 'USR' + Date.now(),
          name, email, password, disability,
          proof: { name: proofFile.name, type: proofFile.type, data: proofData },
          resume: { name: resumeFile.name, type: resumeFile.type, data: resumeData },
          createdAt: new Date().toISOString()
        };

        users.push(newUser);
        save('users', users);

        save('loggedInUser', { id: newUser.id, name: newUser.name, email: newUser.email });

        showToast('Signup successful — redirecting to Jobs.');
        setTimeout(() => location.href = 'index.html', 900);
      } catch (err) {
        console.error(err);
        showToast('Failed to read files. Try again.');
      }
    });
  }

  // LOGIN
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = ((document.getElementById('email') || {}).value || '').trim().toLowerCase();
      const password = (document.getElementById('password') || {}).value || '';

      const users = load('users') || [];
      const user = users.find(u => u.email === email && u.password === password);
      if (!user) {
        showToast('Invalid credentials.');
        return;
      }

      save('loggedInUser', { id: user.id, name: user.name, email: user.email });
      showToast('Login successful — redirecting..');
      setTimeout(() => location.href = 'index.html', 700);
    });
  }

  // attach admin button behavior (blue dot) if exists
  const adminBTN = document.getElementById('adminBTN');
  if (adminBTN) {
    adminBTN.addEventListener('click', () => {
      // if modal exists -> open modal, else fallback to prompt + redirect
      const modal = document.getElementById('adminModal');
      if (modal) {
        document.getElementById('adminOverlay').hidden = false;
        document.getElementById('adminModal').hidden = false;
        // show password box initially
        document.getElementById('adminPasswordBox').hidden = false;
        document.getElementById('adminPanel').hidden = true;
        const passInput = document.getElementById('adminPassInput');
        if (passInput) passInput.value = '';
      } else {
        // fallback: prompt and redirect
        const pass = prompt('Enter admin password:');
        if (pass === '1234') {
          window.location.href = 'admin.html';
        } else if (pass !== null) {
          alert('Wrong password');
        }
      }
    });
  }

  // admin modal Enter button attach (if present)
  const adminPassBtn = document.getElementById('adminPassBtn');
  if (adminPassBtn) {
    adminPassBtn.addEventListener('click', checkAdminPassword);
  }

  // admin overlay click to close (optional)
  const adminOverlay = document.getElementById('adminOverlay');
  if (adminOverlay) {
    adminOverlay.addEventListener('click', closeAdmin);
  }

  // adminUserList delegation for buttons (view proof/resume/delete)
  const adminUserList = document.getElementById('adminUserList');
  if (adminUserList) {
    adminUserList.addEventListener('click', (ev) => {
      const btn = ev.target.closest('button');
      if (!btn) return;
      const action = btn.getAttribute('data-action');
      const uid = btn.getAttribute('data-uid');
      if (!action || !uid) return;

      if (action === 'view-proof') viewProof(uid);
      if (action === 'view-resume') viewResume(uid);
      if (action === 'delete-user') deleteUser(uid);
    });
  }

}); // end DOMContentLoaded

// --- helpers used by other modules ---------------------------------------------------
function getCurrentUserFull() {
  const u = load('loggedInUser');
  if (!u) return null;
  const users = load('users') || [];
  return users.find(x => x.id === u.id) || null;
}

function updateAuthLink() {
  const a = document.getElementById('authLink');
  const logged = load('loggedInUser');
  if (!a) return;

  if (logged) {
    a.textContent = logged.name || 'Profile';
    a.href = 'profile.html';  // ← FIXED
    a.onclick = null;         // ← removes the confirm popup
  } else {
    a.textContent = 'Login / Signup';
    a.href = 'login.html';
  }
}

// --- ADMIN MODAL FUNCTIONS ----------------------------------------------------------
function closeAdmin() {
  const overlay = document.getElementById('adminOverlay');
  const modal = document.getElementById('adminModal');
  if (overlay) overlay.hidden = true;
  if (modal) modal.hidden = true;
  // hide panel and show pass-box next time
  const panel = document.getElementById('adminPanel');
  const passBox = document.getElementById('adminPasswordBox');
  if (panel) panel.hidden = true;
  if (passBox) passBox.hidden = false;
}

function checkAdminPassword() {
  const inputEl = document.getElementById('adminPassInput');
  if (!inputEl) return alert('Admin input not found.');

  const input = inputEl.value;
  const ADMIN_PASS = '1234';

  if (input === ADMIN_PASS) {
    // correct → redirect
    window.location.href = "admin.html";
  } else {
    alert('Wrong password');
  }
}


// --- ADMIN DATA / UI functions ------------------------------------------------------
function loadAdminUsers() {
  const users = load('users') || [];
  const list = document.getElementById('adminUserList');
  if (!list) return;

  if (!users.length) {
    list.innerHTML = `<div class="empty-state"><h3>No users yet 📭</h3><p class="muted">Once users sign up their records appear here.</p></div>`;
    return;
  }

  // build cards with data attributes (no inlined large data-urls)
  list.innerHTML = users.map(u => `
    <article class="job-card admin-user-card">
      <div>
        <h4>${escapeHtml(u.name)}</h4>
        <div class="user-email">${escapeHtml(u.email)}</div>
        <div style="margin:8px 0"><span class="user-disability">${escapeHtml(u.disability)}</span></div>
        <div class="action-row">
          <button class="small-btn inline" data-action="view-proof" data-uid="${u.id}">View Proof</button>
          <button class="small-btn inline" data-action="view-resume" data-uid="${u.id}">View Resume</button>
          <button class="small-btn inline" data-action="delete-user" data-uid="${u.id}">Delete</button>
        </div>
      </div>
    </article>
  `).join('');
}

function viewProof(id) {
  const users = load('users') || [];
  const user = users.find(x => x.id === id);
  if (!user || !user.proof || !user.proof.data) { showToast('No proof available'); return; }
  window.open(user.proof.data, '_blank');
}

function viewResume(id) {
  const users = load('users') || [];
  const user = users.find(x => x.id === id);
  if (!user || !user.resume || !user.resume.data) { showToast('No resume available'); return; }
  window.open(user.resume.data, '_blank');
}

function deleteUser(id) {
  if (!confirm('Delete this user?')) return;
  let users = load('users') || [];
  users = users.filter(u => u.id !== id);
  save('users', users);
  loadAdminUsers();
  showToast('User deleted');
}

// --- EXPORT to EXCEL ----------------------------------------------------------------
function exportUsersToExcel() {
  if (typeof XLSX === 'undefined') {
    alert('XLSX library not loaded. Make sure to include the SheetJS script in <head>.');
    return;
  }
  let users = load('users') || [];
  const cleaned = users.map(u => ({
    id: u.id,
    name: u.name,
    email: u.email,
    disability: u.disability,
    proofFileName: u.proof?.name || '',
    resumeFileName: u.resume?.name || '',
    createdAt: u.createdAt
  }));

  const ws = XLSX.utils.json_to_sheet(cleaned);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Users');
  XLSX.writeFile(wb, 'Udyoga_Sarathi_Users.xlsx');
}

// --- small helpers ------------------------------------------------------------------
function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, (s) => {
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s];
  });
}
