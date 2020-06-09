function buttonClickHandler(selector, callback) {
  const button = document.querySelector(selector);
  if (!button) return;
  button.addEventListener("click", callback);
}
