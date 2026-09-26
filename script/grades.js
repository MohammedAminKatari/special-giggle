import { info } from "../script/index.js";
import { student } from "../script/profile.js";

info();

let creditHour = student.subjectCreditHours[0];
let totalCreditHours = Object.values(creditHour).reduce((total, hour) => {
  return total + hour;
});

let creditHours = student.subjectScore[0];
let totalCreditHour = Object.values(creditHours).reduce((total, hour) => {
  return total + hour / 6;
});
const subjectKeys = [
  "firstSubject",
  "secondSubject",
  "thirdSubject",
  "fourthSubject",
  "fifthSubject",
  "sixthSubject",
];

function gradeStatus(score) {
  if (score >= 80) return "A+";
  if (score >= 75) return "A";
  if (score >= 70) return "B+";
  if (score >= 65) return "B";
  if (score >= 60) return "C+";
  if (score >= 55) return "C";
  if (score >= 50) return "D+";
  if (score >= 45) return "D";
  return "F";
}

function gradePoint(score) {
  if (score >= 80) return 15;
  if (score >= 75) return 13;
  if (score >= 70) return 12;
  if (score >= 65) return 10;
  if (score >= 60) return 8;
  if (score >= 55) return 6;
  if (score >= 50) return 4;
  if (score >= 45) return 2;
  return 0;
}
const getItem = Object.values(student.subjectScore[0]).reduce((add, score) => {
  return add + gradePoint(score);
});

let totalGPA = getItem / totalCreditHours;

const courseRows = subjectKeys
  .map((subjectKey) => {
    const score = student.subjectScore[0][subjectKey];
    const status = gradeStatus(score);
    const statusPoint = gradePoint(score);

    return `
      <div>
        <span><strong>${student.subject[0][subjectKey]}</strong></span>
        <span class="subject-code">${student.subjectCode[0][subjectKey]}</span>
        <span>${student.subjectCreditHours[0][subjectKey]}</span>
        <strong>${score}</strong>
        <span class="grade-point">${statusPoint}</span>
        <span class="status-badge-class">${status}</span>
      </div>
    `;
  })
  .join("");

const gradesHTML = `
    <div class="page-hero">
      <div>
        <p class="eyebrow">ACADEMIC RECORD</p>
        <h1>Grades</h1>
        <p class="subheading">
          Track assessment results, course averages, and your progress
          toward the degree.
        </p>
      </div>
      <span class="status-badge success">GPA ${totalGPA.toFixed(2)}</span>
    </div>

    <section class="pro-card wide">
      <div class="section-heading">
        <div>
          <p class="eyebrow">SPRING 2025</p>
          <h2>Current results</h2>
        </div>
        <span class="muted">Last updated today</span>
      </div>

      <div class="grade-table">
        <div class="table-head">
          <span>Course</span>
          <span>Subject Code</span>
          <span>Credit Hours</span>
          <span>Score</span>
          <span>Grade Points</span>
          <span>Status</span>
        </div>

        ${courseRows}
      </div>
    </section>

    <div class="content-grid three">
      <article class="pro-card">
        <span class="muted">Semester GPA</span>
        <div class="big-number">${totalGPA.toFixed(2)}</div>
        <p>Up 0.12 from the previous semester.</p>
      </article>
      <article class="pro-card">
        <span class="muted">Average score</span>
        <div class="big-number">${totalCreditHour.toFixed(0)}%</div>
        <p>Across completed assessments.</p>
      </article>
      <article class="pro-card">
        <span class="muted">Credits earned</span>
        <div class="big-number">${totalCreditHours.toFixed(1)}</div>
        <p> Total Credit for all Courses.</p>
      </article>
    </div>
`;
document.querySelector(".js-grades").innerHTML = gradesHTML;
