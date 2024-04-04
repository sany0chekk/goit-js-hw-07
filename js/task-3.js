"use strict";

const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

const defaultValue = span.textContent;

input.addEventListener("input", (event) => {
  span.textContent = event.currentTarget.value;
  if (!event.currentTarget.value) {
    span.textContent = defaultValue;
  }
});
