
// function userOneWord () {
//     if (let word = word.length >= 8) {
//          word = prompt("Enter a word with minimum of 8 letters" );
//         console.log(word)
//     }
//     min = word.length > 8; 
//}
let prog_lang = [
    "python",
    "javascript",
    "json",
    "php"
]
let answer = '';
let maxWrong = 10;
let mistakes = 0;
let guessed = [];

function randomWord() {
    //chanced later to the code from the course
    answer = prog_lang[Math.floor(Math.random() * prog_lang.length)];
}

//generat buttons for each 26 letter instead of 26 items in html
function generateButtons() {
    let buttonsHTML = "abcdefghijklmnopqrstuvwxyz".split('').map(letter =>
    `
        <button
            class="btn btn-lg btn-primary m-2"
            id='` + letter + `
            onClick = "handleGuess('` + letter + `')"
        >
         ` + letter + `
        </button>
     `);

     document.getElementById('keyboard').innerHTML = buttonsHTML;
}



randomWord()

