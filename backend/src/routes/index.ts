import express,{ Router  } from "express";
import { userRoute } from "./user";
export const xrouter = Router();



xrouter.use("/user",userRoute);


xrouter.get("/u",(req,res)=>{
  res.send({
    "sss":"sss"
  })
})

