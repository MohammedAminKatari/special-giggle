import { students } from "../script/student.js";
let search = "";

search += `
     <div class="page-hero">
            <div>
              <p class="eyebrow">FIND INFORMATION</p>
              <h1>Search</h1>
              <p class="subheading">
                Search your student portal for courses, grades, tasks, messages,
                and academic resources.
              </p>
            </div>
          </div>
          <section class="pro-card wide search-panel">
            <div class="large-search">
              ⌕ <span>Search courses, assignments, grades...</span
              ><button>Search</button>
            </div>
            <div class="search-suggestions">
              <span>Software Engineering</span><span>Algorithms</span
              ><span>Upcoming deadlines</span><span>Grades</span>
            </div>
          </section>
          <section class="pro-card wide">
            <div class="section-heading">
              <div>
                <p class="eyebrow">RECENT RESULTS</p>
                <h2>Useful destinations</h2>
              </div>
            </div>
            <div class="result-row">
              <span class="result-icon blue-bg">▦</span>
              <div>
                <strong>My Courses</strong>
                <p>Browse your active modules and course progress.</p>
              </div>
              <a href="courses.html">Open ↗</a>
            </div>
            <div class="result-row">
              <span class="result-icon coral-bg">✓</span>
              <div>
                <strong>Grades</strong>
                <p>Review your assessment scores and GPA.</p>
              </div>
              <a href="grades.html">Open ↗</a>
            </div>
            <div class="result-row">
              <span class="result-icon lilac-bg">◷</span>
              <div>
                <strong>Tasks &amp; Deadlines</strong>
                <p>See what needs your attention next.</p>
              </div>
              <a href="tasks.html">Open ↗</a>
            </div>
          </section>
        </div>
`;
