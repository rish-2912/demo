const express=require('express');
const app=express();
app.use('/',(req,res,next)=>{
    res.status(200).json({
        message:'hello'
    })
})


const p=process.env.PORT || 3636
app.listen(p,()=>{
    console.log(process.env.PORT);
    console.log(`server is started on port ${p}`);
})