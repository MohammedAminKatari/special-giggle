import { info } from "../script/index.js";
import { student } from "../script/profile.js";
info();
let coursesHTML = "";
if (student) {
  coursesHTML += `
     <div class="page-hero">
            <div>
              <p class="eyebrow">ACADEMIC WORKSPACE</p>
              <h1>My Courses</h1>
              <p class="subheading">
                Manage your current modules, review course progress, and stay on
                top of your semester.
              </p>
            </div>
            <a class="primary-button" href="calendar.html">View schedule ↗</a>
          </div>
          <div class="content-grid three">
            <article class="pro-card">
              <div class="course-icon blue-bg">SE</div>
              <div>
                <span class="muted">CS 301</span>
                <h2>${student.subject[0].firstSubject}</h2>
                <p>
                  Develop your knowledge and practical skills through lectures,
                  assignments, and assessments.
                </p>
              </div>
            </article>
            <article class="pro-card">
              <div class="course-icon coral-bg">AL</div>
              <div>
                <span class="muted">CS 305</span>
                <h2>${student.subject[0].secondSubject}</h2>
                <p>
                  Develop your knowledge and practical skills through lectures,
                  assignments, and assessments.
                </p>
              </div>
            </article>
             <article class="pro-card">
              <div class="course-icon coral-bg">AL</div>
              <div>
                <span class="muted">CS 305</span>
                <h2>${student.subject[0].thirdSubject}</h2>
                <p>
                  Develop your knowledge and practical skills through lectures,
                  assignments, and assessments.
                </p>
              </div>
            </article>
             <article class="pro-card">
              <div class="course-icon coral-bg">AL</div>
              <div>
                <span class="muted">CS 305</span>
                <h2>${student.subject[0].fourthSubject}</h2>
                <p>
                  Develop your knowledge and practical skills through lectures,
                  assignments, and assessments.
                </p>
              </div>
            </article>
             <article class="pro-card">
              <div class="course-icon coral-bg">AL</div>
              <div>
                <span class="muted">CS 305</span>
                <h2>${student.subject[0].fifthSubject}</h2>
                <p>
                  Develop your knowledge and practical skills through lectures,
                  assignments, and assessments.
                </p>
              </div>
            </article>
            <article class="pro-card">
              <div class="course-icon lilac-bg">DS</div>
              <div>
                <span class="muted">CS 307</span>
                <h2>${student.subject[0].sixthSubject}</h2>
                <p>
                  Develop your knowledge and practical skills through lectures,
                  assignments, and assessments.
                </p>
              </div>
          </div>
          <section class="pro-card wide">
            <div class="section-heading">
              <div>
                <p class="eyebrow">SEMESTER SNAPSHOT</p>
                <h2>Course workload</h2>
              </div>
              <span class="status-badge">Spring 2025</span>
            </div>
            <div class="metric-row">
              <div><strong>5</strong><span>Active courses</span></div>
              <div><strong>14</strong><span>Assignments</span></div>
              <div><strong>3</strong><span>Assessments</span></div>
              <div><strong>84%</strong><span>Average progress</span></div>
            </div>
          </section>
    `;
}

document.querySelector(".course-js").innerHTML = coursesHTML;
console.log(coursesHTML);
