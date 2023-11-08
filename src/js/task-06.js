const input = document.querySelector("#validation-input");
const length = input.getAttribute("data-length");
input.addEventListener("blur", handleBlur);
function handleBlur(event) {
   const inputValue = event.currentTarget.value;
    const isValid = inputValue.length === Number(length);


    // Toggle "valid" or "invalid" classes based on the validity.

        input.classList.toggle("valid", isValid); 

         input.classList.toggle("invalid", !isValid);

   
   
}