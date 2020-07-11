import path from "path";
import express from "express";
import Proxy from "express-http-proxy";
const app = express();

app.use("/users", Proxy("users-service:7101"));
app.use("/verify", Proxy("verify-service:7102"));

app.listen(7000, () => {
  console.log("badoo");
});
