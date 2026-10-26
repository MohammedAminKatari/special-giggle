const input = document.querySelector(".inputTexted");
const addButton = document.querySelector(".AddInput");
const taskList = document.querySelector(".outputPage");

function addTask() {
  const result = input?.value.trim();

  if (!input || !taskList || !result) {
    if (input) input.focus();
    return;
  }

  const taskMarkup = `
    <ul class="task-list-ul">
      <li class="task-item">
        <input type="checkbox" class="check" />
        <span class="task-text">${result}</span>
        <span class="track">Active</span>
        <button type="button" class="delete-been" aria-label="Delete task">&#128465;</button>
      </li>
    </ul>
  `;

  taskList.insertAdjacentHTML("beforeend", taskMarkup);
  input.value = "";
  input.focus();
}

if (addButton) {
  addButton.addEventListener("click", addTask);
}

if (input) {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
}

if (taskList) {
  taskList.addEventListener("change", (event) => {
    const checkbox = event.target;

    if (!checkbox.classList.contains("check")) return;

    const taskItem = checkbox.closest(".task-item");
    const status = taskItem?.querySelector(".track");

    if (!taskItem || !status) return;

    status.textContent = checkbox.checked ? "Completed" : "Active";
  });

  taskList.addEventListener("click", (event) => {
    const deleteButton = event.target.closest(".delete-been");

    if (!deleteButton) return;

    const taskContainer = deleteButton.closest(".task-list-ul");
    taskContainer?.remove();
  });
}
