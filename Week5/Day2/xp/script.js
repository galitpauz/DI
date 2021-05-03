// const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(this.responseText);
// 	}
// });

// xhr.open("GET", "https://google-search3.p.rapidapi.com/api/v1/scholar/q=high+frequency+trading");
// xhr.setRequestHeader("x-rapidapi-key", "SIGN-UP-FOR-KEY");
// xhr.setRequestHeader("x-rapidapi-host", "google-search3.p.rapidapi.com");

// xhr.send(data);


// You will use this Gif URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

// // Create a program to fetch the API URL provided above.

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
// xhr.send();
// xhr.onload = function() {
//   if (xhr.status != 200) {
//     // analyze HTTP status of the response
//     // e.g. 404: Not Found
//     console.log(`Error ${xhr.status}: ${xhr.statusText}`);
//   } else { // show the result
//     // response is the server response
//     // console.log(`Done, got ${xhr.response.length} bytes`);
//     console.log(xhr.response);
//   }
// };

// // Make an AJAX request to the Giphy API and return an Object.
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
xhr.send();
xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status){
  console.log(JSON.parse(xhr.response))
  } else {
    return xhr.status

  }
}


// // Exercise 2 : Giphy API
// // Using this part of the documention, retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
// xhr.send();
// xhr.onload = function() {
//   console.log(JSON.parse(xhr.response))
// }
