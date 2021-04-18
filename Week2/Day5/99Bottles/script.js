function numBeers(maxBeer){
    maxBeer = parseInt(prompt("Enter a number to begin counting down bottles: "))
    let minBeer = 1++
    while (maxBeer >=1){
        if (maxBeer === 2) {
        console.log(maxBeer +" bottles of beer on the wall" + maxBeer +"bottles of beer. Take one down pass it around..." + (maxBeer-minBeer)+ " bottle of beer on the wall")
        } else if (maxBeer === 1) {
        console.log(maxBeer +" bottle of beer on the wall" + maxBeer +"bottles of beer. Take one down pass it around..." + (maxBeer-minBeer)+ " bottle of beer on the wall")
        } else {
        console.log(maxBeer +" bottles of beer on the wall" + maxBeer +"bottles of beer. Take one down pass it around..." + (maxBeer-minBeer)+ " bottles of beer on the wall")
        maxBeer --;
        }
    }
    
}

numBeers()
