document.addEventListener("DOMContentLoaded", function() {
  const toggleSwitch = document.querySelector("#theme-toggle");
  const body = document.body;

  toggleSwitch.addEventListener("change", function() {
    body.classList.toggle("dark-mode");
    localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
  });

  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleSwitch.checked = true;
  }
});
