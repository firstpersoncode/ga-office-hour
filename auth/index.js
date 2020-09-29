const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const userRouter = require("./user");

app.use(bodyParser.json());

app.use("/user", userRouter);

app.listen(5000, () => console.log("running"));
