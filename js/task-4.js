"use strict";

const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.email.value;
  const password = form.elements.password.value;

  const user = {};

  if (login == "" || password == "") {
    return alert("All form fields must be filled in");
  }

  user.login = login;
  user.password = password;

  form.reset();

  console.log(user);
});
