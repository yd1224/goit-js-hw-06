const input = document.querySelector("#name-input");
const message = document.querySelector("#name-output")
input.addEventListener("input", handleInput);
function handleInput() {
    message.textContent = event.currentTarget.value;
 if (input.value === "") {
        message.textContent= "Anonymous"
    } 
}
  