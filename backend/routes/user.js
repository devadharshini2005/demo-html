const express=require('express');
let router=express.Router();

router.get('/',(req,res)=>{
    res.send("user");
});
router.get('/newuser',(req,res)=>{
    res.send("new user");
});

router.get('/deleteuser',(req,res)=>{
    res.send("deleted user");
});

//middleware call
/*router.route('/:id')
      .get((req,res)=>{
        console.log(req.usery);
        res.send("the id value "+req.params.id);
    })*/
router.route('/:id/:uu')
      .get((req,res)=>{
       
        res.send("the id value "+req.params.id+" the id value "+req.params.uu);
    })
      .put((req,res)=>{
        res.send("update id value"+req.params.id);
    })
      .delete((req,res)=>{
        res.send("delete id value"+req.params.id);
    });
const users=[{name:"raja"},{name:"rani"}]
    ///middleware
    /*
router.param('id',(req,res,next,id)=>{
    console.log(id);
    req.usery=users[id];
    next();
})*/

/*
router.get('/:id',(req,res)=>{
    res.send("the id value"+req.params.id);
});
router.put('/:id',(req,res)=>{
    res.send("update id value"+req.params.id);
});
router.delete('/:id',(req,res)=>{
    res.send("delete id value"+req.params.id);
});
*/
module.exports=router;

