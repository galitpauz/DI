
// Exercise 2: Drag & Drop
// Instructions
// Create a draggable square/box element in your HTML file.
// In your javascript file add the functionality which will allow you to drag the square/box and drop it into a larger box.

let bigBox = document.getElementById("bigBox")

let boxElement = document.getElementById("box")
boxElement.setAttribute('draggable','true');


let pos = 0;
let posMax = 350
function border(){
    if(pos == 350){
        clearInterval(id)
    }
}

boxElement.addEventListener("dragover", function(event) {
    event.target.style.backgroundColor = "lightgreen";
    event.preventDefault();
  
    console.log(event)
    let draggeble = document.querySelector('box')
    bigBox.appendChild(draggeble)
    console.log(boxElement)
    event.target.style.position = "absolute"; //Necessary
  });



  




  