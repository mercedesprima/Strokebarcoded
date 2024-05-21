"use strict";
// Сортировка товаров по цене/возрастанию/убыванию

const sortSelectEl = document.querySelector("#sort-select");
sortSelectEl.onchange = function () {
  const selectedOption = sortSelectEl.value;
  if (selectedOption === "ascending") {
    sortElementsByAscPrice("data-price");
  } else if (selectedOption === "decsending") {
    sortElementsByDescPrice("data-price");
  } else {
    location.reload();
  }
};

// Сортировка по автору

const checkboxEl = document.querySelector(".checkbox-box");
const checkboxEls = document.querySelectorAll(".checkbox-box__checkbox");

checkboxEl.addEventListener("change", (e) => {
  let counter = 0;

  checkboxEls.forEach((item) => {
    if (item.checked) {
      counter++;
    }
  });

  checkboxEls.forEach((item) => {
    let inputIdAuthor = e.target.id;
    switch (inputIdAuthor) {
      case "baranov":
        if (e.target.checked) {
          showElementsAuthor("data-author", "baranov");
        } else {
          hideElementsAuthor("data-author", "baranov");
          if (counter === 0) {
            removeHiddenClass();
          }
        }
        break;
      case "lyalin":
        if (e.target.checked) {
          showElementsAuthor("data-author", "lyalin");
        } else {
          hideElementsAuthor("data-author", "lyalin");
          if (counter === 0) {
            removeHiddenClass();
          }
        }
        break;
      case "markov_grinberg":
        if (e.target.checked) {
          showElementsAuthor("data-author", "markov_grinberg");
        } else {
          hideElementsAuthor("data-author", "markov_grinberg");
          if (counter === 0) {
            removeHiddenClass();
          }
        }
        break;
    }
  });
});

const sortElementsByAscPrice = (atributeName) => {
  const catalogEl = document.querySelector(".catalog__box");
  const elementsEl = Array.from(
    catalogEl.querySelectorAll(`[${atributeName}]`)
  );
  elementsEl.sort((a, b) => {
    const priceA = parseFloat(a.getAttribute(atributeName));
    const priceB = parseFloat(b.getAttribute(atributeName));
    return priceA - priceB;
  });

  elementsEl.forEach((element) => {
    catalogEl.appendChild(element);
  });
};

const sortElementsByDescPrice = (atributeName) => {
  const catalogEl = document.querySelector(".catalog__box");
  const elementsEl = Array.from(
    catalogEl.querySelectorAll(`[${atributeName}]`)
  );
  elementsEl.sort((a, b) => {
    const priceA = parseFloat(a.getAttribute(atributeName));
    const priceB = parseFloat(b.getAttribute(atributeName));
    return priceB - priceA;
  });

  elementsEl.forEach((element) => {
    catalogEl.appendChild(element);
  });
};

const showElementsAuthor = (atributeName, author) => {
  const catalogEl = document.querySelector(".catalog__box");
  const elementsEl = Array.from(
    catalogEl.querySelectorAll(`[${atributeName}]`)
  );

  elementsEl.forEach((element) => {
    if (element.getAttribute(atributeName) === author) {
      element.classList.add("visible");
    } else {
      element.classList.add("hidden");
    }
  });
};

const hideElementsAuthor = (atributeName, author) => {
  const catalogEl = document.querySelector(".catalog__box");
  const elementsEl = Array.from(
    catalogEl.querySelectorAll(`[${atributeName}]`)
  );
  elementsEl.forEach((element) => {
    if (element.getAttribute(atributeName) === author) {
      element.classList.remove("visible");
      element.classList.add("hidden");
    }
  });
};

const removeHiddenClass = () => {
  const cardsEl = Array.from(document.querySelectorAll(".card"));
  cardsEl.forEach((element) => {
    element.classList.remove("hidden");
  });
};
