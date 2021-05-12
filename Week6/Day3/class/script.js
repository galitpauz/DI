
//local storage with json
let tobo = [
    {id:1,name:'shopping',date:'12-5-2021'}
    {id:2,name:'running',date:'13-5-2021'}
]

localStorage.setItem('data', JSON.stringify(todo))

let d = localStorage.getItem('data')

console.log(JSON.parse(d)) //get the data


localStorage.removeItem('data') //remove item
localStorage.clean() // clean all

