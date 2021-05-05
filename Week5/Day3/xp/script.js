// // Exercise 1 : Comparison
// // Instructions
// // Create a function called compareToTen that takes a number as an argument.
// // The function should return a Promise that tests if the value of the given argument is less or greater than 10.
// // Test:

// // compareToTen(15)
// //   .then(result => console.log(result))
// //   .catch(error => console.log(error))

// // compareToTen(8)
// //   .then(result => console.log(result))
// //   .catch(error => console.log(error))

// const compareToTen =((num) => {
//     let p = new Promise ((resolve, reject) => {
//         if (num > 10) {
//             resolve('Greater than 10')
//         }
//         else {
//             reject('Less than 10');
//         } 

//     })
//     return p
// })

// compareToTen(8).then((num) => {
//     console.log(num);
// })
// .catch( (error) => {
//     console.log(error);
// })




// Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// Read about Promise.resolve() and Promise.reject().
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.


// const selfResolved =(() => {
//     let promise = new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             resolve ('success')
//         }, 4000)
//     })
// // })

// promise.then(result =>{
//     console.log(result);
// })

// let res = console.log('success')
// let cast = Promise.resolve((res)=>{
//     cast.then.setTimeout(() => {    
//     }, 4000);

// })
// let result = "Ooops something went wrong"
// function rejected(result) {
//     console.error(result);
//   }


// Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
// const res = (value) =>{
//     Promise.resolve(value).then(num => {
//     })
//     return value;
// }

// const rej = (error) =>{
//     Promise.reject(error).then((boo) => {
//             return error;
//         });
// }

// console.log(res(3))
// console.log(rej('Boo'))


