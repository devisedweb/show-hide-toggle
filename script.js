const showHide = document.getElementById("show-hide");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  showHide.classList.toggle("show-hide");
  if (btn.textContent == "Show") {
    btn.textContent = "Hide";
  } else {
    btn.textContent = "Show";
  }
});
