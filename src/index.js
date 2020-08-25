const express=require('express');
const app=express();

app.get("/",(req,res)=>{
    res.send("<h1>Hello World");
})

app.listen(3000,function(){
console.log('Server start at port 3000');
})