//pending 
//Promises & Asynce/await is a new way to write asynchronous


//#1
// const p = new Promise((resolve, reject) => {
//     if(true){
//         resolve('hello world')
//     }
//     else {
//         reject('error');
//     }
// });

// // console.log('after');

// // p.then(result =>{
// //     console.log(result)
// // })
// // .catch(reject => {
// //     console.log(reject);
// // });

// p.then(result =>{
//     return result + "?"
// })
// .then(result =>{
//     return result + "!"
// })
// .then(result => { //any name for the argument
//     return result + "#"
// })
// .then (r => {
//     console.log(r)
// })
// .catch(reject => {
//     console.log(reject);
// });

// console.log("hello" + result);

// //#2
// const promiseFunction = new Promise ((resolve, reject) => {
//     const add = () => {
//         return a + b;
//     }
//     resolve(add(2, 2));
// });

// promiseFunction.then((data) => {
//     console.log(data);
// })
// .catch( (error) => {
//     console.log(error);
// })



// // Exercise 1:
// // Write a function compareToTen that takes a number
// // as an argument and returns a Promise that tests
// // if the value is less than or greater than the value 10
// //if greater to 10 resolve the promise if not reject 
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

// compareToTen(5).then((num) => {
//     console.log(num);
// })
// .catch( (error) => {
//     console.log(error);
// })



// // Exercise 2:
// // Write two functions that use Promises that you can chain!
// // The first function:
// // makeAllCaps(), will take in an array of words
// // and capitalize them,
// // and then the second function, sortWords():
// // will sort the words in alphabetical order.
// // If the array contains anything but strings,
// // it should throw an error.
// // examples of array:
// const arrayOfWords = ['cucumber', 'tomatos', 'avocado']
// const complicatedArray = ['cucumber', 44, true]
// const makeAllCaps = (array) => {
//     return new Promise((resolve,reject)=>{
//       let capsArray = array.map(word => {
//         if(typeof word === 'string'){
//           return word.toUpperCase();
//         }
//         else {
//           reject('Error: not all items in the array are strings!')
//         }
//       })
//       resolve(capsArray);
//     })
//   }
//   const sortWords = (array) => {
//     return new Promise((resolve,reject)=>{
//       if(array){
//         resolve(array.sort())
//       }
//       else{
//         reject('somethig went wrong')
//       }
//     })
//   }
//   // sortWords(['cucumber', 'tomatos', 'avocado'])
//   // .then(sort=>{
//   //   console.log(sort);
//   // })
//   // .catch(err=>{
//   //   console.log(err);
//   // })
//   makeAllCaps(['cucumber', 'tomatos', 'avocado'])
//   .then(data => {
//     return sortWords(data)
//   })
//   .then(sort=>{
//     console.log(sort);
//   })
//   .catch(err => {
//     console.log('error',err);
//   })

//race = not done
const promise1 = new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve ('res1')
    }, 5000)
});
const promise2 = new Promise((resolve,reject) =>{
    reject('reg2')
});
const promise3 = new Promise((resolve,reject) =>{
    resolve('Resolve prom3')
})

promise1.race([promise1,promise2,promise3])
.then(result =>{
    console.log(result);
})


// fetch('url')
// .then(res => {
//     res.json()
// })
// .then(data => {
//     console.log(data)
// })

// .catch(err => {
//     console.log(err);
// })


// const arrURL = [
//     "url1",
//     "url2",
//     "url3"
// ]

// Promise.all(urls.map(url => {
//     return fetch(url).then(response => response.json())
// }))
// .then(results => {
//     console.log(results)
// })
// .catch(error => {
//     console.log(error)

// })
