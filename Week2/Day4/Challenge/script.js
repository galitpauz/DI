
function stars(){
    let sentence = prompt("Please enter several words separated by commas: ");
    let arrSentence = sentence.split(','); 
    let longest = 0;

    for (word of arrSentence){
        if (word.length > longest){
            longest = word.length;
        }
    }

    console.log("*".repeat(longest + 4));
    for (let i=0; i<arrSentence.length; i++) {
        console.log("* " + arrSentence[i] + " ".repeat(longest - arrSentence[i].length) + " *");
    }

    console.log("*".repeat(longest + 4));
    }

    stars();

// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]