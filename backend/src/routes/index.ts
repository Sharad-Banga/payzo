import express,{ Router  } from "express";
import { userRoute } from "./user";
export const xrouter = Router();
const app = express();



app.use("/user",userRoute);


xrouter.get("/",(req,res)=>{
  res.send({
    "sss":"sss"
  })
})