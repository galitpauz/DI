// Exercise 1

// let building = {
//     number_levels : 4,
//     number_of_apt_by_level : {
//         "1": 3,
//         "2": 4,
//         "3": 9,
//         "4": 2,
//     },
//     name_of_tenants : ["Sarah", "Dan", "David"],
//     number_of_rooms_and_rent:  {
//         "Sarah": [3, 990],
//         "Dan":  [4, 1000],
//         "David": [1, 500],
//     },
// }
// console.log("levels in the building: " + building.number_levels);
// console.log(building.number_of_apt_by_level[1] + building.number_of_apt_by_level[3]);
// console.log(building.name_of_tenants[1], building.number_of_rooms_and_rent.Dan[0]);
// if ((building.number_of_rooms_and_rent.Sarah[1] + building.number_of_rooms_and_rent.David[1]) > building.number_of_rooms_and_rent.Dan[1]){
//     building.number_of_rooms_and_rent.Dan[1] += 100;
//     console.log(building.number_of_rooms_and_rent);
// }

// Console.log the number of levels in the building.
// Console.log how many apartments are on levels 1 and 3.
// Console.log the name of the second tenant and the number of rooms he has in his apartment.
// Check if the sum of Sarah and David’s rent is bigger than Dan’s rent.
// If it is than increase Dan’s rent.

// // Exercise 2
// let age = [20,5,12,43,98,55];
//  for(num of age) {
//     (num%3 === 0) ? console.log(num +" true") : console.log(num +" false");  
//  }

 // Exercise 3

 let age = [20,5,12,43,98,55];
 let result = 0;
 for (let num in age){
    result += age[num];
 }
 console.log(result);

 let largest = 0;
 for (let num in age){
     if(age[num] > largest){
         largest = age[num];
     }
 }
 console.log(largest);

//  Requirements : Don’t use built-in Javascript methods to answer the following questions. You have to create the logic by yourself. Use simple for and while loops.
// 1. Console.log the sum of all the numbers in the age array.
// 2. Console.log the largest age in the array.