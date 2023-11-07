const form = document.querySelector("form.login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
   
    const info = {
        email: email.value,
        password: password.value 
    }
    if ((email.value === "" || password.value === "")|| (email.value === " "|| password.value === " ")) {
        alert("Please, complete the form");
    } else {
        console.log(info);
        form.reset()
    }

}
