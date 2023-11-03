const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
for (const item of ingredients) {
  const ul = document.querySelector("#ingredients");
  const elem = document.createElement("li");
  elem.textContent = item;
  elem.classList.add("item");
  ul.insertAdjacentElement("beforeend", elem);

}
