const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.querySelector("#ingredients");
const arr = [];
for (const item of ingredients) {

  const elem = document.createElement("li");
  elem.textContent = item;
  elem.classList.add("item");
  arr.push(elem.outerHTML);

}
ul.insertAdjacentHTML("beforeend", arr.join(''));

