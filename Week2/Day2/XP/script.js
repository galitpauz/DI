
//Exercise 1
let x = 5;
let y = 2;

if (x < y) {
    console.log(y);
}
else {
    console.log(x);
}

//Exercise 2
let newDog = "Chihuahua";

console.log(newDog.length)

console.log(newDog.toUpperCase())

if (newDog == "Chihuahua"){
    console.log("I love Chihuahuas");
}
else {
    console.log("I don't care, I prefer cats");
}

//Exercise 3
let userNum = prompt("Check a number")

if (userNum % 2 === 0) {
    console.log("x is an even number");
}
else {
    console.log("x is an odd number");
}

//Exercise 4

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }

    return whatHappens;
}

console.log(moveCommand("forward")); //undefined
console.log(moveCommand("back")); //you arrived home
console.log(moveCommand("right")); //you found a river
console.log(moveCommand("left")); //undefined

//Exercise 5

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

if (users.length === 0) {
    alert("no one is online");
}
else if(users.length === 1) {
    alert(`${users[0]} is online`);
}

else if(users.length === 2) {

    alert(`${users[0]} and ${users[1]} are online`);
}

else {

    alert(`${users[0]} and ${users[1]} and ${users.length - 2} more are online`);
}
