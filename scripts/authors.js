"use strict";

// Диалоговое окно с описанием

const authorsEl = document.querySelector(".authors");

const modalEl = document.querySelector(".modal");
const modalWindowEl = document.querySelector(".modal__window");
const modalWindowAllEl = document.querySelectorAll(".modal__window");
const modalWindowArrayEl = document.querySelectorAll(`[data-modal]`);

authorsEl.addEventListener("click", (e) => {
  if (
    e.target.className === "artist__img-box" ||
    e.target.className === "artist__img-persons"
  ) {
    modalEl.style.display = "flex";
    const number = parseInt(e.target.getAttribute(`data-artist`));
    changeElement(number, `data-modal`, modalWindowArrayEl);
  }

  document.addEventListener("mousedown", function (event) {
    const modalElCurrent = document.getElementById("ID");
    console.log(`modalElCurrent = ${modalElCurrent}`);
    const modalWindowCloseElCurrent =
      modalElCurrent.querySelector(".modal__close");
    if (
      !modalElCurrent.contains(event.target) ||
      event.target === modalWindowCloseElCurrent
    ) {
      modalWindowAllEl.forEach((item) => {
        item.classList.remove("visible");
        item.setAttribute("id", "");
        item.classList.add("hidden");
      });
      modalEl.style.display = "none";
    }
  });
});

function changeElement(number, elementAtrribute, elementArray) {
  elementArray.forEach((item) => {
    if (parseInt(item.getAttribute(elementAtrribute)) === number) {
      item.classList.remove("hidden");
      item.classList.add("visible");
      item.setAttribute("id", "ID");
    }
  });
}
