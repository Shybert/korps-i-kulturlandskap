function buttonClickHandler(selector, callback) {
  const button = document.querySelector(selector);
  if (!button) return;
  button.addEventListener("click", callback);
}

buttonClickHandler("#navMenuOpen", function () {
  document.getElementById("navMenu").classList.remove("collapsed");
});

buttonClickHandler("#navMenuClose", function () {
  document.getElementById("navMenu").classList.add("collapsed");
});
