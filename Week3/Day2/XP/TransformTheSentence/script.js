// Exercise 2 
// Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph.
// Create a function called highlight() that changes the color of all the bold text to blue.
// Create a function called return_normal() that changes the color of all the bold text back to black.
// Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph). 
function getBold_items() {
	return document.querySelectorAll("strong");
}

function highlight() {
	let bold = getBold_items();
	for (text of bold) {
		this.style.color = "blue";
	}
}
function return_normal() {
	let bold = getBold_items();
	for (text of bold) {
		this.style.color = "black";
	}
}
let para = document.querySelector("p");
para.addEventListener("mouseover", highlight);
para.addEventListener("mouseout", return_normal);