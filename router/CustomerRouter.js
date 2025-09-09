const express=require("express")
const router=express.Router();
const{createCustomer, getCustomer, getCustomerById, updateCustomer, deletedCustomer}=require("../Controller/Customer")
const authMiddleware=require("../Middleware/authMiddleware");

router.post("/",authMiddleware(["admin"]),createCustomer);
router.get("/",authMiddleware(["admin","employee"]),getCustomer);
router.get("/:id",authMiddleware(["admin","employee"]),getCustomerById);
router.put("/:id",authMiddleware(["admin"]),updateCustomer);
router.delete("/:id",authMiddleware(["admin"]),deletedCustomer);


module.exports=router;