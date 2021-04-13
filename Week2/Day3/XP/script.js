

// //Exercise 1 
// let colors = ["Purple", "Black", "Blue"]

//  for (let color in colors) {
//     let num = parseInt(color) + 1;
//     console.log(`My #${num} color is ${colors[color]}`);
//   }


// //Exercise 2
// // Write code to remove “Greg” from the people array.
// // Write code to replace “James” to “Jason”.
// // Write code to add your name to the end of the people array.
// // Using a loop, iterate through the people array and console.log each person.
// // Using a loop, iterate through the people array and after you console.log “Jason” exit the loop.
// // Write code to make a copy of the people array using slice. The copy should NOT include “Mary” or your name.
// // Write code that console.logs Mary’s index. take a look at indexOf on google.
// // Write code that gives the indexOf “Foo” (this should return -1). Why does it return -1
// // Create a variable called last which value is the last element of the array.
// // Hint: What is the relationship between the index of the last element in the array and the length of the array?

// let people = ["Greg", "Mary", "Devon", "James"];
// let remove = people.shift();
// let jason = people.splice(3, 1, 'Jason');
// let galit = people.push("Galit");

// for (let person of people) {
//     console.log(person);
//     if (person === "James") {
//         break;
//     }
// }

// let copy = people.slice(1, 5);
// console.log(copy);

// let index = people.indexOf("Mary");
// console.log(index);

// let indexFoo = people.indexOf("Foo");
// console.log(indexFoo);

// let last = (people.length) - 1;
// console.log(last);

// //Exercise 3 
// do{
//     var num = Number(prompt("Enter a number 10 or larger "))
// }
// while (num<10);

// //Exercise 4 
// let guestList = {
//     randy: "Germany",
//     karla: "France",
//     wendy: "Japan",
//     norman: "England",
//     sam: "Argentina"
//   }

// let guest = prompt("Please enter your name ");
//     if (guestList[guest]){
//         console.log(`Hi I'm ${guest} and I'm from ${guestList[guest]}`);
//     }
//     else{
//         console.log("Hi, I'm a guest.");
//     }

// 1. Prompt the student for their name :
// * If the name is in the object, console.log the name of the student and the country they come from.
// example: "Hi! I'm [name], and I'm from [country]."
// * Hint: Look up the statement if ... in
// * If the name is not in the object, console.log: "Hi! I'm a guest."

//Exercise 5 

// Create an object called family with a few key value pairs.
// Console.log the keys. (using a for loop).
// Console.log the values. (using a for loop).

// let family = {
//     mom:"Marge", 
//     dad:"Homer",
//     child1: "Lisa",
//     child2: "Bart",
//     child3: "Maggie",
//     dog:"Santa's Little Helper"
// }
// // Console.log the keys. (using a for loop).
// for (let member in family){
//     console.log(member);
// }
// // Console.log the values. (using a for loop).
// for (let member in family){
//     console.log(family[member]);
// }

// // Exercise 6 
// let details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
//   }

// let string = "";

// for (item in details){
//     string +=(" " + item + " " + details[item]);
// }
// console.log(string);
//Exercise 7 
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
names = names.sort();
let society = "";
    for (x of names){
        society += x[0];
        
    }
console.log(`The secret society name is: ${society}`);

// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society.