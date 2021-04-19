// let div = document.querySelector('#container') //exmple
// Exercise 1
let nav = document.querySelector("#navBar");
nav.id = "socialNetworkNavigation";

let liAdd = document.createElement("li")

var li = document.createElement("li");
// li.id = "newID";




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


// Exercise 3
// For the following exercise use the HTML presented above:

// Add a “light blue” background color and some padding to the <div>.
// Do not display the first name (John) in the list.
// Add a border to the second name (Pete).
// Change the font size of the whole body.
// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

// console.log(document.body)


// In the <div> above, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (li).
// Finally, append this updated list node to the unordered list above, using the appendChild method.
// Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last li elements from their parent element (ul). Display the text of each link. (Hint: use the textContent property).
