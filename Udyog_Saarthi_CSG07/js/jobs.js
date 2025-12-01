// -----------------------------
// UDYOGA SĀRATHI — JOBS SYSTEM (UPGRADED FULL VERSION)
// Includes:
// ❤️ Save Job
// 🔔 Notifications
// 📝 Activity Log
// 🧩 Dashboard Integration
// -----------------------------


// -----------------------------
// JOB LIST
// -----------------------------
let jobs = [
  {
    id: "JOB101",
    title: "Frontend Developer",
    company: "TechNova Pvt Ltd",
    location: "Bengaluru",
    salary: "₹4,50,000 – ₹6,00,000 / year",
    tags: ["Remote", "Wheelchair Accessible", "No Travel"],
    shortDesc: "Work with React and modern UI systems.",
    fullDesc: `
      <p><strong>Role:</strong> Build clean UI and responsive components using React/HTML/CSS.</p>
      <p><strong>Requirements:</strong></p>
      <ul>
        <li>Basic React / JavaScript</li>
        <li>Good design sense</li>
        <li>PWD candidates encouraged</li>
      </ul>
      <p><strong>Benefits:</strong> Health insurance, flexible hours, remote-friendly.</p>
    `
  },

  {
    id: "JOB102",
    title: "Accessibility Tester",
    company: "Inclusion Labs",
    location: "Hyderabad",
    salary: "₹3,20,000 – ₹4,50,000 / year",
    tags: ["Flexible", "Training Provided"],
    shortDesc: "Test websites/apps for accessibility compliance.",
    fullDesc: `
      <p><strong>Role:</strong> Test websites and mobile apps for accessibility errors.</p>
      <p><strong>Requirements:</strong></p>
      <ul>
        <li>Basic computer knowledge</li>
        <li>Keen eye for UI/UX errors</li>
      </ul>
      <p><strong>Benefits:</strong> Accessibility certification training included.</p>
    `
  },

  {
    id: "JOB103",
    title: "Customer Support Executive",
    company: "SafeConnect Services",
    location: "Chennai (Remote)",
    salary: "₹2,80,000 – ₹3,60,000 / year",
    tags: ["Remote", "Voice/Chat Support"],
    shortDesc: "Assist customers via call/chat.",
    fullDesc: `
      <p><strong>Role:</strong> Handle incoming customer queries.</p>
      <p><strong>Requirements:</strong></p>
      <ul>
        <li>Good communication</li>
        <li>Basic typing</li>
      </ul>
      <p><strong>Benefits:</strong> Complete remote setup with headset provided.</p>
    `
  },

  {
    id: "JOB104",
    title: "Data Entry Operator",
    company: "BrightPath Pvt Ltd",
    location: "Mysuru",
    salary: "₹2,40,000 – ₹3,20,000 / year",
    tags: ["Office", "Accessible Desk"],
    shortDesc: "Type & manage digital documents.",
    fullDesc: `
      <p><strong>Role:</strong> Enter and verify digital records accurately.</p>
      <p><strong>Requirements:</strong> Typing speed 20+ WPM, basic MS Office.</p>
      <p><strong>Benefits:</strong> Special PWD workstation provided.</p>
    `
  },

  {
    id: "JOB105",
    title: "Junior Web Developer",
    company: "CloudAxis",
    location: "Remote",
    salary: "₹3,00,000 – ₹5,00,000 / year",
    tags: ["Remote", "Flexible Timings"],
    shortDesc: "Work on responsive websites using HTML, CSS, JS.",
    fullDesc: `
      <p><strong>Role:</strong> Assist senior devs in building web projects.</p>
      <p><strong>Requirements:</strong></p>
      <ul><li>Basic HTML/CSS/JS</li><li>Eager to learn</li></ul>
      <p><strong>Benefits:</strong> Laptop provided for PWD candidates.</p>
    `
  },

  {
    id: "JOB106",
    title: "Back Office Associate",
    company: "FinSure India",
    location: "Kochi",
    salary: "₹2,60,000 – ₹3,50,000 / year",
    tags: ["Office", "Low Physical Work"],
    shortDesc: "Manage backend documentation and reports.",
    fullDesc: `
      <p><strong>Role:</strong> Create and manage reports using Excel.</p>
      <p><strong>Requirements:</strong> MS Office knowledge preferred.</p>
    `
  },

  {
    id: "JOB107",
    title: "IT Support Technician",
    company: "ByteBridge",
    location: "Bengaluru",
    salary: "₹3,50,000 – ₹4,80,000 / year",
    tags: ["Office", "Accessible Workspace"],
    shortDesc: "Help employees with basic tech issues.",
    fullDesc: `
      <p><strong>Role:</strong> Provide IT support, fix hardware/software issues.</p>
      <p><strong>Requirements:</strong> Basic networking knowledge.</p>
    `
  },

  {
    id: "JOB108",
    title: "HR Assistant",
    company: "TalentNest",
    location: "Pune",
    salary: "₹3,00,000 – ₹4,20,000 / year",
    tags: ["Office", "PWD Priority"],
    shortDesc: "Assist HR team with recruitment and onboarding.",
    fullDesc: `
      <p><strong>Role:</strong> Schedule interviews, manage employee data.</p>
      <p><strong>Requirements:</strong> Good communication skills.</p>
    `
  },

  {
    id: "JOB109",
    title: "Content Writer",
    company: "WriteHub Media",
    location: "Remote",
    salary: "₹2,40,000 – ₹3,60,000 / year",
    tags: ["Remote", "Flexible"],
    shortDesc: "Write articles & blogs for clients.",
    fullDesc: `
      <p><strong>Role:</strong> Write SEO-friendly blog posts and articles.</p>
      <p><strong>Requirements:</strong> Good English writing skills.</p>
    `
  },

  {
    id: "JOB110",
    title: "Graphic Designer",
    company: "DesignVerse",
    location: "Hyderabad",
    salary: "₹3,50,000 – ₹5,00,000 / year",
    tags: ["Remote Possible", "Training Provided"],
    shortDesc: "Create social media & branding visuals.",
    fullDesc: `
      <p><strong>Role:</strong> Work with Illustrator & Photoshop.</p>
      <p><strong>Requirements:</strong> Basic design portfolio.</p>
    `
  },

  {
    id: "JOB111",
    title: "Telecaller",
    company: "ConnectCallers",
    location: "Mumbai",
    salary: "₹2,20,000 – ₹3,00,000 / year",
    tags: ["Office", "PWD Friendly"],
    shortDesc: "Outbound/inbound calling.",
    fullDesc: `
      <p><strong>Role:</strong> Handle customer calls with script-based responses.</p>
      <p><strong>Requirements:</strong> Clear communication.</p>
    `
  },

  {
    id: "JOB112",
    title: "SEO Analyst (Trainee)",
    company: "RankUp Digital",
    location: "Remote",
    salary: "₹2,50,000 – ₹3,20,000 / year",
    tags: ["Remote", "Training Included"],
    shortDesc: "Learn SEO and support optimization projects.",
    fullDesc: `
      <p><strong>Role:</strong> Keyword research, SEO audits.</p>
      <p><strong>Requirements:</strong> Basic computer skills.</p>
    `
  },

  {
    id: "JOB113",
    title: "Junior Accountant",
    company: "LedgerWorks",
    location: "Bengaluru",
    salary: "₹3,00,000 – ₹4,20,000 / year",
    tags: ["Office", "Accessible Desk"],
    shortDesc: "Assist with finance & accounting work.",
    fullDesc: `
      <p><strong>Role:</strong> Maintain accounts, tally entries.</p>
      <p><strong>Requirements:</strong> Basic finance knowledge.</p>
    `
  },

  {
    id: "JOB114",
    title: "Digital Marketing Intern",
    company: "AdWave",
    location: "Remote",
    salary: "₹10,000 – ₹15,000 / month",
    tags: ["Remote", "Flexible"],
    shortDesc: "Assist with social media and ad campaigns.",
    fullDesc: `
      <p><strong>Role:</strong> Manage posts, track campaign reports.</p>
      <p><strong>Requirements:</strong> Basic digital marketing interest.</p>
    `
  },

  {
    id: "JOB115",
    title: "Quality Checker",
    company: "ProInspect",
    location: "Coimbatore",
    salary: "₹2,60,000 – ₹3,40,000 / year",
    tags: ["Office", "Light Work"],
    shortDesc: "Check product quality visually.",
    fullDesc: `
      <p><strong>Role:</strong> Inspect items manually & verify quality.</p>
      <p><strong>Requirements:</strong> Basic observation skills.</p>
    `
  },

  {
    id: "JOB116",
    title: "Email Support Executive",
    company: "MailEase",
    location: "Remote",
    salary: "₹2,80,000 – ₹3,60,000 / year",
    tags: ["Remote", "No Calls"],
    shortDesc: "Solve customer issues via email.",
    fullDesc: `
      <p><strong>Role:</strong> Respond to customer queries through email.</p>
      <p><strong>Requirements:</strong> Good written English.</p>
    `
  },

  {
    id: "JOB117",
    title: "Voice-over Artist (Entry Level)",
    company: "AudioWorks",
    location: "Remote",
    salary: "₹2,40,000 – ₹4,00,000 / year",
    tags: ["Remote", "Creative"],
    shortDesc: "Voice-over for educational videos.",
    fullDesc: `
      <p><strong>Role:</strong> Record voice for training content.</p>
      <p><strong>Requirements:</strong> Clear speaking voice.</p>
    `
  },

  {
    id: "JOB118",
    title: "Warehouse Admin",
    company: "StoreLogix",
    location: "Chennai",
    salary: "₹2,80,000 – ₹3,80,000 / year",
    tags: ["Office", "PWD Desk"],
    shortDesc: "Manage warehouse inventory records.",
    fullDesc: `
      <p><strong>Role:</strong> Update stock and maintain logs.</p>
      <p><strong>Requirements:</strong> Basic Excel knowledge.</p>
    `
  },

  {
    id: "JOB119",
    title: "Junior Tester",
    company: "BugScout",
    location: "Hyderabad",
    salary: "₹3,00,000 – ₹4,50,000 / year",
    tags: ["Office", "Testing"],
    shortDesc: "Test websites and mobile apps.",
    fullDesc: `
      <p><strong>Role:</strong> Execute test cases and report bugs.</p>
    `
  },

  {
    id: "JOB120",
    title: "Documentation Assistant",
    company: "PaperTrail India",
    location: "Bengaluru",
    salary: "₹2,40,000 – ₹3,20,000 / year",
    tags: ["Low Physical Work", "Accessible Desk"],
    shortDesc: "Organize and maintain digital documents.",
    fullDesc: `
      <p><strong>Role:</strong> Scan, organize, and maintain corporate documents.</p>
      <p><strong>Requirements:</strong> Basic PC usage.</p>
    `
  }
];



