require('dotenv').config();
require('./models/User');
require('./models/Track');
const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const authRoutes=require('./routes/authRoutes');
const trackRoutes=require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app=express();
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

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



app.get("/",requireAuth,(req,res)=>{
    res.send(`You email id => ${req.user.email}`);
})

app.listen(4000,function(){
console.log('Server start at port 4000');
})