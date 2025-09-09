const jwt = require("jsonwebtoken");

const authMiddleware = (allowedRole  = []) => {
  return async (req,res,next) => {
    const authHeaders = req.headers.authorization;

    if(!authHeaders||!authHeaders.startsWith("Bearer")){
      return res.status(401).json({message:"Unauthorized : No token provided"});
    }

    const token = authHeaders.split(" ")[1];

    try{
      const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
      req.user = decoded;


      if (allowedRole.length > 0 && !allowedRole.includes(decoded.role)) {
  console.log("Role from token:", decoded.role, "Allowed roles:", allowedRole);
  return res.status(403).json({ message: "Forbidden: You don't have access to this api" });
}

      next();
    }catch(err){
      return res.status(401).json({message:"Invaild or expired token provided"})
    }
  }
}

module.exports = authMiddleware;