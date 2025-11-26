//defining the function that calculates the total price with taxes
function getTotalPrice(priceWOTax){
	const taxRate=0.19; // tax is 19 percentage
	const priceWTax=priceWOTax + taxRate * priceWOTax;
	return priceWTax;
}

//fetching all the required data from product section using dom
const form = document.getElementById("priceForm");
const priceInput = document.getElementById("priceWOTax");
const totalPrice = document.getElementById("totalPrice");

const price=priceInput.value;

form.addEventListener("submit", function(event) {
	event.preventDefault(); // prevent page reload
	const price=parseFloat(priceInput.value);
    const priceWithTax=getTotalPrice(price);
	totalPrice.textContent="The total price is : " +priceWithTax.toFixed(2);
});