import mongoose from "mongoose";

mongoose.connect("mongodb+srv://sharad_banga:sharad@cluster0.8vv4o.mongodb.net/");
const userSchema = new mongoose.Schema({
  username :String,
  password : String,
  firstName : String,
  lastName : String
})

export const User = mongoose.model('User',userSchema);
