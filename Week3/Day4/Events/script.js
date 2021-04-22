// ----------------------------
// DOM - DAY4
// ----------------------------
// REVIEW ON EVENTS
// INSTRUCTIONS
// Create a function called getBold_items() that takes no parameter. 
// This function should collect all the bold items inside the paragraph.
// Create a function called highlight() that changes the color of all the bold text to blue.
// Create a function called return_normal() that changes the color of all the bold text back to black.
// Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example
// ------------------------------
// WITH COMMENTS
// ------------------------------
function getBoldItems(){
	//1st possibility
	// let boldItems = document.getElementsByTagName("strong");
	//2st possibility
	let boldItems = document.querySelectorAll("#paragraph strong");
	return boldItems;
}
function highlight(){
	// console.log(boldItems) : NOT GOOD --> UNDEFINED
	let boldItemFromParagraph = getBoldItems(); // HTML COLLECTION OF ALL THE STRONG TAG INSIDE THE PARAGRAPH
	// boldItemFromParagraph.style.backgroundColor = "blue"; --> NOT POSSIBLE because  we cannot set the style of an array
	// we can only set the style of an element --> need a loop, to loop through the elements of the array
	for (let i = 0; i < boldItemFromParagraph.length ; i++){
		// 1st possibility : boldItemFromParagraph[i].style.color = "blue";
		boldItemFromParagraph[i].classList.toggle("changeColor")
	}
	console.log(boldItemFromParagraph)
}
function returnNormal(){
	// console.log(boldItems) : NOT GOOD --> UNDEFINED
	let boldItemFromParagraph = getBoldItems(); // HTML COLLECTION OF ALL THE STRONG TAG INSIDE THE PARAGRAPH
	// boldItemFromParagraph.style.backgroundColor = "blue"; --> NOT POSSIBLE because  we cannot set the style of an array
	// we can only set the style of an element --> need a loop, to loop through the elements of the array
	for (let i = 0; i < boldItemFromParagraph.length ; i++){
		// 2nd possibility : boldItemFromParagraph[i].style.color = "black";
		boldItemFromParagraph[i].classList.toggle("changeColor")
	}
	console.log(boldItemFromParagraph)
}
let p = document.querySelector("#paragraph");
//add an event listener to the p element
// event : mouseover, the callback function is highlight : no need for parentheses (ie. highlight)
p.addEventListener("mouseover", highlight)
p.addEventListener("mouseout", returnNormal)
// ------------------------------
// WITHOUT COMMENTS
// MORE EFFICIENT
// ------------------------------
function getBoldItems(){
	let boldItems = document.querySelectorAll("#paragraph strong");
	return boldItems;
}
//make the variable global
let boldItemFromParagraph = getBoldItems();
function highlight(){
	for (let i = 0; i < boldItemFromParagraph.length ; i++){
		boldItemFromParagraph[i].classList.toggle("changeColor")
	}
}
// highlight and returnNormal do the same things. So we can delete one of them
// function returnNormal(){
// 	for (let i = 0; i < boldItemFromParagraph.length ; i++){
// 		boldItemFromParagraph[i].classList.toggle("changeColor")
// 	}
// }
let p = document.querySelector("#paragraph");
p.addEventListener("mouseover", highlight)
// we change the callback function from returnNormal to highlight
p.addEventListener("mouseout", highlight)