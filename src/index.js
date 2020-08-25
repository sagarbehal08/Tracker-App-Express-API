require('dotenv').config();
require('./models/User');
const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const authRoutes=require('./routes/authRoutes');

const app=express();
app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri='mongodb+srv://admin:passwordpassword@cluster0.xz2f1.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoUri,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected',()=>{
    console.log("Connected to mongo instance");
})

mongoose.connection.on('error',(err)=>{
    console.log("Error connectiong to mongo",err);
})



app.get("/",(req,res)=>{
    res.send("<h1>Hello World");
})

app.listen(4000,function(){
console.log('Server start at port 4000');
})