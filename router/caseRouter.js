const express = require("express");
const router = express.Router();
const { createCase, getCaseById, updateCase, deletedCase, getCase } = require("../Controller/caseController");
const authMiddleware = require("../Middleware/authMiddleware");




router.post("/", authMiddleware(["admin"]), createCase);
router.get("/:id",authMiddleware(["admin","employee"]),getCaseById);
router.get("/",authMiddleware(["admin","employee"]),getCase)
router.put("/:id",authMiddleware(["employee"]),updateCase);
router.delete("/:id",authMiddleware(["employee"]),deletedCase);

module.exports = router;
