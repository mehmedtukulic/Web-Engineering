const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const mongojs = require('mongojs');
const db = mongojs('mongodb+srv://mehmedtukulic:test123@cluster0-jqb5e.mongodb.net/ShishaTime?retryWrites=true&w=majority')

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/',(req,res,next)=>{
    console.log('New visit from :'+ req.ip);
    next();
   });

app.get('/',(req,res)=>{
 res.send('Hello World');
});

app.listen(port,()=>{
    console.log('Server listening on port : '+ port);
});

app.get('/users', (req,res) => {
   db.users.find({} , (error,docs) => {
       if(error){
           throw error;
       }
       res.json(docs);
   });
});