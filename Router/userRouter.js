const express = require("express");
const userRouter = express.Router();
const {UserModel} = require('../model/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

userRouter.get('/',(req,res)=>[
    res.send('hello from inside the router')
])

userRouter.post("/register",async(req,res)=>{
    const {name, email, password,number} = req.body;
    //console.log(req.body)
    try{
        bcrypt.hash(password, 3 , async(err, hash)=>{
            if(err){
                res.send('something went wrong while hashing')
            }else{
                const user = new UserModel({name,email,password:hash,number})
                await user.save();
                res.send(req.body)
            }
        })
    }catch(e){
        res.send(e.message)
    }
});

userRouter.post("/login", async(req,res)=>{
    const {email,pass} = req.body;
    try{
        const user = await UserModel.find({email});
        const token = jwt.sign({userId : user[0]._id},process.env.key);
        if(user.length){
            bcrypt.compare(pass,user[0].pass , function(err,result){
                if(result){
                    res.send({"msg":"logged in",token})
                }else{
                    res.send("password mismatched")
                }
            })
        }else{
            res.send("user not found")
        }
    }catch(e){
        res.send(e)
    }
})


module.exports={
    userRouter
}