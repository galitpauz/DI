//Explanation of the game : the point of the game is to guess the number that the computer has in “mind”.
// In the JS file, create a function called playTheGame() that takes no parameter.
// In the function, start by asking the user if they would like to play the game (Hint: use the built-in confirm() function).

function playTheGame() {
    if(confirm("Do you want to play the game?")){
        let userNum = parseInt(prompt("Please enter a number between 0 and 10"));
        console.log("User: "+ userNum +typeof(userNum));
        let max = 11;
        if (userNum == isNaN) {
            alert("Sorry its empty, Goodbye");
        } else if (userNum === typeof(Number)) {
            alert("Sorry it’s not a type number, Goodbye");
        } else if ((userNum < 0 || userNum > 10)) {
            alert("Sorry it’s not a good number, Goodbye");
        } else {
            let computerNum = math.floor(Math.random()* max);
            console.log("computer:" +computerNum);
            test(userNum,computerNum);
        }
    } else alert("No problem, Goodbye");
}


function test(userNum,computerNum) {
    console.log("Your number is" + userNum);
    for (let i= 0; i<3; i){
        if (userNum < computerNum){
            alert("Your number is smaller then the computer’s, guess again")
        }
        else if(userNum > computerNum){
            alert("Your number is bigger then the computer’s, guess again")
        }
        else if (userNum == computerNum){
            alert("Your guess is correct, WINNER!")
        } 
        alert("out of chances");
    }
}
playTheGame()