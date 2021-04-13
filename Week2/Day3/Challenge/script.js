//1
for (let i = 1; i <= 6; i++){
    console.log("* ".repeat(i));
}
//2
let stars="";

for (let i = 1; i <= 6; i++){
    for (let x = 0; x < i; x++)
    {  
        stars += "* ";
    }
    console.log(stars);
} 