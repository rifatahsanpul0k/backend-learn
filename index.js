const express = require('express');
const app = express();

//routes or Middleware can be added here
app.get('/',(req, res)=>{
    res.send('Hello World!');
})
//make an array of user names only their indices will be their id
const users = ['Pulok', 'Asad', 'Redowan', 'Tawfiq', 'Tarequl'];
app.get('/users/:id',(req, res)=>{
    const id = parseInt(req.params.id);
    console.log(id);
    res.send(users[id])
})
app.get('/users',(req, res)=>{
    
    res.send(users)
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})