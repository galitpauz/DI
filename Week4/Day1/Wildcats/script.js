// // Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
// // Create an array using forEach that contains the usernames of all players with a score bigger than 5.
// // Tip: Use the ternary operator
// // Find and display the total score of the users.
// const gameInfo = [
//     {
//       username: "john",
//       team: "red",
//       score: 5,
//       items: ["ball", "book", "pen"]
//     },
//     {
//       username: "becky",
//       team: "blue",
//       score: 10,
//       items: ["tape", "backpack", "pen"]
//     },
//     {
//       username: "susy",
//       team: "red",
//       score: 55,
//       items: ["ball", "eraser", "pen"]
//     },
//     {
//       username: "tyson",
//       team: "green",
//       score: 1,
//       items: ["book", "pen"]
//     },
//    ];

//// gameInfo.forEach(()=>{})

// gameInfo.forEach((username, i)=>{console.log(`${gameInfo[username][0]}!`)})

// let username = [];
// gameInfo.forEach((item) =>{
//     username.push(item.username+'!')
// })
// console.log(username)

// let highScore = [];
// gameInfo.forEach((item) => { 
//     if (item.highScore > 5) {
//         highScore.push(item.username+'!')
//     }
// })
// console.log(highScore)

// let totalScore = 0;

// gameInfo.forEach((item)=>{
//     totalScore += item.score;
// })

// console.log(totalScore);