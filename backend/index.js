import Express from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "./model/authmodel.js"

const app = Express()

app.use(cors())
app.use(Express.json())

mongoose.connect("mongodb+srv://mulpurucharishma:admin123@cluster0.zfti8ae.mongodb.net/sdp")

// app.get("/",(req,res)=>{
//     res.send("hello i am manasvi")
// })

app.post("/signup",async(req,res)=>{
    const {name,email,password} = req.body
    const user = await User.findOne({email})
    if(user){
        res.json({message:"user already exist"})
    }
    else{
        const data = await User.create({name,email,password})
        res.json({message:"user created succesfully",data:data})
    }
})

app.post("/login",async(req,res)=>{
    const {email,password} = req.body
    const data = await User.findOne({email})
    if(!data){
        res.json({message:"User not found"})
    }
    else{
        if(data.password !== password){
            res.json({message:"wrong password"})
        }
        else{
            res.json({message:"user logged in succesfully",data:data})
        }
    }
})

app.listen(8080,()=>{
    console.log("your server is running in http://localhost:8080")
})