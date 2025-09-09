const user = require("../Model/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register API

const registerAPI = async (req,res) => {
  const {username,email,password,role}=req.body;

  try{
    const existingUser = await user.findOne({email});
    if(existingUser){
      return res.status(400).json({message:"user account already register, please change"});
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = new user({username,email,password:hashedPassword,role});
    await newUser.save();
    res.status(201).json({message:"Registration completed"})
  }catch(err){
    console.log(err);
  }
}

// Login user

const loginUser = async (req,res) => {
  const {email,password} =req.body;
  try{
    const existingUser = await user.findOne({email});
    if(!existingUser){
      return res.status(404).json({message:"user not found,Please Register first"});
    }
    const passwordMatch = await bcrypt.compare(password,existingUser.password);
    if(!passwordMatch){
      return res.status(400).json({message:"Password mismatch"});
     
    }
     const token = jwt.sign(
      {
        userId:existingUser._id,
        username:existingUser.username,
        email:existingUser.email,
        role:existingUser.role,
      },
    process.env.JWT_SECRET_KEY,
    {expiresIn:'24h'}
     );
    res.status(200).json({message:"Login Successfully",token,existingUser});
     
  }catch(err){
    console.error(err);
  }
}


module.exports = {registerAPI,loginUser}