buttonClickHandler("#navMenuOpen", function () {
  document.getElementById("navMenu").classList.remove("collapsed");
});

buttonClickHandler("#navMenuClose", function () {
  document.getElementById("navMenu").classList.add("collapsed");
});
