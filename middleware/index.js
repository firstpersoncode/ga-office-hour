const express = require("express");
const app = express();

let count = 0;

// middleware untuk increment
app.use((req, res, next) => {
  count++;

  next();
});

app.get("/endpoint-1", (req, res) => {
  res.send({ count });
});

app.get("/endpoint-2", (req, res) => {
  res.send({ count });
});

app.get("/endpoint-3", (req, res) => {
  res.send({ count });
});

app.get("/endpoint-4", (req, res) => {
  res.send({ count });
});

app.listen(5000, () => console.log("running"));
