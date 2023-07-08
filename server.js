const express=require('express');
const app=express();
app.use('/',(req,res,next)=>{
    res.status(200).json({
        message:'hello'
    })
})

app.listen(3636,()=>{
    console.log('server is started on port 3636');
})