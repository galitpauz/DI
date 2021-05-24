const exp = require('express');
const bp = require('body-parser');

let app = exp()
 
// parse application/x-www-form-urlencoded
app.use(bp.urlencoded({ extended: false }))
 
// parse application/json
app.use(bp.json())
//give the source folder
app.use('/',exp.static(__dirname+'/public'))

//aboutMe/:hobby
app.get('/aboutMe/:hobby', (req,res)=>{
    if (test(req.params.hobby) !== '') {
		res.status(404).send('Page not found');
	} else {
	res.send(req.params.hobby);
	}
    res.send('one hobby is computer')
})


// /pic/
app.get('/pic', (req, res) => {
	res.send('<img src="https://pixabay.com/photos/mountain-world-landscape-mountains-1495832/">');
})
//form
// app.get('/form', (req, res) =>{
//     console.log(req.query)
//     res.send(req.query.email+req.query.message)
// })


// //
// app.listen(3000)

// app.post('/formData', (req, res) =>{
//     console.log(req.body.username, req.body.password)
//     res.send('login post')
// })



//displays the name of one hobby 
// the value of the route parameter?
//If the parameter is not a string (ie. numbers or else), set the status to 404
