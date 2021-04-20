let noun = document.querySelector("#noun");
let adjective = document.querySelector("#adjective");
let person = document.querySelector("#person");
let verb = document.querySelector("#verb");
let place = document.querySelector("#place");
let story = document.querySelector("#story");
let button = document.querySelector("#lib-button");

button.addEventListener("click",makeStory);

function makeStory(){
    if (noun.value === "" || adjective.value ==="" || person.value ==="" || verb.value ==="" || place.value===""){
        alert("You did not enter all the values");
        return;
    } 
    else{
        let blankStory = `Once upon a time there was a ${adjective.value} ${noun.value} who wanted to ${verb.value} with ${person.value} in ${place.value}.`;
        document.querySelector("#story").innerHTML = blankStory;
    }
}


// Follow these steps :
// Get the value of each of the inputs in the HTML file when the button is clicked.
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
