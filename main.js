const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (event) => {
  let target = event.target;

  if (target.tagName == "BUTTON") {
    target.classList.toggle("accordion__btn--open");
    let panel = target.nextElementSibling;

    panel.style.maxHeight = panel.style.maxHeight
      ? null
      : panel.scrollHeight + "px";
  }
});
