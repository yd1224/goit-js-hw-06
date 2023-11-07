function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const btnChangeColor = document.querySelector("button.change-color");
const colorName = document.querySelector("span.color");

btnChangeColor.addEventListener("click", handleClick);

function handleClick() {
  body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();
}