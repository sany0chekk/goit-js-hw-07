const changeColor = document.querySelector(".change-color");
const showColor = document.querySelector(".color");

changeColor.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  showColor.textContent = `${newColor}`;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
