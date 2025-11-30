function loadLanguage(lang) {
  fetch(`assets/lang/${lang}.json`)
    .then(response => response.json())
    .then(data => {
      document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        el.textContent = data[key];
      });
      localStorage.setItem("ud_lang", lang);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("ud_lang") || "en";
  loadLanguage(savedLang);

  document.getElementById("enBtn").addEventListener("click", () => loadLanguage("en"));
  document.getElementById("knBtn").addEventListener("click", () => loadLanguage("kn"));
});
