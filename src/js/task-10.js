function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const box = document.querySelector("div#boxes");



btnCreate.addEventListener("click", createBoxes)
btnDestroy.addEventListener("click", destroyBoxes)
 
function createBoxes() {
    const amount = Number(input.value);
  for (let i = 0, j = 30; i < amount; i += 1, j+=10){
     const div = document.createElement("div");
      div.style.backgroundColor = getRandomHexColor();
      div.style.width = j+"px";
      div.style.height = j+"px";
      box.append(div);
    }
  }



function destroyBoxes() {
  box.innerHTML="";
  }


