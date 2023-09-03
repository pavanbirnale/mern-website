const mongoose = require('mongoose'); 
const express= require("express");
const dotenv= require('dotenv')
// const DB = 'mongodb+srv://birnalepavan:12345@cluster0.ytwcsvw.mongodb.net/mern_stack?retryWrites=true&w=majority';

dotenv.config({path:'./config.env'});
const DB = process.env.DATABASE;
mongoose.connect(DB).then(()=>{
  console.log('connection successful');
}).catch((error)=>{
  console.log(error);
});
const port = 3000;
const app= express();

// middleware

const middleware = (req,res,next)=>{
  console.log(`hello from middleware`);
  next();
}





app.get('/',(req,res)=>{
    res.send("hello from home page");
})

app.get('/about',middleware,(req,res)=>{
  console.log(`hello from about`);
  res.send("hello from about page");
})
app.get('/contact',(req,res)=>{
  res.send("hello from contact   page");
})

app.get('/sign',(req,res)=>{
  res.send("hello from sign page");
})
app.get('/sign-up',(req,res)=>{
  res.send("hello from sign-Up page");
})

app.listen(port,()=>{
    console.log(`listing to the port no ${port}`);
})
