const mongoose = require("mongoose");
const cases = require("../Model/caseModel");

const createCase = async (req, res) => {
  try {
    const { customerId, title, description,status } = req.body;

    // Validate customerId format
    if (!mongoose.Types.ObjectId.isValid(customerId)) {
      return res.status(400).json({ message: "Invalid customerId format" });
    }

    const newCase = await cases.create({
      title,
      description,
      customerId,
      adminId: req.user.userId,
      status
      
    });

    res.status(201).json({
      message: "Case created successfully",
      data: newCase
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCaseById = async (req,res) => {
  try{
    const getCaseById = await cases.findById(req.params.id)
    // console.log(customer);
    if(!getCaseById){ 
      return res.status(404).json({message:"customer not found"});  
    }
    res.status(200).json(customer);
  }catch(err){
    res.status(500).json(err)
  }
}

const getCase = async (req,res) => {
    try{
        const getCase = await cases.find()
        res.status(200).json({message:"All cases",getCase})
    }catch(err){
        res.status(500).json(err)
    }
}

const updateCase = async (req,res) => {
  try{
  const updateCase = await cases.findByIdAndUpdate(req.params.id,req.body ,{new: true});
  res.status(200).json({message:"update successfully",updateCase});
  }catch(err){
    res.status(500).json(err);
  }
  
}



const deletedCase = async (req,res) => {
  try{
    const deletedCase = await cases.findByIdAndDelete(req.params.id);
    res.status(200).json({message:"Deleted successfully"});
  }catch(err){
    res.status(500).json(err);
  }
}


module.exports ={createCase ,getCaseById ,getCase ,updateCase ,deletedCase};