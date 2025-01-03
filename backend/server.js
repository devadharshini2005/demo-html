const express=require('express');
const app=express();
//app.set('view engine','ejs');
app.get('/',(req,res)=>{
    console.log("hi");
    //res.status(200).send({error:"error msg"});
    //res.json({express:"json"});
       // res.send("hello world");
       //res.render("index.ejs",{textk:"deva"});

    
})
const userRoute=require('./routes/user');
app.use('/user',userRoute);
app.listen(3000);