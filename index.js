const express = require('express');
const bodyParser = require('body-parser');
const app = express();


const cors = require('cors');


app.use(cors());
app.use(bodyParser.json());
//routes or Middleware can be added here
app.get('/',(req, res)=>{
    res.send('Hello World!');
})
//make an array of user names only their indices will be their id
const users = ['Pulok', 'Asad', 'Redowan', 'Tawfiq', 'Tarequl'];
app.get('/users/:id',(req, res)=>{
    const id = parseInt(req.params.id);
    console.log(id, users[id]);
    res.send({
        name: users[id],
        id: id
    });
})
app.get('/users',(req, res)=>{
    
    res.send(users)
})

//post method
app.post('/love',(req, res)=>{
    console.log(req.body);
    res.send({
        'name' : req.body.name,
        'spouse' : req.body.spouse
        

    }).status(201);
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})