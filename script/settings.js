import { info } from "./index.js";

const storageKey = "studentDashboard.settings.v1";
const settingsForm = document.querySelector("#settings-form");
const saveState = document.querySelector("#settings-save-state");

info();

const settingsLink = document.querySelector('.nav-item[href*="settings.html"]');
settingsLink?.classList.add("active");
const currentPage = document.querySelector(".topbar .first strong");
if (currentPage) currentPage.textContent = "Settings";

function readSettings() {
  try {
    const savedSettings = localStorage.getItem(storageKey);
    const parsedSettings = savedSettings ? JSON.parse(savedSettings) : {};
    return parsedSettings &&
      typeof parsedSettings === "object" &&
      !Array.isArray(parsedSettings)
      ? parsedSettings
      : {};
  } catch {
    return {};
  }
}

function setControlValue(control, value) {
  if (control.matches('[role="switch"]')) {
    control.setAttribute("aria-checked", String(Boolean(value)));
    return;
  }

  if ([...control.options].some((option) => option.value === value)) {
    control.value = value;
  }
}

const savedSettings = readSettings();
settingsForm.querySelectorAll("[data-setting]").forEach((control) => {
  const settingName = control.dataset.setting;
  if (Object.hasOwn(savedSettings, settingName)) {
    setControlValue(control, savedSettings[settingName]);
  }
});

function saveSettings() {
  const settings = Object.fromEntries(
    [...settingsForm.querySelectorAll("[data-setting]")].map((control) => [
      control.dataset.setting,
      control.matches('[role="switch"]')
        ? control.getAttribute("aria-checked") === "true"
        : control.value,
    ]),
  );

  try {
    localStorage.setItem(storageKey, JSON.stringify(settings));
    saveState.textContent = "Saved on this device.";
  } catch {
    saveState.textContent = "Could not save preferences in this browser.";
  }
}

settingsForm.addEventListener("change", saveSettings);
settingsForm.addEventListener("click", (event) => {
  const toggle = event.target.closest('[role="switch"][data-setting]');
  if (!toggle) return;

  toggle.setAttribute(
    "aria-checked",
    String(toggle.getAttribute("aria-checked") !== "true"),
  );
  saveSettings();
});
