// //Find Nemo

// let string = "I love the movie named Nemo !";
// let strArray = string.split(" ");
// console.log(strArray);
// let position = strArray.indexOf("Nemo");
// console.log(`I found Nemo at ${position}`);

// // Evaluation(2)
// let c;
// let a = 34;
// let b = 21;
// a = 2;
// a + b
// console.log(a + b);
// console.log(c);
// console.log(3 + 4 + '5');

// //Ask For Numbers
// let x = prompt("Enter a number");
// let y = prompt("Enter a number");
// let num1 = parseInt(x);
// let num2 = parseInt(y);
// console.log(num1+num2);


//Boom
let numO = Number(prompt("please enter a number"));
let str = "Boom"
let position  = str[1]

for (let i = 0; i < numO; i++) {

    if (numO > 2) {
        let newStr = position.repeat(numO);
        console.log(str.slice(0, 1) + newStr + str.slice(1));
    } else if (numO > 2 && numO %  2 === 0) 
    {
        console.log(str + "!");

    } 
    else if (numO %  5 === 0) {

   
        console.log(str.toUpperCase())
    }

    else if (numO %  2 && numO %  5 === 0) {

   
        console.log(str.toUpperCase()+ "!")
    }
    else {
        console.log(str.toLowerCase())
    }
}

