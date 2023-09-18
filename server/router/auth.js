const express = require('express');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
require('../db/conn');
const User = require('../model/userSchema');
const e = require('express');
const router = express.Router();


// document added using post method 

router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cPassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cPassword) {
        return res.status(422).json({ error: "please fill all the fields" });
    }
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already Exist" });
        }
        const user = new User({ name, email, phone, work, password, cPassword });
        const userRegister = await user.save();
        res.status(201).json({ message: "user registered successfully ." });
    } catch (error) {
        console.log(error);
    }
});



// login route

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) 
        {
            return res.status(400).json({ error: "please filled the the data" });
        }
        else
        {
            const userLogin = await User.findOne({ email: email });
            if (userLogin) 
            {
                const isMatch = await bcrypt.compare(password, userLogin.password);
                const token = await userLogin.generateAuthToken();

                if(!isMatch)
                {
                    console.log("password not match");
                   res.status(400).json({error: "password not match"});
                }else{
                    console.log("user sign-in successfully.");
                    res.status(201).json({message: "user sign-in successfully."});
                }
            }
           
        }

    } catch (error) {
        console.log(error);
    }
})


module.exports = router;

