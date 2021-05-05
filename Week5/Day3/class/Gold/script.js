

const urls = [
    'https://swapi.dev/api/people/1',
    'https://swapi.dev/api/people/2',
    'https://swapi.dev/api/people/3', //Changed and the catch block works 
    'https://swapi.dev/api/people/4'
]

Promise.all(urls.map(url => {
    return fetch(url).then(response => response.json())
}))
.then(results => {
    console.log(results)
})
.catch(error => {
    console.log("FAIL :( "+error)

})