// --------------------------------------------------
// ADD GLOBAL FUNCTIONS FOR DASHBOARD INTEGRATION
// --------------------------------------------------

function addNotification(msg) {
  let user = load("loggedInUser");
  if (!user) return;

  if (!user.notifications) user.notifications = [];
  user.notifications.push(msg);

  save("loggedInUser", user);
}

function addActivity(msg) {
  let user = load("loggedInUser");
  if (!user) return;

  if (!user.activityLog) user.activityLog = [];
  user.activityLog.push(msg);

  save("loggedInUser", user);
}

function saveJob(jobId) {
  let user = load("loggedInUser");
  if (!user) {
    showToast("Please login first");
    return;
  }

  if (!user.savedJobs) user.savedJobs = [];

  const job = jobs.find(j => j.id === jobId);
  if (!job) return;

  // prevent duplicates
  if (user.savedJobs.some(j => j.id === jobId)) {
    showToast("Already saved ❤️");
    return;
  }

  user.savedJobs.push({
    id: job.id,
    title: job.title,
    company: job.company
  });

  addActivity(`Saved job: ${job.title}`);
  save("loggedInUser", user);

  showToast("Saved successfully ❤️");
}



// --------------------------------------------------
// RENDER JOB CARDS (UPDATED WITH SAVE/DETAILS)
// --------------------------------------------------
function renderJobs(list = jobs) {
  const div = document.getElementById("jobList");
  if (!div) return;

  div.innerHTML = list
    .map(
      (j) => `
    <article class="job-card">
      <h3>${j.title}</h3>
      <p class="muted">${j.company}</p>
      <p><strong>${j.location}</strong></p>
      <p class="muted">${j.shortDesc}</p>

      <div style="margin-top:10px;">
        ${j.tags.map((t) => `<span class="job-tag">${t}</span>`).join("")}
      </div>

      <div style="display:flex;gap:10px;margin-top:14px;">
        <button class="small-btn" onclick="openJobModal('${j.id}')">View Details</button>
        <button class="small-btn" onclick="saveJob('${j.id}')">❤️ Save</button>
      </div>
    </article>`
    )
    .join("");
}



