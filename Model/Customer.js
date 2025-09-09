 const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  phone:{
    type:Number,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  assignedTo: { 
    type:mongoose.Schema.Types.ObjectId, 
    ref:"user"
  }
});

module.exports = mongoose.model("customer", customerSchema);