"use strict";
//Переключение вкладок

const tabElements = document.querySelectorAll(".tab__button");
const contentElements = document.querySelectorAll(".catalog__items");

tabsSwitch(tabElements);
function tabsSwitch(buttonNames) {
  for (let i = 0; i < buttonNames.length; i++) {
    buttonNames[i].addEventListener("click", (event) => {
      removeClassFromList(tabElements, "tab--active");
      addClassToListElement(tabElements[i], "tab--active");

      removeClassFromList(contentElements, "content--active");
      addClassToListElement(contentElements[i], "content--active");
    });
  }
}

function removeClassFromList(elementName, ListName) {
  elementName.forEach((element) => element.classList.remove(ListName));
}

function addClassToListElement(elementName, className) {
  elementName.classList.add(className);
}