// --------------------------------------------------
// SEARCH FILTER
// --------------------------------------------------
function filterJobs(term) {
  term = term.toLowerCase();
  const filtered = jobs.filter(
    (j) =>
      j.title.toLowerCase().includes(term) ||
      j.company.toLowerCase().includes(term) ||
      j.location.toLowerCase().includes(term)
  );
  renderJobs(filtered);
}



// --------------------------------------------------
// OPEN JOB DETAILS MODAL
// --------------------------------------------------
function openJobModal(jobId) {
  const job = jobs.find((j) => j.id === jobId);
  if (!job) return;

  document.getElementById("jobModalTitle").textContent = job.title;
  document.getElementById("jobModalContent").innerHTML = `
    <p><strong>Company:</strong> ${job.company}</p>
    <p><strong>Location:</strong> ${job.location}</p>
    <p><strong>Salary:</strong> ${job.salary}</p>
    <hr>
    ${job.fullDesc}
  `;

  document.getElementById("applyJobBtn").onclick = () => applyToJob(jobId);

  document.getElementById("jobModalOverlay").hidden = false;
  document.getElementById("jobDetailsModal").hidden = false;
}

function closeJobModal() {
  document.getElementById("jobModalOverlay").hidden = true;
  document.getElementById("jobDetailsModal").hidden = true;
}



// --------------------------------------------------
// APPLY TO JOB  (UPGRADED FULL VERSION)
// --------------------------------------------------
function applyToJob(jobId) {
  const logged = load("loggedInUser");
  if (!logged) {
    showToast("Please login to apply.");
    setTimeout(() => (location.href = "login.html"), 800);
    return;
  }

  const user = getCurrentUserFull();
  const job = jobs.find(j => j.id === jobId);

  let apps = load("applications") || [];

  if (apps.some(a => a.jobId === jobId && a.userId === user.id)) {
    showToast("Already applied.");
    return;
  }

  // Store application info
  apps.push({
    jobId: job.id,
    jobTitle: job.title,
    company: job.company,
    userId: user.id,
    userName: user.name,
    userEmail: user.email,
    appliedAt: new Date().toISOString()
  });

  save("applications", apps);

  // Add dashboard integrations
  addNotification(`You applied for: ${job.title}`);
  addActivity(`Applied to job: ${job.title}`);

  showToast("Application submitted!");
  closeJobModal();
}
