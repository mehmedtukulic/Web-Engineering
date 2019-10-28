const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('/',(req,res,next)=>{
    console.log('New visit from :'+ req.ip);
   });

app.get('/',(req,res)=>{
 res.send('Hello World');
});

app.listen(port,()=>{
    console.log('Server listening on'+ port);
});