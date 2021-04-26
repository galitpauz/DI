// Exercise 1 : Landscape
// Using the code below, and before executing it, predict the outcome and explain how you came to this conclusion
let landscape = function()
{
 let result = "";
 let flat = function(x)
 {
   for(let count = 0; count<x; count++)
   {
     result = result + "_";
   }
 }
 let mountain = function(x)
 {
   result = result + "/"
   for(let counter = 0; counter<x; counter++)
   {
     result = result + "'"
   }
   result = result + "\\"
 }

flat(6);
mountain(4);
flat(6)
return result;
}

console.log(landscape()); 
//mountain resulted due to the nested function(x) with the flat running in both sides of the mountain