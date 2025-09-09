const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
    minLength:8
  },
  role:{
    type:String,
    required:true,
    enum:["employee","admin"]
  }
})

const user = mongoose.model("users",userSchema);
module.exports = user;