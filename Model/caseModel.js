const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema({
  title: {
     type: String,
      required: true 
    },
  description: {
     type: String,
      required: true 
    },
  
  // Link with customer
  customerId: {
     type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
       required: true },
  
  // Link with admin
  adminId: { 
    type: mongoose.Schema.Types.ObjectId,
     ref: "user",
      required: true },
  
  status: {
     type: String,
      enum: ["open", "in-progress", "closed"], 
      default: "open" },

  createdAt: { 
    type: Date, 
    default: Date.now }
});

module.exports = mongoose.model("Case", caseSchema);
