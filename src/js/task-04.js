let counterValue = 0;
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");
btnDecrement.addEventListener("click", handleDecrClick);
btnIncrement.addEventListener("click", handleIncrClick);
function handleDecrClick() {
    counterValue -= 1;
    value.textContent = counterValue;

}
function handleIncrClick() {
    counterValue += 1;
    value.textContent = counterValue;

}
