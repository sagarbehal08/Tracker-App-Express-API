const express=require('express');
const mongoose=require('mongoose')
const router=express.Router();
const User =mongoose.model('User');;

router.post('/signup',async(req,res)=>{
    const {email,password}=req.body;
    const user=new User({email,password});
    await user.save();
    console.log(req.body);
    res.send("You made a post request");
})

module.exports=router;