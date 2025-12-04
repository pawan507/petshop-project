//this is customer validation script

const userName = document.getElementById("userName");
const password = document.getElementById("password");
const form     = document.querySelector("form");

//eventhandling for username field
userName.addEventListener("input", () => {
    if (validateUserName(userName.value)) {
        userName.classList.add("valid");
        userName.classList.remove("invalid");
    } else {
        userName.classList.add("invalid");
        userName.classList.remove("valid");
    }
});

//preventing submission if username field is not validated
form.addEventListener("submit", (event) => {
	if(!validateUserName(userName.value)){
		event.preventDefault();
		alert("enter the valid username");
	}
});


//function for validating username
function validateUserName(name) {
    if (name.length < 5) return false;
    if (!/[A-Z]/.test(name)) return false;
    if (!/[a-z]/.test(name)) return false;
    return true;
}
