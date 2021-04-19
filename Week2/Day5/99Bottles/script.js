let maxBeer = parseInt(prompt("Enter a number to begin counting down bottles: "));
let dropBeer = maxBeer;

for (i=1; i<=dropBeer; i++){
    console.log(dropBeer +" bottles of beer on the wall" + dropBeer +"bottles of beer. ")
    if(i===1){
        console.log(`Take ${i} down, pass it around`);
    }
    else {
        console.log(`Take ${i} down, pass it around`);
    }
    dropBeer -=i;
    console.log(`${dropBeer} bottle of beer on the wall `);
}
console.log("Drink Up")






// function numBeers(maxBeer){
//     maxBeer = parseInt(prompt("Enter a number to begin counting down bottles: "))
//     let minBeer = 1++
//     while (maxBeer >=1){
//         if (maxBeer === 2) {
//         console.log(maxBeer +" bottles of beer on the wall" + maxBeer +"bottles of beer. Take one down pass it around..." + (maxBeer-minBeer)+ " bottle of beer on the wall")
//         } else if (maxBeer === 1) {
//         console.log(maxBeer +" bottle of beer on the wall" + maxBeer +"bottles of beer. Take one down pass it around..." + (maxBeer-minBeer)+ " bottle of beer on the wall")
//         } else {
//         console.log(maxBeer +" bottles of beer on the wall" + maxBeer +"bottles of beer. Take one down pass it around..." + (maxBeer-minBeer)+ " bottles of beer on the wall")
//         maxBeer --;
//         }
//     }
    
// }

// numBeers()
