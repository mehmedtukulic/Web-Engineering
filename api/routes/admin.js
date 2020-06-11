module.exports = (router, db, mongojs, jwt, config) => {

    router.use('/', (req, res, next) => {
        let authorization = req.get('Authorization');
        if(authorization) {
            jwt.verify(authorization, config.JWT_SECRET, (error, decoded) => {
                if(error)
                    res.status(400).send("Unauthorized");
                else {
                    if(decoded.type == 'admin') {
                        next();
                    } else
                        res.status(400).send("Unauthorized access");
                }
            })
        }
    })

    router.get('/users', (req,res) => {
        db.users.find({} , (error,docs) => {
            if(error){
                throw error;
            }
            res.json(docs);
        });
     });

     router.post('/bar', (req, res) => {
        db.bars.insert(req.body, function(err, doc){
            if (err) {
                res.status(400).json({ message: `Insertion failed. Reason: ${err.errmsg}` });
            }
            res.json(doc);
        });
    });


    router.delete('/bar/:id', (req, res) => {
        let id = req.params.id;
        db.bars.remove({_id : mongojs.ObjectId(id)},[true], function(err, doc){
            if (err) {
                res.status(400).json({ message: `Deletion failed. Reason: ${err.errmsg}` });
            }
            res.json(doc);
        });
    });


    router.post('/add', (req, res) => {
       db.adds.insert(req.body, function(err, doc){
           if (err) {
               res.status(400).json({ message: `Insertion failed. Reason: ${err.errmsg}` });
           }
           res.json(doc);
       });
   });

   router.delete('/add/:id', (req, res) => {
       let id = req.params.id;
       db.adds.remove({_id : mongojs.ObjectId(id)},[true], function(err, doc){
           if (err) {
               res.status(400).json({ message: `Deletion failed. Reason: ${err.errmsg}` });
           }
           res.json(doc);
       });
   });

   router.post('/giveaway', (req, res) => {
      db.giveaways.insert(req.body, function(err, doc){
          if (err) {
              res.status(400).json({ message: `Insertion failed. Reason: ${err.errmsg}` });
          }
          res.json(doc);
      });
  });

  router.delete('/giveaway/:id', (req, res) => {
      let id = req.params.id;
      db.giveaways.remove({_id : mongojs.ObjectId(id)},[true], function(err, doc){
          if (err) {
              res.status(400).json({ message: `Deletion failed. Reason: ${err.errmsg}` });
          }
          res.json(doc);
      });
  });


}
