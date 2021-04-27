/* Exercise reverse
*  reverse each word in a given String
*  For example:
*  Given this 'word in a given String'
*  result 'drow ni a nevig gnirtS'
*/

// str = "word in a given String"

// function reversWord(str){
//   let ret = "";
//   for(let i = str.length-1; i>=0; i--){
//     ret = ret + str[i];
//   }
//   return ret;
// }
// function reverseAll(str){
//   let arr = str.split(" ");
//   console.log(arr);
//   arr.forEach ((item,i,ret) => {
//     ret[i] = reversWord(item);
//   })
//   console.log(arr);
//   return arr
// }
// console.log(reverseAll('word in a given String').join(' '));

// function map (arr) {
//     arr.forEach((item,i,arr)=>{
//         arr[i] = item*2
//     })
//     return arr;
// }

// console.log(map[1,2,4,6])

// let users = ['galit', 'amir','adam']
// const emails = users.map ( item => { //this is methos of array
//     return `${item}@gmail.com`;
// })
// console.log(emails)
// function filter(arr){
//     const numbers = [1,5,2,4,8]
//     let ret = []
//     arr.forEach((item)=>{
//         if(item >3){
//             ret.push(item)
//         }
//     })
//     return ret
// }

// console.log(ret)



// const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
// // get all names that start with Sa / contain Sa

// const result = dragons.filter(item => item.includes("Sa"));

// console.log(result)



/* Exercise
* Create an function that get an array of Numbers as input
* and return the sum of all numbers
* For example:
* Give this array [2, 5, 10,100]
* result 117
*/
//not correct
// let arrNum = [2, 5, 6, 8]

// function reduce(arr) {
//     let sum = 0;
//     arr.forEach((item) => {
//         sum = sum + item.value;
//     })
//     return sum;
// }
// console.log(newN)

//loops
// let arr = [0,3,6,7,9,11]
// for(x in arr){
//     console.log(x, arr[x])
// }

// for (x of arr){
//     console.log(x)
// }

// let arr = [5,8,3,,1]
// arr.forEach(item => {
//     console.log(item)
// })

// For tomorrow,
let account = [{dolars:2}, {dolars:5}, {dolars:10},{dolars:100}];
// use reduce to calculate the total of the values