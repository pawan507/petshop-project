/**
 * changing the mode: dark<=>bright
 * 
 */

const modeBtn=document.getElementById("mode-btn");
modeBtn.addEventListener("click",() =>{
	document.body.classList.toggle("dark-mode");
});