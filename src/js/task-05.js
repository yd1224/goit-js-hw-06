const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

// Add event listener to the name input field
nameInput.addEventListener("input", handleInput);

function handleInput(event) {
    const trimmedValue = event.currentTarget.value.trim();
    nameOutput.textContent = trimmedValue !== "" ? trimmedValue : "Anonymous";
}