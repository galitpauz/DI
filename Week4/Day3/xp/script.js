// // Exercise 1 
// // Analyze these pieces of code before executing them. What will be the outputs ?

// // ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits]; // Add bread and clone(with the rest) vegetables + chicken and add all fruits to the new arr result
// console.log(result);

// // ------2------
// const country = "USA";
// console.log([...country]); // clone the USA as array with rest


// // ------Bonus------
// let newArray = [...[,,]]; //noting - undefined 
// console.log(newArray);


// // Exercise 2 : Employees
// // Instructions
// // Using this array:

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
// // Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)

// const helloUser = users.map(item => "Hello, " + item.firstName)
// console.log(helloUser)

// // Using the filter() method, congratulate only the Full Stack Residents.

// const fullstack = users.filter(item => item['role'] === 'Full Stack Resident')
// const congratulate = fullstack.map(item => "Congratulations, " + item["firstName"])
// console.log(congratulate)



// // Exercise 3 : Star Wars
// // Instructions
// // Using this array 
// let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// // 1. Use the reduce() method to combine all of these into a single string.

// let str = epic.reduce((total, item) => total = total + item);
// console.log(str)

// // Exercise 4 : Employees #2
// // Instructions
// // Using this object:

// let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
//                {name: "Liam", course: "Computer Science", isPassed: false}, 
//                {name: "Jenner", course: "Information Technology", isPassed: true}, 
//                {name: "Marco", course: "Robotics", isPassed: true}, 
//                {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
//                {name: "Jamie", course: "Big Data", isPassed: false}];
// // Use the filter() method to congratulate the students that passed the course.
// let passed = student.filter(item => item["isPassed"] === true);
// let congratulate = passed.map(item => "Congratulations, " + item['name'])
// console.log(congratulate)