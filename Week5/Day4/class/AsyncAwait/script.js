// async function simpleAsync(){
//     return "1"
// }
// console.log(simpleAsync());

// async function simpleAsync(){
//     try{
//         throw Error;
//     }
//     catch(e){
//         return e
//     }
// }
// console.log(simpleAsync());

// //async function have to be after:
// const simpleAsync = async(a,b) =>{
//     return;
// }
// simpleAsync()
// .then(data=>{
//     console.log(data);
// })

// fetch (`url`)
// .then(resp => rest.json())
// .then(console.log)
// async function fetchUsers( {
//     const rest = awat fetch(usrl)
// })

// function returnPromises() {
//     let newPromise = new Promise((resolve)) =>{
//         setTimeout(() =>{
//             console.log()
//         })
//     }
// }

// const async = executeFunction(() => {
//     console.log('first');
//     let getPromise = await returnPromises();
//     console.log('second');
//     return getPromise;
// })

// executeFunction() 
// .then(res => {
//     console.log(res);
// })
// console.log('some thing bla bla');
// console.log('')

// the order:
// const name = async () => {
//     first
//     let res = await fetch("amazon-api")
//     will wait until get res
// }
// second



const callAmazon = async() =>{
    throw new Error("didn't work");
    console.log('Done!');
}

const main = async () => {
    try {
        let res = await callAmazon();
    }
    catch (err) {
        console.log(err)
    }
    finally{
    }
}

// //async not working well with foreach! or map or filter 

// (async function() {
//     console.log('1', 'done!');
//     ["f", "s", "t"].forEach(async (id) =>) {
    // await timeout(2000, id)

//     }

// })

// used the loop 
// (async () =>{
//     console.log('1', 'done!');
//     for (const item of (["f", "s", "t"]) {
//     await timeout(2000, item);

//     }
//     console.log('3', 'done!');

// })

// const a = async(num) => {
//     if(num>10){
//         return 'greater 10'
//     }
//     else {
//         throw new Error('not greater')
//     }
// }
// a(10)
// .then(data=>)

// fetch('url')
//     .then(response => {
//         return response.json()
//     })
//     .then(data=> {
//         console.log (data)
//     })
//     .catch(e=>{
//         console.log(e);
//     })


// async function fetchUsers() {
//     const res = await fetch('url')
//     const data = await resp.json();
//     console.log(data);
// }

