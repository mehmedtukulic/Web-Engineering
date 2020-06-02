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

     router.get('/bar/:id', (req, res) => {
         let ID = req.params.id;
         db.bars.find({BAR_ID : ID} ,(error,docs) => {
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

    }
