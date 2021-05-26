// Create an fs.js file and use the Node js File System to read the right-left file:
// “>” means go right
// “<” means go left
// Use the corresponding JavaScript operations to calculate the Total Steps between right > and left < (The answer should be: 74 steps to the right)
// Use the corresponding JavaScript operations to calculate when is the first time to reach the left side -1 (The answer should be: In step 1795 you reach the left side)

const fs = require("fs");

// fs.readFile('textfile.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.error(err)
//         return
//     }
//     console.log(data);
// });
fs.readFile('./right-left.txt', (err, data) => {
    let step = 0;
    let stepCount = 0;
    const directions = data.toString()
    const directionsArray = directions.split('');
    for(let i=0; i< directionsArray.length; i++) {
        if(directionsArray[i] === '>'){
            step++;
            stepCount++
        }
        else if(directionsArray[i] === '<'){
            step--;
            stepCount++
        }
        else if (step === -1){
            break
        }
        // console.log(stepCount)

    }
    console.log(step + "steps to the right")




    // if (err) {
    //     console.error(err)
    //     return
    // }
    // let right = ''
    // let count = data.split(ch).length -1;
    // console.log(count +" Total Steps");
    
})