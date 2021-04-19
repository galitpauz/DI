
// Exercise 2


let ul1 = document.querySelector("ul");
let ul2 = document.querySelector("ul")[0];
ul1.children[1].innerHTML = "Tal";

let uls = document.querySelectorAll('ul');
let create_item = document.createElement("li");
create_item.innerHTML = "Hey students";


for (let ul of uls) {
    console.log(ul);
    ul.appendChild(create_item);
}
