window.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "ar";
  applyLanguage(lang);

  const toggle = document.getElementById("langToggle");

  if (toggle) {
    toggle.checked = lang === "en";

    toggle.addEventListener("change", () => {
      applyLanguage(toggle.checked ? "en" : "ar");
    });
  }
});