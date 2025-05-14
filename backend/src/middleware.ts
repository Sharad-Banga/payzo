import { Request,Response,NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";

export const authMiddleware = (req :Request,res:Response,next:NextFunction)=>{

  const header = req.headers["authorization"];

  try{
      const decoded  = jwt.verify(header as string , JWT_SECRET);

      if(decoded){
        //@ts-ignore
        req.userId = decoded.id;
        next();
      }

      else{
        res.send({
          message:"not logged in"
        })
      }
  }
  catch(err){
    return res.json({
      "message" : "accha nhi lg rha na"
    })
  }
}