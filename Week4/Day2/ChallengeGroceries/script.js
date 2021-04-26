// // Using this object :

// let groceries = {
//     fruits : ["pear", "apple", "banana"],
//     vegetables: ["tomatoes", "cucumber", "salad"],
//     totalPrice : "20$",
//     other : {
//         payed : true,
//         meansOfPayment : ["cash", "creditCard"]
//     }
// }
// // Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

// // Copy this object using the method that was taught in today’s lesson.
// // Change the value of totalPrice to 35$. Will we also see this modification in the copied objects ?
// // Change the value of payed to false. Will we also see this modification in the copied objects ? Why ? 
// //------ when using a clone it will affect both obj because it's other is object inside obj but in deep clone the changed will be in only one copy because the memory not pointing to the same location any more 

// //totalPrice = 35;

// // deep cloning

//  console.log(groceries);
 
//  const objJson = JSON.stringify(groceries)
//  console.log(objJson);
 
//  let obj2 = JSON.parse(objJson);
//  groceries.totalPrice="35$";
//  console.log('groceries',groceries);
//  console.log('obj2',obj2);
// obj2.payed=false;
// console.log('groceries',groceries);
// console.log('obj2',obj2);