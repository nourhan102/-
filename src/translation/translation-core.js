const translations = {
  ar: {},
  en: {}
};

function applyLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.dataset.key;
    const value = translations[lang]?.[key];
    if (value) el.innerText = value;
  });

  document.documentElement.lang = lang;
  document.body.dir = lang === "ar" ? "rtl" : "ltr";

  document.body.classList.toggle("en", lang === "en");

  localStorage.setItem("lang", lang);
}