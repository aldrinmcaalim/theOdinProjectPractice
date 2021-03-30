"use strict";
const dataAtrributeElement = document.querySelector("[data-test]");
const divsWithClasses = document.querySelectorAll(".div-class");
const input = document.querySelector("body > input[type='text']");

dataAtrributeElement.style.color = "green";
const divsWithClassesArray = Array.from(divsWithClasses);
divsWithClassesArray.forEach((div) => (div.style.color = "red"));

console.log(dataAtrributeElement);
console.log(divsWithClasses);
console.log(input);
