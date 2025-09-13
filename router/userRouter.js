const express = require("express");
const {registerAPI, loginUser} = require("../Controller/UserController");
const router = express.Router();

router.post("/register",registerAPI);
router.post("/login",loginUser);
  
module.exports = router;