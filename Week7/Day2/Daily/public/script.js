// //public folder will hold the static file for you (its a commen name)

// //u is the key name we use and can be any name var
// const sendData = () => {
//     const username = document.getElementById('user').value
//     const password = document.getElementById('pass').value
//     // console.log(username, password)
//     // fetch(`http://localhost:3000/login?u=${username}&p=${password}`)
//     // .then(res => res.json)
//     // .then(data => {
//     //     console.log(data);
//     // })
//     let data = {
//         u:username,
//         p:password
//     }

//     fetch('http://localhost:3000/login',{
//         method: 'POST',
//         header:{
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     })


// }


