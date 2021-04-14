//Exercise 1

// Create two objects, each object should hold a persons details. Here are the details:
// FullName
// Mass
// Height

let person1 = {
    FullName: "Marie",
    Mass: 60,
    Height: 160,
    BMI: function calcBMI(){
        let bmi = (Mass / (Height * Height));
        return bmi;
    }
}

let person2 = {
    FullName: "Albert",
    Mass: 80,
    Height: 180,
    BMI: function calcBMI(){
        let bmi = (Mass / (Height * Height));
        return bmi;
    }
}
if (person1.BMI > person2.BMI){
    console.log (person1.FullName)
}
else {
    console.log (person2.FullName)
}


// Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person
// Outside of the objects, create a JS function that compares the BMI of both objects.
// Display the name of the person who has the largest BMI.

