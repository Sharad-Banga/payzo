import express,{ Router } from "express";
import { User } from "../db";
export const userRoute = Router();

import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";


userRoute.post("/signup",async (req ,res)=>{
  const username = req.body.username;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  await User.create({
    username : username,
    password : password,
    firstName : firstName,
    lastName : lastName
  })

  res.json({
    "message" : "signup done"
  })
})

userRoute.post("/signin" , async (req , res)=>{
  const username = req.body.username;
  const password = req.body.password;


  const existing = await User.findOne({
    username,
    password
  })

  if(existing){
    const token = jwt.sign({id:existing._id},JWT_SECRET);
    
    res.json({
      token:token
    })
  }
  else{
    res.json({
      "message":"user do not exist"
    })
  }
})