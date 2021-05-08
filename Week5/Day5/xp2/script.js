// You should use the Poke API: https://pokeapi.co/ to get all the information you need to display.

// You can use these images for the logo and the Pokedex:

// Logo

// Pokedex



// Some Tips:
// Create the corresponding tags in your HTML file, and select your elements in the javascript file.

// You will use three buttons, one to fetch a random Pokémon, and the other two for the left and right buttons.

// The random button will call an Async Await function to fetch the API and display the data (image, name, id, height, weight and type).

// Make sure to add a catch block in the case of an error and display a message like “Oh no! That Pokemon isn’t available…”.

// Remember to use a loading message when fetching the random Pokémon, you can use this Loading Message.

// You will also use 2 Async Await functions to fetch the API when pressing the “previous” and “next” buttons. The “previous” will fetch the previous pokemon from the current one that is being displayed and the “next” will fetch the next pokemon from the current one that is being displayed. 
//(You can console.log a global variable in order to achieve this).

let rnd = 0

const getInfo = async() => {
    loading.style.display = "block"
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${rnd}`)
        const data = await response.json()
        loading.style.display = 'none'
        getID(data)  
    } catch {
        document.getElementById("name").innerHTML = "Oh no! That Pokemon isn’t available…"
        loading.style.display = 'none'
    }
}

const getID = (data) => {
    document.getElementById("img-container").setAttribute("src",data.sprites.front_default)
    document.getElementById("name").innerHTML = `${data.name}`
    document.getElementById("number").innerHTML = `Pokemon id: ${data.id}`
    document.getElementById("height").innerHTML = `Height: ${data.height}cm`
    document.getElementById("weight").innerHTML = `Weight: ${data.weight}`
    document.getElementById("type").innerHTML = `Type: ${data.types[0].type.name}`        
}
const random = async function () {
    rnd = Math.floor(Math.random() * 800)
    getInfo()
}
const right = async function () {
    rnd++
    getInfo()
}
const left = async function () {
    rnd--
    getInfo()
}

let loading = document.getElementById('loading')
let button = document.getElementById("button")
button.addEventListener("click", random)

let buttonRight = document.getElementById("buttonRight")
buttonRight.addEventListener("click", right)

let buttonLeft = document.getElementById("buttonLeft")
buttonLeft.addEventListener("click", left)




