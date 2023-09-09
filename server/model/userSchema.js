const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
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
    },
    tokens: [
        {
            token:{
                type: String,
                required:true
            }
        }
    ]

});


// we are hashing the password
userSchema.pre("save",async function(next){
    if(this.isDirectModified("password")){
        this.password= await bcrypt.hash(this.password,12);
        this.cPassword = await bcrypt.hash(this.cPassword,12);
    }
    next();
});


// we are generating token
userSchema.methods.generateAuthToken = async function (){
    try {
        let token = jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
      await  this.save();
      return token;
    } catch (error) {
        console.log(error);
    }
}

const User = mongoose.model('USER',userSchema);

module.exports= User;