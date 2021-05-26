
// Create an fs.js file, and inside use the Node JS File System to read the text file and console.log the output in the terminal
const fs = require('fs');

// fs.readFile('./textfile.txt', (err, data)=>{
//     if(err){
//         console.log(err)
//     }
//     else {
//         //send it to function
//         console.log(Json.parse(data.toString()))
//     }
// })
// // Exercise 1
// fs.readFile('textfile.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.error(err)
//         return
//     }
//     console.log(data);
// });

// console.log("-----Restaurant Menu---------", '\n',);


// // Exercise 2
// // Create an fs.js file, and use the Node js File System to create a new text file and write to it.
// fs.writeFile('test2.txt', 'some text', function (err) { 
//     if (err){ 
//         console.log(err);
//     }
//     else{
//         console.log('Write one operation complete.');
//     }
// });



// // Exercise 3 : Appending And Deleting Files With Node JS
// // Create an fs.js file, and use the Node js File System to create and write to a new text file. (Example: “Buy Milk”)
// let newContent = "Buy Milk"

fs.writeFile('buy.txt', newContent, function (err) { 
    if (err){ 
        console.log(err);
    }
    else{
        console.log('Write operation complete.');
    }
});

let newContent2 = "Buy orange juice"
// Use the Node js File System to append some other text to the text file. (Example:”Buy orange juice”)
//why the /n not working?
fs.appendFile('buy.txt', newContent2 + '\n', function (err) {
    if (err) {
        console.error(err)
        return
    }
});

// // Use the Node js File System to delete the file.

// fs.unlink('buy.txt', (err) =>{
//     console.log('write operation delete complete.');
// });