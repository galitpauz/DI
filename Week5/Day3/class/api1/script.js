let xhr = new XMLHttpRequest();

let next = 0;

function fetchData() {
    let search = document.getElementById('search').value;
    let limit = document.getElementById('limit').value;
    // console.log(limit); //must check     
    xhr.open('GET', `https://api.giphy.com/v1/gifs/search?rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&q=${search}&limit=${limit}&offset=${next}`);
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = function() {
        // console.log(xhr.response);
        createImages(xhr.response.data); //
    }
    xhr.onerror = function() {
        alert("Please try in a few minutes")
    } 
    next = next + Number(limit); 
}




function createImages(arr) {
    let root = document.getElementById('root')
    root.innerHTML = ""; //clean the 
    // console.log(arr); //to see we get it
    // console.log(root);
    arr.forEach((item, i) => {
        let img = document.createElement('img');
        img.setAttribute('src', item.images.fixed_height.url)
        root.appendChild(img);

    })
}



function deleteAll() {
    let root = document.getElementById("root");
    root.innerHTML = ""; //clean the 
}

function  nextImages(){
    fetchData()

}



// function fetchData(){
//     let search = document.getElementById('search').value
//     let xhr = new XMLHttpRequest()
//     xhr.open('GET', `https://api.giphy.com/v1/gifs/search?rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&q=${search}&limit=10`)
//     //q=hilarious& - add it before search to retrieve more gifs of hilarious
//     xhr.responseType = 'json' // or I could do JSON.parse(xhr.response) - the same thing
//     xhr.send()
//     xhr.onload = function(){
    
//     createImages(xhr.response.data)
//         //     if (xhr.status != 200){
//     //         console.log(`error ${xhr.status}: ${xhr.statusText}`)
//     // }else{
//     //     console.log(xhr.response)
        
//     // }
// }
//     xhr.onerror = function(){
//         alert ('Please try in fewminutes, server is down')
//     }
// }
// ​
// function createImages (arr){
//     let root = document.getElementById('root')
//     root.innerHTML = ""
//     arr.forEach((item, i) => {
//     let img = document.createElement('img')
//     img.setAttribute ('src', item.images.fixed_height.url)
//     root.appendChild(img)    
//     });
// }
// ​
// function deleteAll(){
//     let root = document.getElementById('root')
//     root.innerHTML = ""
//     //to delete everything when clicled in the botoon
// }