const jwt=require('jsonwebtoken');
const mongoose=require('mongoose');
const User=mongoose.model('User');

module.exports=(req,res,next)=>{
    const {authorization}=req.header;
    if(!authorization){
        return res.status(401).send({error:'You must be logged in'});
    }
    console.log("Authorization => "+authorization);
    const token=authorization.replace('Bearer', '');
    console.log("Token => "+token);
    jwt.verify(token,'MY_SECRET_KEY',async(err,payload)=>{
        if(err){
            return res.status(401).send({error:'You must be logged in out'});
        }
        const {userId}=payload;
        const user=await User.findById(userId);
        req.user=user;
        next();
    });
}