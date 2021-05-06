// Exercise 1:
// Convert the below promise into async await:

// fetch("https://swapi.dev/api/starships/9/")
//     .then(response => response.json())
//     .then(console.log);


// const fetchStarship = async() => {
//     try {
//         let response = await fetch('https://swapi.dev/api/starships/9/');
//         const data = await response.json();
//         console.log(data);
//     }
//     catch (err) {
//         console.log(err)
//     }
// }
// fetchStarship()



// Exercise 2: Analyze
// Instructions
// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall(); 
// Analyze the code provided above what will be the outcome?

//first response will be the asyncCall then the Promise resolve
