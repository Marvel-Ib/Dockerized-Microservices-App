const express = require("express");
const httpProxy = require("express-http-proxy");
const app = express();

app.use("/users", httpProxy("http://localhost:7001"));
app.use("/verify", httpProxy("http://localhost:7002"));

app.listen(7000, () => {
  console.log("badoo");
});
