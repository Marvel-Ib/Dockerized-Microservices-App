const express = require("express");
const httpProxy = require("express-http-proxy");
const connectSql = require("./config/connectdb");
const app = express();

app.get("/", (req, res, next) => {
  res.send("User services ");
});

app.listen(7001, () => {
  console.log("badoo 7001");
});
