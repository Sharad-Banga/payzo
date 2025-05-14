import express  from "express";
const app = express();
import {xrouter} from "./routes/index"
import { userRoute } from "./routes/user";

import cors from "cors";
app.use(cors());
app.use(express.json());

app.use("/api/v1",xrouter);

userRoute.get("/",(req,res)=>{
  res.send({
    "msss":"sssssssss"
  })
});


app.listen(3000);