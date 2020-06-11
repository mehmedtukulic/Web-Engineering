module.exports=(router, db , mongojs , jwt , config) =>{
  router.get('/hello',(req,res)=>{
    res.send('Hello World');
   });



    router.get('/bars',(req,res)=>{
      db.bars.find({} ,(error,docs) => {
       if (error) {
           throw error;
       }
       res.json(docs)
      });
     });

     router.get('/bar/:name', (req, res) => {
      //   let ID = req.params.id;
         db.bars.find({name : req.params.name},(error,docs) => {
          if (error) {
              throw error;
          }
          res.json(docs)
         });
     });


     router.get('/bars/count',(req,res)=>{
      db.bars.count( (error,docs) => {
       if (error) {
           throw error;
       }
       res.json(docs)
      });
     });


    router.get('/flavours/:id' ,(req,res) =>{
    let bar_id = req.params.id;
     db.bars.find({ _id: mongojs.ObjectId(bar_id) },{ flavours: 1 }, (error, docs) => {
         res.json(docs);

     })
    })

    router.get('/adds',(req,res)=>{
      db.adds.find({} ,(error,docs) => {
       if (error) {
           throw error;
       }
       res.json(docs)
      });
     });

     router.get('/giveaways',(req,res)=>{
       db.giveaways.find({} ,(error,docs) => {
        if (error) {
            throw error;
        }
        res.json(docs)
       });
      });

      router.get('/giveaways/:day', (req, res) => {
          db.giveaways.find({day : req.params.day},(error,docs) => {
           if (error) {
               throw error;
           }
           res.json(docs)
          });
      });

      router.post('/giveaway/:id/register/:competitor', (req, res) => {
        let id = req.params.id;
        db.giveaways.update(
        {_id : mongojs.ObjectId(id)},
        {
           $push: { competitors : req.params.competitor }
        } , function(err, doc){
             if (err) {
                 res.status(400).json({ message: `Insertion failed. Reason: ${err.errmsg}` });
             }
             res.json(doc);
         });
     });

     router.post('/addwinner/:id/:email', (req, res) => {
       let id = req.params.id;
       let email = req.params.email;

        db.giveaways.updateOne(
        {_id : mongojs.ObjectId(id)},
        {
         $set: { winner : email , status : "done" }
        } , function(err, doc){
            if (err) {
                 res.status(400).json({ message: `Insertion failed. Reason: ${err.errmsg}` });
             }
         res.json(doc);
        });
      });

    }
