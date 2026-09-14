import { info } from "../script/index.js";
import { student } from "../script/profile.js";

info();

let gradesHTML = "";

gradesHTML += `
     <div class="page-hero">
            <div>
              <p class="eyebrow">ACADEMIC RECORD</p>
              <h1>Grades</h1>
              <p class="subheading">
                Track assessment results, course averages, and your progress
                toward the degree.
              </p>
            </div>
            <span class="status-badge success">GPA 3.84</span>
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
                <span>Course</span><span>Credit Hours</span><span>Score</span
                ><span>Status</span>
              </div>
              <div>
                <span
                  ><strong>${student.subject[0].firstSubject}</strong
                  ><small>CS 301</small></span
                ><span>2</span><strong>88%</strong><span class= "status-badge">A</span>
              </div>
              <div>
                <span
                  ><strong>${student.subject[0].secondSubject}</strong
                  ><small>CS 305</small></span
                ><span> 2</span><strong>86%</strong><span class= "status-badge">A</span>
              </div>
              <div>
                <span><strong>${student.subject[0].thirdSubject}</strong><small>CS 307</small></span
                ><span>1</span><strong>91%</strong><span class= "status-badge">A</span>
              </div>
              <div>
                <span
                  ><strong>${student.subject[0].fourthSubject}</strong><small>RM 201</small></span
                ><span>3</span><strong>79%</strong><span class= "status-badge">B</span>
              </div>
              <div>
                <span><strong>${student.subject[0].fifthSubject}</strong><small>VB 111</small></span
                ><span>2</span><strong>89%</strong><span class= "status-badge">A</span>
              </div>
              <div>
                <span
                  ><strong>${student.subject[0].sixthSubject}</strong
                  ><small>HS 101</small></span
                ><span>3</span><strong>67%</strong><span class= "status-badge">B</span>
              </div>
            </div>
          </section>
          <div class="content-grid three">
            <article class="pro-card">
              <span class="muted">Semester GPA</span>
              <div class="big-number">3.84</div>
              <p>Up 0.12 from the previous semester.</p>
            </article>
            <article class="pro-card">
              <span class="muted">Average score</span>
              <div class="big-number">86%</div>
              <p>Across completed assessments.</p>
            </article>
            <article class="pro-card">
              <span class="muted">Credits earned</span>
              <div class="big-number">84</div>
              <p>36 credits remaining to graduate.</p>
            </article>
          </div>
`;
document.querySelector(".js-grades").innerHTML = gradesHTML;
let status = "";
if (score >= 80) {
  status = console.log("A+");
} else if (score >= 79) {
  status = console.log("A");
} else if (score >= 70) {
  status = console.log("B+");
} else if (score >= 69) {
  status = console.log("B");
} else if (score >= 60) {
  status = console.log("C+");
} else if (score >= 49) {
  status = console.log("C");
} else {
  status = console.log("F");
}
