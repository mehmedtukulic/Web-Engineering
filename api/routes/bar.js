module.exports=(router, db , mongojs , jwt , config) =>{
    let USER_ID = "";

    router.use('/', (req,res, next)=>{
      let authorization = req.get("Authorization");
      if(authorization){
         jwt.verify(authorization,config.JWT_SECRET, (error,decoded) =>{
            if(error) res.status(400).send("Unauthorized acces !");
            else{
            if(decoded.type == "bar") {
            USER_ID = decoded._id;
            next()
        }
            else res.status(400).send("Unauthorized access"); 
            } 
    
         }) 
      }else res.status(400).send("Unauthorized access");

    })

    router.get('/flavours/:id' ,(req,res) =>{
    let bar_id = req.params.id;
     db.bars.find({ _id: mongojs.ObjectId(bar_id) },{ flavours: 1 }, (error, docs) => {
         res.json(docs);

     })
    })
    
     

  /*  router.get('/flavours' ,(req,res) =>{
        let bar_id = USER_ID;
                db.bars.aggregate([
                { $match: { user_id: mongojs.ObjectId(bar_id) } },
                { $project: { flavours:1 } },
                { $unwind: "$flavours" }
             ])
             
         })
 */

        }



