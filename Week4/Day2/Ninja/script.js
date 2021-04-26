
// Exercise 1 : Merge Words
// Instructions
// Create a function such as mergeWords('Hello')() that returns the following string: 'Hello'
// When the function is called without any arguments return a string where all words have been merged into a sentence.



// function mergeWords(string) {
//   return function(nextString) {
//     if (nextString === undefined) {
//       return string;
//     } else {
//       return mergeWords(string + ' ' + nextString);
//     }
//   }
// }
// function mergeWords(str){
//  return 
// }

// console.log(mergeWords('There')('is')('no')('spoon.')())


//https://www.toptal.com/marketing/mergewords -  cool idea as a mini project for this



// Below is a verbose JavaScript solution, turn this into a currying function.

// function mergeWords(string) {
//  return function(nextString) {
//    if (nextString === undefined) {
//      return string;
//    } else {
//      return mergeWords(string + ' ' + nextString);
//    }
//  }
// }


// const mergeWords = string => nextString =>
//   nextString === undefined ? string : mergeWords(`${string} ${nextString}`);





