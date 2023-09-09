const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
     
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    password: {
        type : String,
        required: true
    },
    cPassword: {
        type : String,
        required: true
    }

});


// we are hashing the password
userSchema.pre("save",async function(next){
    if(this.isDirectModified("password")){
        this.password= await bcrypt.hash(this.password,12);
        this.cPassword = await bcrypt.hash(this.cPassword,12);
    }
    next();
});


const User = mongoose.model('USER',userSchema);

module.exports= User;