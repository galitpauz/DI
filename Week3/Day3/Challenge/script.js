// Create an input type text that takes/shows only letters.
// Hint: use the keyup event listener and remove any character that is not a letter.
// Hint : Check out keycodes in Javascript or Regular Expressions





let letters = document.getElementById("letters");
let textDisplay = document.getElementById("show");



letters.addEventListener("keydown",alphaOnly);

function alphaOnly(event) {
	let key = event.keyCode;
	if (key < 65 || key >90) {
		event.preventDefault();
	}
}

