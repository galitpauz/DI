// Exercise 1


document.getElementById("navBar").setAttribute("id", "socialNetworkNavigation")

// let nav = document.querySelector("#navBar");
// nav.id = "socialNetworkNavigation";
let addElement = document.createElement("li")
let text = document.createTextNode("logout")
addElement.appendChild(text)
document.getElementById("ulList").appendChild(addElement)


// let liAdd = document.createElement("li")

// var li = document.createElement("li");
// var text = document.createTextNode("Logout");
// li.append(text);
// let ulUpdate = document.querySelector("ul");
// console.log(ulUpdate.appendChild[-1])
