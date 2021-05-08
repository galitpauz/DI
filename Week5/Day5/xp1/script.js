// You should use this API: https://swapi.dev/ to get the data and update it “randomly” in your website by clicking a button.

// Create your HTML file, and add the relevant elements.

// In your js file, create your functions :
// to retrieve the elements from the DOM.
// to get the data from the API (star wars characters).
// to display the info on the DOM.

// Display the data using AJAX. Make sure to display a loading message as follows:



// You can use any of these animation icons for the loading message.

// Make sure you display the “Home World” of each Star Wars Character (use console.log() to help you get the data)


// If there is an error getting the data, display a message as follows:




// 6. You can use your own css to style the website as you see fit


//Get the info from API and catch for Errors
let randomly = document.getElementById('random')
const getInfo = async() => {
    randomly.style.display = "block"
    try{
        let rnd = Math.floor(Math.random() * 87)
        //Get Random people in the API
        const response = await fetch(`https://swapi.dev/api/people/${rnd}`)
        const data = await response.json()
        //Call Loading Data
        getID(data)  
    }catch{
        document.getElementById("name").innerHTML = "Oh no! That person isn't available"
    }
}
const getID = (data) => {
    console.log(data)
    //Select elements in DOM
    document.getElementById("name").innerHTML = data.name
    document.getElementById("height").innerHTML = data.height
    document.getElementById("gender").innerHTML = data.gender
    document.getElementById("year").innerHTML = data.birth_year
    
    fetch(`${data.homeworld}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            document.getElementById("world").innerHTML = data.name
        })
}
let button = document.getElementById("button")
button.addEventListener("click", getInfo)