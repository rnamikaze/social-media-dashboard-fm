let toggleBtn = document.getElementById("toggle");
let body = document.getElementsByTagName("body")[0];

function isDarkMode() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

if (isDarkMode()) {
  body.classList.add("is-dark");
  toggleBtn.checked = false;
} else {
  body.classList.remove("is-dark");
  toggleBtn.checked = true;
}

toggleBtn.addEventListener("click", function () {
  body.classList.toggle("is-dark");
});
