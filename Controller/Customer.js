const customers = require('../Model/Customer');

// create customer only admin
const createCustomer = async(req,res)=>
{
    try{
   const Customer = await customers.create({...req.body,assignedTo:req.user.userId});

     res.status(201).json({message:"Customer Information created",Customer})
    }
    catch(err)
    {
      res.status(500).json({message:"server not found"});
        
    }
}
// access to user and admin find the all customer details
const getCustomer = async (req,res) => {
  try{
    const customer = await customers.find()
  res.json(customer);
  }catch(err){
    res.status(500).json({ message: err.message });
  }
}
// access to user and admin findOne using customer id
const getCustomerById = async (req,res) => {
  try{
    const customer = await customers.findById(req.params.id)
    // console.log(customer);
    if(!customer){ 
      return res.status(404).json({message:"customer not found"});  
    }
    res.status(200).json(customer);
  }catch(err){
    res.status(500).json(err)
  }
}
// access to admin updateCustomer 

const updateCustomer = async (req,res) => {
  try{
  const updateCustomer = await customers.findByIdAndUpdate(req.params.id,req.body ,{new: true});
  res.status(200).json({message:"update successfully",updateCustomer});
  }catch(err){
    res.status(500).json(err);
  }
  
}

// accessto admin deletedCustomer

const deletedCustomer = async (req,res) => {
  try{
    const deletedCustomer = await customers.findByIdAndDelete(req.params.id);
    res.status(200).json({message:"Deleted successfully"});
  }catch(err){
    res.status(500).json(err);
  }
}

module.exports = {createCustomer,getCustomer,getCustomerById,updateCustomer,deletedCustomer};