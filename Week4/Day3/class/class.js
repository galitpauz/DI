/* Exercise
* Create a function that get an array of Numbers as input
* and return a new array with all numbers multiply by 2
* For example:
* Give this array [1,2,3,4]
* result [2,4,6,8]
*/
// function map(arr) {
//     arr.forEach((item,i,arr) => {
//       arr[i] = item*2
//     })
//     return arr;
// }
// console.log(map([1,2,3,4]));
/* map */
// let arr = [0,1,2,3,5,8];
// const newArr = arr.map( item => {
//    return item + 2;
// });
// console.log(newArr);
//
// let users = ['eli','adam','galina','ziv'];
// const emails = users.map( item => {
//    return item+'@gmail.com';
// });
// console.log(emails);
// let arr1 = [1, 2, 3, 4];
// let arr2 = arr1.map(x => {
//   return [x * 2];
// });
// console.log('arr2',arr2);
// [
//     [2],
//     [4]
//     [6],
//     [8]
// ]
// let arr3 = arr2.flatMap(x => {
//   return [x * 2];
// });
// console.log('arr3',arr3);
// // // [2, 4, 6, 8]
// only one level is flattened
// let arr4 = arr1.flatMap(x => {
//   return [[x * 2]];
// });
// console.log('arr4',arr4);
/* Exercise
* Create an function that get an array of Numbers as input
* and return a new array with all numbers greater than 3
* For example:
* Give this array [0,1,1,2,3,5,8]
* result [5,8]
*/
// function filter(arr) {
//     let ret = []
//     arr.forEach( item => {
//       if(item > 3){
//         ret.push(item)
//       }
//     })
//     return ret;
// }
// console.log(filter([0,1,1,2,3,5,8]));
/* Filter */
// let arr = [0,1,1,2,3,5,8];
// const filterArr = arr.filter( item => {
//   return item > 2;
// });
// console.log(filterArr);
//
// const filterArr2 = arr.filter(i => i === 3 );
// console.log(filterArr2);
// const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
// // get all names that start with Sa / contain Sa
//
// const filtered = dragons.filter( item => item.includes('Sa') )
// console.log(filtered);
// const filterName = dragons.filter(item => {
//   return item.includes('Sa');
// });
// console.log(filterName);
/* Exercise
* Create an function that get an array of Numbers as input
* and return the sum of all numbers
* For example:
* Give this array [2, 5, 10,100]
* result 117
*/
// function reduce(arr) {
//     let sum = 0;
//     arr.forEach((item) => {
//       sum = sum + item;
//     })
//     return sum;
// }
// console.log(reduce([2, 5, 10,100]));
/* reduce */
// let numbers = [2, 5, 10,100];
// const newNumbers = numbers.reduce((total, item) => {
//   return total + item;
// },800);
// console.log(newNumbers);
// //
// const total = numbers.reduce((accumulator, item) => {
//   return accumulator + item;
// }, 100)
// console.log(total);
// let account = [{dolars:2}, {dolars:5}, {dolars:10},{dolars:100}];
/* Rest parameters */
// function sum(a, b,  ...rest) {
//   rest.forEach((item, i) => {
//     console.log(item+a+b);
//   });
// 
//   return true;
// }
// console.log( sum(1, 2, 3, 4, 5,9,0,9,8,8,7,6) );
// function sum(...args) {
//   console.log(args);
// }
// sum(1, 2, 3, 4, 5);
// function sum(a, b, ...args) {
//   console.log(a, b, args);
// }
// sum(1, 2, 3, 4, 5);
// function f(a, ...rest, b) { // arg2 after ...rest ?!
// }