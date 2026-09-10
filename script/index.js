import { student } from "./profile.js";

export function info() {
  const sidebar = document.querySelector("#sidebar");
  const topbar = document.querySelector(".topbar");
  const isNestedDashboard = decodeURIComponent(
    window.location.pathname,
  ).includes("/html files/");
  const pageLink = (fileName) =>
    isNestedDashboard ? fileName : `html files/${fileName}`;

  if (student) {
    const profileImage = new URL(student.image, import.meta.url).href;
    const logoImage = new URL("../images/images.jpg", import.meta.url).href;

    sidebar.innerHTML = `
        <div class="brand">
          <span class="brand-mark"
            ><img src="${logoImage}" alt="Graduation cap"
          /></span>
          <span>Student Portal<span class="brand-dot">.</span></span>
        </div>

        <div class="profile-mini">
          <div class="avatar">
            <img
              src="${profileImage}"
              alt="profile-picture"
              class="profile-image"
            />
          </div>
          <div><strong>${student.name}</strong><span>${student.Course}</span></div>
          <button class="icon-button more" aria-label="Profile options">
             •••
          </button>
        </div>

        <nav class="main-nav" aria-label="Main navigation">
          <p class="nav-label">Workspace</p>
          <a class="nav-item" href="${isNestedDashboard ? "index.html" : "../index.html"}"
            ><span class="nav-icon">⌂</span>Overview</a
          >
          <a class="nav-item" href="${pageLink("courses.html")}"
            ><span class="nav-icon">▦</span> Courses <b>6</b></a
          >
          <a class="nav-item" href="${pageLink("calendar.html")}"
            ><span class="nav-icon">□</span>Calendar</a
          >
          <a class="nav-item" href="${pageLink("grades.html")}"
            ><span class="nav-icon">↗</span>Grades</a
          >
          <a class="nav-item" href="${pageLink("time table.html")}"
            ><span class="nav-icon">⏱</span>Timetable</a
          >
          <p class="nav-label">Personal</p>
          <a class="nav-item" href="${pageLink("messages.html")}"
            ><span class="nav-icon">✉</span>Messages
            <b class="alert-count">3</b></a
          >
          <a class="nav-item" href="${pageLink("notifications.html")}"
            ><span class="nav-icon">🔔</span>Notifications
            <b class="alert-count">3</b></a
          >
          <a class="nav-item" href="${pageLink("settings.html")}"
            ><span class="nav-icon">⚙</span>Settings</a
          >
          <a class="nav-item" href="${pageLink("login page.html")}"
            ><span class="nav-icon">🔽</span> Log Out</a
          >
        </nav>
        <div class="sidebar-bottom">
          <div class="help-card">
            <span class="help-icon">?</span>
            <strong>Need a hand?</strong>
            <small>Visit the student help center</small>
            <a href="${pageLink("help.html")}">Get support <span>↗</span> </a>
          </div>
          <div class="semester-row">
            <span class="status-dot"> </span><span>Spring 2025</span>
            <button class="icon-button">⌄</button>
          </div>
        </div>
      `;

    topbar.innerHTML = `
          <div class="first">
            <span>Student portal</span><i>/</i><strong>Overview</strong>
          </div>
          <div class="secound">
            <input
              type="search"
              name="searchbar"
              id="information"
              class="searchbar"
              placeholder="🔎Search for courses and grades"
            />
            <button class="search-button">Search</button>
          </div>

          <div class="top-actions">
            <div class="link-noti">
              <a
                class="icon-button"
                href="${pageLink("notifications.html")}"
                aria-label="Notifications"
              >
                🔔 <span></span
              ></a>
            </div>
            <div class="noti">3</div>
          </div>
          <div class="top-action">
            <a
              class="top-avatar"
              href="${pageLink("profile.html")}"
              aria-label="Open profile"
              ><img
                src="${profileImage}"
                alt="profile-picture"
                class="profile-image"
            /></a>
            <span class="name">
              <strong> ${student.name} </strong>
            </span>
          </div>
          `;
  }
}
