const loginUrl = new URL("../html files/login page.html", import.meta.url).href;

function isLoginPage() {
  return decodeURIComponent(window.location.pathname).includes(
    "/html files/login page.html",
  );
}

export function redirectToLogin() {
  if (!isLoginPage()) {
    window.location.replace(loginUrl);
  }
}

export function logout() {
  localStorage.removeItem("Id");
  window.location.replace(loginUrl);
}

window.addEventListener("pageshow", () => {
  if (!isLoginPage() && !localStorage.getItem("Id")) {
    redirectToLogin();
  }
});
