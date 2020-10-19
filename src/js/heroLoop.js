function elementLoop(elements, _class, delay) {
  let index = 0;

  return setInterval(function () {
    elements[index].classList.remove(_class);
    if (index == elements.length - 1) index = 0;
    else index += 1;
    elements[index].classList.add(_class);
  }, delay * 1000);
}

elementLoop(document.querySelectorAll(".heroBackground"), "show", 5);
