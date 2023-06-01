const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const { config } = require("dotenv");

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    date_created:{
        type: Date, default : Date.now()
    }
})

exports.UserModel = mongoose.model("users",userSchema);

exports.createToken = (_userId) => {
    let token = jwt.sign({_id:_userId}, config.tokenSecret, {expiresIn:"60mins"});
    return token;
}

exports.userValid = (_bodyValid) => {
    let joiSchema = Joi.object({
        name: Joi.string().min(2).max(50).required(),
        email: Joi.string().min(2).max(100).email().required(),
        password: Joi.string().min(6).max(50).required()
    })
    return joiSchema.validate(_bodyValid);
}

exports.loginValid = (_bodyValid) => {
    let joiSchema = Joi.object({
        email: Joi.string().min(2).max(100).email().required(),
        password: Joi.string().min(6).max(50).required()
    })
    return joiSchema.validate(_bodyValid);
}