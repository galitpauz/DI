// For the following exercise use the HTML presented above:

// Add a “light blue” background color and some padding to the <div>.
// Do not display the first name (John) in the list.
// Add a border to the second name (Pete).
// Change the font size of the whole body.
// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

var colorDiv = document.getElementsByTagName("div")[0];
console.log(colorDiv);
colorDiv.style.backgroundColor="blue";
colorDiv.style.padding="30px";

document.getElementsByTagName("li")[0].style.display = "none";

document.getElementsByTagName("li")[1].style.border = "5px solid black";
document.body.style.fontSize = "x-large";
if (colorDiv.style.backgroundColor==="light blue"){
    alert(`Hello ${document.getElementsByTagName("LI"[0])} and ${document.getElementsByTagName("LI"[1])}`);
}