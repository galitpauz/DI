// Exercise 1 : Scope
// Instructions
// What is the value of a in all the following functions.
// // #1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);      //    a= 3
// }

 
// // //#2
// var a = 0;          //     a=0
// function q2() {
//     a = 5;   
// }

// function q22() {
//     alert(a);        //    a = undefine
// }


// //#3
// function q3() {
//     window.a = "hello";
// }


// function q32() {
//     alert(a);       //   a = undefine
// }



// //#4
// var a = 1;
// function q4() {
//     var a = "test";
//    alert(a);      //    a = 'test'
// }


// //#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a);      //    a=5


// // Exercise 2 : Ternary Operator
// // Instructions
// // Change the conditional into a ternary and assign the function to a variable called experiencePoints.
// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }
// function experiencePoints() {(winBattle()) ? 10 : 1; }


// // Exercise 3 : Colors
// // Instructions
// // Using this array :
// // Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// // Hint : Use the array methods taught in class.
// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach((item, index) => console.log(`${index+1}# choice is ${item}`));


// // Exercise 4 : Colors #2
// // Instructions
// // Using these arrays :

// // Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// // Hint : Use the array methods taught in class.

// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let ordinal = ["th","st","nd","rd"];

// color.forEach((item, i) => {
//     let ord;
//     if (i>2) {
//         ord = ordinal[0];
//     } else {
//         ord = ordinal[i+1];        
//     }
//     console.log(`${i+1}${ord} choice is ${item}`)});




// Exercise 5 : Is It A String ?
// Instructions
// Write a JavaScript function that checks whether the value of an input is a string or not.

// const str = ((input) => {
//     return(typeof input === "string") ? 'String': 'Not A String'  
// })


// console.log(str('hello')); 

// console.log(str([1, 2, 4, 0]));



// // Exercise 6 : Bank Details
// // Instructions
// // In this exercise, you have to decide which type of variables you have to use:

// // Create a global variable called bankAmount which value is the amount of money currently in your account.
// // Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// // Create an array with all your monthly expenses - both positive and negative (money made and money spent).
// // Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
// // Create a program that modifies the expenses so that they will include taxes (multiply each expense by the VAT).
// // Display your current bankAccount standing at the end of the month.

// let bankAmount = 10;
// let vat = 0.17;
// let details = [200, -100, 146, 167, 2900]

// details.forEach(item => {
//         bankAccount=item*vat
// })
// console.log(bankAmount);