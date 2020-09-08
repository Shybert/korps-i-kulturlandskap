if (
  "IntersectionObserver" in window &&
  "IntersectionObserverEntry" in window &&
  "intersectionRatio" in window.IntersectionObserverEntry.prototype
) {
  const headerBar = document.getElementById("headerBar");

  let callback = (entries) => {
    if (!entries[0]) return;
    if (!entries[0].isIntersecting) headerBar.classList.add("scrolled");
    else headerBar.classList.remove("scrolled");
  };
  let options = {
    threshold: 1.0,
  };

  let observer = new IntersectionObserver(callback, options);
  observer.observe(document.getElementById("headerBarSpacer"));
}
