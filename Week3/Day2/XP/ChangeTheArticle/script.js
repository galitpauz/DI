for (let i = 0; i < 4; i++) {
    let para = document.getElementsByTagName("p")[i]
    para.classList.add("para")
}
let remove = document.getElementsByClassName("para")[3]
remove.remove()



let h1 = document.getElementsByTagName("h1")[0]
console.log(h1)
h1.addEventListener("click",function(){
    h1.style.backgroundColor= "blue"
    h1.style.fontSize = Math.floor((Math.random()  * 101) + 0)+"px"

})

let h3 = document.getElementsByTagName("h3")[0]
console.log(h3)
h3.addEventListener("click",function(){
    h3.style.display = "none";
})

let btn = document.createElement("button");
btn.style.marginTop = "10px";
btn.innerHTML = "Make text Bold";
document.body.appendChild(btn); 
let allP = document.getElementsByClassName("para");
btn.addEventListener("click",function bold(){
    for (let par of allP){
        let text = par.innerHTML;
        par.innerHTML = text.bold();
    }
})

// When the “Submit” button of the form is clicked:
// get the values of the input tags
// make sure that they are not empty,
// then append them to a HTML table, in the div, below the form.
// When you hoover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
let div = document.querySelector(".usersAnswer");
let submit = document.querySelector("#submit");
let form = document.forms[0];
let textInputs = form.querySelectorAll("[type='text']");
submit.addEventListener("click", appendToTable);
function appendToTable(event) {
	event.preventDefault();
	for (data of textInputs) {
		if (data.value == "") {
			alert("Please make sure first name and last name are not empty")
			return;
		}
	}
	if (document.querySelector("table") == null) {
		let table = document.createElement("table");
		div.appendChild(table);
	}
    
	let table = document.querySelector("table");
	let row = document.createElement("tr");
	for (data of textInputs) {
		let cell = document.createElement("td");
		let text = document.createTextNode(data.value)
		cell.appendChild(text);
		row.appendChild(cell);
		data.value = "";
	}
	table.appendChild(row);
}

let p2 = document.getElementsByClassName("para")[1];
p2.addEventListener("mouseover",fadeOut);
function fadeOut() {
	p2.style.transition = "all .3s";
	p2.style.opacity = "0";
}