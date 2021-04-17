// Exercise 1 
// function checkDriverAge(age) {
//     if (age > 18){
//         alert("You are old enough to drive, Powering On. Enjoy the ride!");
//     } 
//     else if (age < 18){
//         alert("Sorry, you are too young to drive this car. Powering off"); 
//     }
//     else if (age = 18){
//         alert("Congratulations on your first year of driving. Enjoy the ride!");  
//     } 
// }
// checkDriverAge(23);

// Instructions
// Ask the user for their age, and save the value to a variable.
// Create a function called checkDriverAge() that will notify the user if they are permitted to drive. They must be at least 18 to drive.
// if the user is too young, alert “Sorry, you are too young to drive this car. Powering off”
// if the user is old enough, alert “You are old enough to drive, Powering On. Enjoy the ride!”
// if the user just turned 18, alert “Congratulations on your first year of driving. Enjoy the ride!”
// Instead of using prompt to ask the user for their age, have the checkDriverAge() function accept an argument age.


// Exercise 2


// Given a item price and an array representing the amount of change in your pocket, determine whether or not you can afford the item.
// Change will always be represented in the following order: quarters, dimes, nickels, pennies.

// let values = [0.25, 0.10, 0.05, 0.01];
// function changeEnough(change, itemCost) {
//     var sum = 0;
//     for (let i = 0; i < change.length; i++) {
//         sum += change[i] * values[i];
//     } 
//     if (sum >= itemCost) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// changeEnough([2, 0, 20, 100], 1.00);

// // Exercise 3: 
// //Find The Multiples Of 23
// // Instructions
// // Write a js function that console.logs all multiples of 23 less than 500, at the end return the sum of all the multiples.

// //try 1
// let Outcome = [];
// function multiples() {
//     let sum = 0;
//     for (let i = 0; i < 500; i++) {
//         Outcome[i] = (i * 23)
//         if (Outcome[i] < 500) {
//             Outcome[i] = (i * 23)
//             sum+=Outcome[i]
//             console.log(Outcome[i]);
//         }        
//     }
//     console.log("sum: "+sum);
// }
// multiples();

// // Exercise 4

// let amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// }

// function checkBasket(item){
//     if(amazonBasket.hasOwnProperty(item)){
//     return "Your item located in the basket"
//     } else {
//     return "Your item is not located in the basket";
//     }
// }
// console.log(checkBasket(prompt("Enter an item: ")));


//let item = checkBasket(prompt())

// Create a function called checkBasket().
// It should:
// prompt the user for an item
// let the user know if the item is in the basket
// Hint: Use the in keyword inside the conditional


// Exercise 5 

// let stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// let prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// let shoppingList = ["banana", "orange", "apple"];

// function myBill() {
//     for (item of shoppingList) {
//         if (stock[item]){
//             console.log ([item]+" in stock: "+stock[item]+"   price: " +prices[item]);
//             stock[item]--;
//             console.log ("current "+[item]+" stock: "+stock[item]);
//         }
//     }
// }

// (myBill());

// // Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
// // Create a function called myBill() that takes no arguments.
// // The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// // The item must be in stock.
// // If the item is in stock find out the price in the prices object.
// // Call the myBill() function.
// // Bonus: If the item is in stock, decrease the item’s stock by 1


// // Exercise 6 
// let bill = parseInt(prompt("What is the amount of the bill? "));

// function tipCalc(bill){
//     let tip = 0;
//     if (bill < 50 )
//     {
//         tip = 0.2*bill;
//     }
//     else if (bill >= 50 && bill <= 200)
//     {
//         tip = 0.15*bill;
//     }
//     else if (bill > 200)
//     {
//         tip = 0.1*bill;
//     }
//     console.log("Tip amount: " + parseInt(tip));
//     console.log("Final bill: " + parseInt(bill + tip));
// }
// tipCalc(bill)




// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// The calculator has the following rules:
// 1. Tip 20% when the bill is less than $50,
// 2. Tip 15% when the bill is between $50 and $200,
// 3. Tip 10% if the bill is more than $200.

// Ask John for the amount of the bill.
// Create the program explained above.
// In the end, John would like to know:
// Tip amount.
// Final bill (bill + tip).






// // Exercise 7 
// // It should ask the user for the number of nights they would like to stay in the hotel.
// // If the user doesn’t answer or if the answer is not a number, ask again.
// // The hotel costs $140 per night. The function should return the total price of the hotel.



// let nights = 0;   
// function hotel_cost(nights) {
//     do {
//         nights = parseInt(prompt("How many nights would you like to stay? "))
//    }   while (nights <=0 || isNaN(nights));
//     console.log(total = (140 * nights));
// }

// // Define a function called plane_ride_cost().
// // It should ask the user for their destination.
// // The function should return a different price depending on the location.
// // “London”: 183$
// // “Paris” : 220$
// // All other destination : 300$
// // If the user doesn’t answer or if the answer is not a string, ask again.
// let destination = "";
// function plane_tickets_cost(destination){
//     do {
//         destination = prompt("What is your destination? ");
//     }   while (destination === "" || isNaN(destination));
//     if (destination === "London"){
//         return 183;
//     }
//     else if (destination === "Paris"){
//         return 220;
//     }
//     else{
//         return 300;
//     }
// }

// // Define a function called rental_car_cost().
// // It should ask the user for the number of days they would like to rent the car.
// // If the user doesn’t answer or if the answer is not a number, ask again.
// // Calculate the cost to rent the car. The car costs $40 everyday.
// // If the user rents a car for more than 10 days, they get a 5% discount.
// // The function should return the total price of the car rental.
// let days = 0;   
// function rental_car_cost(days){
//     do { 
//         days = parseInt(prompt("Enter the number of days for car renting: "));
//     }   while (days <= 0 || isNaN(days));
// //     do {
// //     days = parseInt(prompt("How many days would you like to rent a car? "));
// // }   while (days <= 0 || isNaN(days));
//     if (days < 10){
//         return (days * 40);
//     }
//     else{
//         return (0.05 *(days * 40));
//     }
// }


// // Define a function called total_vacation_cost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// // Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// // Hint: You have to call the functions hotel_cost(), plane_ride_cost() and rental_car_cost() inside the function total_vacation_cost.

// function vacation_cost(nights, destination, days){




//     console.log(parseInt("hotel cost: " + nights)),
//     console.log(parseInt("plane tickets cost: " + destination)),
//     console.log(parseInt("The car cost: " + days)),
//     console.log(parseInt("Total cost :" + nights + destination + days))
// }
// vacation_cost(hotel_cost(nights),plane_tickets_cost(destination),rental_car_cost(days));

