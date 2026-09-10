import { students } from "../script/student.js";

let studentInfo = "";

export const studentId = localStorage.getItem("Id");
export const student = students.find(
  (student) => student.StudentId === studentId,
);

if (student) {
  studentInfo += `
          <div class="page-hero">
            <div>
              <p class="eyebrow">ACCOUNT</p>
              <h1>Profile</h1>
              <p class="subheading">
                Your student identity, academic information, and contact
                details.
              </p>
            </div>
            <span class="status-badge success">Active student</span>
          </div>
          <div class="content-grid two">
            <section class="pro-card profile-card">
              <div class="profile-head">
                <img src="${student.image}" alt="profile photo" />
                <div>
                  <h2>${student.name}</h2>
                  <p>${student.Course} • Undergraduate</p>
                  <span class="status-badge">Student ID: ${student.StudentId}</span>
                </div>
              </div>
              <div class="detail-grid">
                <div>
                  <span>University email</span
                  ><strong>aminkatari@gmail.com.edu</strong>
                </div>
                <div><span>Academic year</span><strong>${student.level}</strong></div>
                <div>
                  <span>Department</span><strong>${student.department}</strong>
                </div>
                <div>
                  <span>Expected graduation</span><strong>${student.GraduationYear}</strong>
                </div>
              </div>
            </section>
            <aside class="pro-card">
              <p class="eyebrow">ACADEMIC SUMMARY</p>
              <div class="mini-stat">
                <span>Current GPA</span><strong>${student.currentGPA}</strong>
              </div>
              <div class="mini-stat">
                <span>Credits earned</span><strong>${student.CreditEarned}</strong>
              </div>
              <div class="mini-stat">
                <span>Attendance</span><strong>${student.attendance}%</strong>
              </div>
              <div class="mini-stat">
                <span>Study streak</span><strong>${student.studyStreak}</strong>
              </div>
            </aside>
          </div>
          <section class="pro-card wide">
            <div class="section-heading">
              <div>
                <p class="eyebrow">CONTACT &amp; SUPPORT</p>
                <h2>Student information</h2>
              </div>
            </div>
            <div class="info-row">
              <span>Academic advisor</span><strong>${student.academicAdvisor}</strong>
            </div>
            <div class="info-row">
              <span>Advisor email</span><strong>${student.AdvisorEmail}</strong>
            </div>
            <div class="info-row">
              <span>Programme</span><strong>${student.Programme}</strong>
            </div>
          </section>
`;
} else {
  studentInfo = `
    <section class="pro-card wide">
      <h1>Profile unavailable</h1>
      <p>Please log in again to view your student profile.</p>
    </section>
  `;
}

const profileContainer = document.querySelector(".js-page-profile");

if (profileContainer) {
  profileContainer.innerHTML = studentInfo;
}
