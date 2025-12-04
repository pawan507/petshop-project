/**
 * changing the mode: dark<=>bright
 * 
 */

const modeBtn=document.getElementById("mode-btn");

/*
//this event listener is enough to change theme but won't remain if reloaded.
//also we need to add this script to all available pages to maintain the consistent theme
modeBtn.addEventListener("click",() =>{
	document.body.classList.toggle("dark-mode");
});
*/

if(modeBtn!=null){
    //change theme on click on button "change Mode"
    modeBtn.addEventListener("click",() =>{
        document.body.classList.toggle("dark-mode");

        //save the current theme to local computer
        if(document.body.classList.contains("dark-mode")){
            localStorage.setItem("theme","dark-theme");
        }

        else{
        localStorage.setItem("theme","light-theme");
        }
    });

    // apply saved theme when page is loaded again
    window.addEventListener("load", () => {
        if(localStorage.getItem("theme") == "dark-theme") {
            document.body.classList.add("dark-mode");
        }
    });

}

else{
    if(localStorage.getItem("theme") == "dark-theme") {
            document.body.classList.add("dark-mode");
        }
}
