"use strict";

// Счетчик товаров в корзине

const headerBasketElement = document.querySelector(".header__basket");
const basketCounterElement = document.querySelector(".basket-counter");
const catalogBoxElement = document.querySelector(".catalog__box");
const cardButtonElement = document.querySelector(".card__button");

let counter = 0;
let cartArray = [];
let productItemQtyArray = [];
let productItemPriceArray = [];

const productQty = localStorage.getItem("productQty");
if (productQty > 0) {
  headerBasketElement.style.visibility = "visible";
  basketCounterElement.innerText = productQty;
}

catalogBoxElement.addEventListener("click", (e) => {
  if (
    e.target.className === "card__button" &&
    e.target.innerText === "В корзину"
  ) {
    counter++;
    headerBasketElement.style.visibility = "visible";
    e.target.innerText = "Товар в корзине";
    e.target.classList.remove("card__button");
    e.target.classList.add("catalog__card__button_basket");
    const card = e.target.closest(".card");
    const number = card.getAttribute("data-number");
    cartArray.push(number);
    productItemQtyArray.push(1);
    productItemPriceArray.push(card.getAttribute("data-price"));
    localStorage.setItem("selectedProducts", JSON.stringify(cartArray));
    localStorage.setItem("productQty", counter);
    localStorage.setItem(
      "productItemQtyArray",
      JSON.stringify(productItemQtyArray)
    );
    localStorage.setItem(
      "productItemPriceArray",
      JSON.stringify(productItemPriceArray)
    );
    basketCounterElement.innerText = localStorage.getItem("productQty");
  }
});
