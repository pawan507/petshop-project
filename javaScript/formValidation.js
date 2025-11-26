const form= document.querySelector("form"); //we are fetching the form using DOM
const inputs=form.querySelectorAll("input");
const firstName=document.getElementById("firstName");
const userName=document.getElementById("userName");
const lastName=document.getElementById("lastName");
const email=document.getElementById("email");
const password=document.getElementById("password");
const confirmPassword=document.getElementById("confirmPassword");



//declaring some variables
let firstNameValid= true;  //assume both firstName as well as password to be valid at first
let passwordValid= true;
let emailValid=true;
let lastNameValid=true;
let userNameValid=true;

//declaration of touched flag
let firstNameTouched=false; //initializing both as false. As soon as user lands into the field, it will be turned into true
let passwordTouched=false;
let lastNameTouched=false;
let emailTouched=false;
let userNameTouched=false;

//now defining the function that validates the input
function validatePassword(password, confirmPassword){
	passwordValid=true; //reseting
	if(confirmPassword.trim().length==0 || password.trim().length==0){
		passwordValid=false;
		return false;
	}
	if(password.trim()!=confirmPassword.trim()){
		passwordValid=false;
		return false;
	}
	return true;
}

function validateUserName(userName){    //validating our userName
	userNameValid=true;//reseting
	if(userName.length<5){
		userNameValid=false;
		return false;
	}
	if(!(/[A-Z]/.test(userName))){   //if userName has no uppercase letter then also it is unvalid
		userNameValid=false;
		return false;
	}
	
	if (!/[a-z]/.test(userName)){
		userNameValid=false;
		return false;
	}
	return true;
}

function validateFirstName(firstName){    //validating our firstName
	firstNameValid=true;//reseting
	if(firstName.length<5){
		firstNameValid=false;
		return false;
	}
	if(!(/[A-Z]/.test(firstName))){   //if userName has no uppercase letter then also it is unvalid
		firstNameValid=false;
		return false;
	}
	
	if (!/[a-z]/.test(firstName)){
		firstNameValid=false;
		return false;
	}
	return true;
}


function validateEmail(email){
	emailValid=true; //reset the value
	if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
		emailValid=false;
	}
	return true;
}

function validateLastName(lastName){
	//reset lastNameValid to true
	lastNameValid=true;
	if(lastName.trim().length <=2){
		lastNameValid=false;
		return false;
	}
	return true;
}


//now removing or adding styles based on the validation
function applyChanges(){
	if(firstNameTouched){
		if(firstNameValid ){
			firstName.classList.add("valid");
			firstName.classList.remove("invalid");
		}
		if(!firstNameValid ){
			firstName.classList.remove("valid");
			firstName.classList.add("invalid");
		}
	}
	if(passwordTouched){
		if(passwordValid ){
			password.classList.add("valid");
			confirmPassword.classList.add("valid");
			password.classList.remove("invalid");
			confirmPassword.classList.remove("invalid");
		}
		if(!passwordValid ){
			password.classList.remove("valid");
			confirmPassword.classList.remove("valid");
			password.classList.add("invalid");
			confirmPassword.classList.add("invalid");
		}
	}
	if(lastNameTouched){
		if(lastNameValid ){
			lastName.classList.add("valid");
			lastName.classList.remove("invalid");
		}
		if(!lastNameValid ){
			lastName.classList.remove("valid");
			lastName.classList.add("invalid");
		}
	}
	if(emailTouched){
		if(emailValid ){
			email.classList.add("valid");
			email.classList.remove("invalid");
		}
		if(!emailValid){
			email.classList.remove("valid");
			email.classList.add("invalid");
		}
	}
	
	if(userNameTouched){
		if(userNameValid ){
			userName.classList.add("valid");
			userName.classList.remove("invalid");
		}
		if(!userNameValid ){
			userName.classList.remove("valid");
			userName.classList.add("invalid");
		}
	}
	
	
	
}
		


//now event handling 
firstName.addEventListener("input", function(){
	firstNameTouched=true; 
	validateFirstName(firstName.value);
	applyChanges();
}
);

confirmPassword.addEventListener("input", function(){
	passwordTouched=true;
	validatePassword(password.value, confirmPassword.value);
	applyChanges();
	
}
);

password.addEventListener("input", function(){
	passwordTouched=true;
	validatePassword(password.value, confirmPassword.value);
	applyChanges();
}
);

lastName.addEventListener("input", function(){
	lastNameTouched=true; 
	validateLastName(lastName.value);
	applyChanges();
}
);

email.addEventListener("input", function(){
	emailTouched=true; 
	validateEmail(email.value);
	applyChanges();
}
);


userName.addEventListener("input", function(){
	userNameTouched=true; 
	validateUserName(userName.value);
	applyChanges();
}
);


//before submit action checking if all the values are in correct format or not
form.addEventListener("submit", function(event){
	userNameValid=validateUserName(userName.value);
	firstNameValid=validateFirstName(firstName.value);
	passwordValid=validatePassword(password.value, confirmPassword.value);
	emailValid=validateEmail(email.value);
	lastNameValid=validateLastName(lastName.value);
	applyChanges();
	if(!userNameValid){
		event.preventDefault();
		alert("Username must have atleast 5 character including atleast one upper and lower case character ");
	}
	if(!firstNameValid){
		event.preventDefault();
		alert("firstname must have atleast 5 character including atleast one upper and lower case character ");
	}
	if(!passwordValid){
		event.preventDefault();
		alert("password and confirm password field must be same");
	}
	if(!lastNameValid){
		event.preventDefault();
		alert("lastName must have atleast 2 characters");
	}
	if(!emailValid){
		event.preventDefault();
		alert("enter valid email");
	}
});