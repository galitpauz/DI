// Exercise 1

let userLanguage = prompt("which language you speak");

let language = userLanguage.toLowerCase();

switch (language){
    case "french":
        alert("Bonjour");
        break
    case "english":
        alert("Hello");
        break;
    case "hebrew":
        alert("Shalom");
        break;
    default:
        alert("01110011 01101111 01110010 01110010 01111001")
}

//Exercise 2

let grade = parseInt(prompt("Enter your grade"));

if (grade > 90) {
    console.log("A")
}
else if (80 < grade && grade <= 90) {
    console.log("B");
}
else if (70 <=  grade && grade <= 80) {
    console.log("C");
}
else if (grade < 70) {100
    console.log("D");

}

// Exercise 3
let str = prompt("Enter a verb");

//If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.
if (str.length >= 3 && !(str.endsWith("ing"))) {
    console.log(`${str}ing`);
}
//If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
else if (str.length >= 3 && str.endsWith("ing")){
    console.log(`${str}ly`);
}
//If the length of the string is less than 3, leave it unchanged.
else {
    console.log(str);

}

