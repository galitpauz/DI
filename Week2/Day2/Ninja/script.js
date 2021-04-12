// Exercise 1

// Given the years two people were born, find the date when the younger one is exactly half the age of the older.

let year1 = parseInt(prompt("What year was person1 born?"));
let year2 = parseInt(prompt("What year was person2 born?"));

if (year1 > year2){
    let diff = year1 - year2;
    let year = year1 + diff;
    console.log(`In ${year} person1 will be ${year-year1} years old, which is half the age of person2 (who will be ${year-year2} years old).`)
}
else if (year1 < year2){
    let diff = year2 - year1;
    let year = year2 + diff
    console.log(`In ${year} person2 will be ${year-year2} years old, which is half the age of person1 (who will be ${year-year1} years old).`)
}
else if (year1 === year2){
    console.log("person1 and person2 are the same age.");
}
else{
    console.log("You entered invalid data.");
}

// Exercise 2

let zipCode = parseInt(prompt("Please enter your ZipCode")) 


if ((zipCode.length === 5) && (isNumeric(zip) === true) && !(zipCode.indexOf(' ') >= 0)) {
    
    console.log(zipCode);
}
else {
    console.log("Your Zip Code is not valid!");
}

// Exercise 3

let secret = toLowerCase(prompt("Enter a word: "));

console.log(secret.replace(/[aeiou]/ig, ));

