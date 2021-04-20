// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:


let btn = document.querySelector("#submit");
btn.addEventListener("click",calc);

function calc(event) {
	event.preventDefault();
	let radius = document.querySelector("#radius").value;
	let sphere= eval(4/3 * Math.PI * Math.pow(radius,3));
	volume.value = sphere;
}