// // Exercise 1 : Location
// // Instructions
// // Analyze the code below. What will be the output?
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// //I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)






// // Exercise 2: Display Student Info
// // Instructions
// // Create a function called displayStudentInfo(studentObject) that accepts an object as a parameter.
// // For example displayStudentInfo({first: 'Elie', last:'Schoppik'}).
// const student = {
//     first: 'Elie',
//     last: 'Schoppik'
// }
// const displayStudentInfo = ((studentObject) => {
//     const {first , last} = student
//     return student
// });

// console.log(displayStudentInfo(student));

// // The function should return a string as seen in the example below.
// // displayStudentInfo({first: 'Elie', last:'Schoppik'}) 

// // 'Your full name is Elie Schoppik'`
// // Destructure this object inside the function.


// // Destructuring the object into our variables

// const displayStudentInfo = ((student) => {
//     const {first , last} = student
//     return `Your full name is ${first} ${last}`;
// });

// console.log(displayStudentInfo(student));



// // Exercise 3: User & Id
// // Instructions

// // Using this object 
// const users = { user1: 18273, user2: 92833, user3: 90315 }
// const propertyValues = Object.entries(users);
// console.log(propertyValues)
// // Using methods taught in class, turn the users object into an array:
// // Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// // FYI : The number is their ID number.

// // Modify the outcome of part 1, by multipling the user’s ID by 2.
// // Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
// for (user of propertyValues) {
// 	user[1] = user[1]*2;
// }

// console.log(propertyValues);


// Exercise 4 : Person Class
// Instructions
// Analyze the code below. What will be the output?
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const member = new Person('John');
// console.log(typeof member);
//obj

// Exercise 5 : Dog Class
// Instructions
// Analyze the options below.
class Dog {
  constructor(name) {
    this.name = name;
  }
};
// Which constructor will successfully extend the Dog class?
//   // 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };


//   // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};


//   // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };


//   // 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };


// number 2