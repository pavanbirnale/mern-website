const mongoose = require('mongoose'); 
const express= require("express");
const dotenv= require('dotenv')

// dot env network 
dotenv.config({path:'./config.env'});
require('./db/conn')
const PORT = process.env.PORT ;


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

app.listen(PORT,()=>{
    console.log(`listing to the port ${PORT}`);
})
