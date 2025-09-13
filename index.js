const express = require("express");
require("dotenv").config();
const dbConnection =require("./config/dbConnection");
const userRouter = require("./router/userRouter");
const CustomerRouter = require("./router/CustomerRouter");
const caseRouter = require("./router/caseRouter");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/auth",userRouter);
app.use("/customer",CustomerRouter);
app.use("/case",caseRouter);

let port = process.env.PORT||2000;

app.listen(port, () => {
  console.log(`server running on ${port}`);
dbConnection();
})