const input = document.querySelector("input#font-size-control");
const text = document.querySelector("span#text")
text.style.fontSize = input.value + "px";
input.addEventListener("input", handleInput)

function handleInput(event) {
    const inputValue = event.currentTarget.value;
 text.style.fontSize = inputValue + "px";
}