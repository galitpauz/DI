

// // xp1 ex2
// const http = require('http');

// http
// const server = http.createServer( (req, res)=>{
//     const user = {
//         firstName: 'John',
//         lastName: 'Doe'
//     }
//     res.end(JSON.stringify(user))

// })
// server.listen(3000)



// //xp1 ex3

// const exp = require('express');
// let app = exp()
// app.get('/', (req, res) => {
//     res.send('<html><body><p>Welcome new user</p></body></html>');

//     res.end();
// });

// app.listen(3000);
// console.log('Node.js web server at port 3000 is running..')



//xp2 ex1

// const exp = require('express');

// let app = exp()

// app.use('/',exp.static(__dirname+'/public'))

// app.get('/text', (req, res) =>{
//     const user = {
//         firstName: 'John',
//         lastName: 'Doe'
//     }
//     res.send(JSON.stringify(user))
// })

// server.listen(3000)

 //xp2 ex2
const exp = require('express');

let app = exp()

app.use('/',exp.static(__dirname+'/public'))

app.get('/1234', (req, res) =>{
    const data = {
        id: '1234'
        // id:req.url
    }
    res.send((data))
})

 app.listen(3000)
//  const exp = require('express');

//  const app = exp();
 
//  app.use('/', exp.static(__dirname+'/public'));
 
//  app.listen(3000)













