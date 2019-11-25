const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongojs = require('mongojs');
const config = require('./config');
const db = mongojs(config.MONGODB_URL);
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());



//Express routers
let admin_router = express.Router();
require('./routes/admin.js')(admin_router, db, mongojs, jwt, config);
app.use('/admin', admin_router);

let bar_router = express.Router();
require('./routes/bar.js')(bar_router, db, mongojs, jwt , config);
app.use('/bar', bar_router);

//Middleware
app.use('/',(req,res,next)=>{
    console.log('New visit from :'+ req.ip);
    next();
   });




//REST   
app.get('/',(req,res)=>{
 res.send('Hello World');
});


app.post('/login', (req, res) => {
    let email = req.body.email_address;
    let password = req.body.password;
    db.users.findOne({ email_address: email }, (error, doc) => {
        if(error)
            res.json(error);
        if(doc != null) {
            if(password == doc.password) {
                let token = jwt.sign({
                    exp: (Math.floor(Date.now() / 1000) + 3600), // token which lasts for an hour
                    id: doc._id,
                    type: doc.type
                }, config.JWT_SECRET);
                res.json(token);
            } else
                res.status(400).send();
        } else
            res.status(400).send();
    })
})

app.listen(port,()=>{
    console.log('Server listening on port : '+ port);
});