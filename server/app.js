const mongoose = require('mongoose'); 
const express= require("express");
const dotenv= require('dotenv')
const app= express();
dotenv.config({path:'./config.env'});
const PORT = process.env.PORT ;
const User =require('./model/userSchema')
require('./db/conn');
// middleware
app.use(express.json());

// we will link the files to make easy

app.use(require('./router/auth'))

// middleware

const middleware = (req,res,next)=>{
  console.log(`hello from middleware`);
  next();
}

app.listen(PORT,()=>{
    console.log(`listing to the port ${PORT}`);
})
