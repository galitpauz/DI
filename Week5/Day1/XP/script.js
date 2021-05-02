// Exercise 3 : JSON Mario
// Using this code:

let marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}



// Convert this JS object into a JSON object. What happens to the nested objects ?

const convertJS = ((js) =>{
    let json = JSON.stringify(js);
    return JSON.parse(json);
})

console.log(convertJS(marioGame));
//Converted to objects inside of the JSON

// Convert and pretty print this JS object into a JSON object.

// const replacer = ((value) =>{
//         // Filtering out properties
//         if (typeof value === 'string') {
//           return undefined;
//         } else {
//         return value;
//     }
//       json = JSON.stringify(value);
//       return JSON.parse(json);

//     })
// JSON.stringify(value, replacer, space);

//     let json = convertJS(marioGame)
//     let json = JSON.stringify(js);
//     return JSON.parse(json);
// })
console.log(convertPretty(marioGame));

// Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.
