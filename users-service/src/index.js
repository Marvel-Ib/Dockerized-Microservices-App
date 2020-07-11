import path from "path";
import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
const app = express();

let con = "sql";
async function connect() {
  try {
    con = await mysql.createConnection({
      host: "users-service-db",
      port: process.env.port,
      user: "root",
      password: process.env.PASSWORD,
      database: "users",
    });
    console.log("connected");
  } catch (e) {
    console.log(e);
  }
}

connect();

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes//

//create a todo
app.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const newUser = await con.query("INSERT INTO user (name)  VALUES(?) ", [
      name,
    ]);
    res.status(201).send("Added successfully ");
  } catch (err) {
    console.log(err.message);
  }
});

//get all todos

app.get("/", async (req, res) => {
  try {
    const allUsers = await con.query("SELECT * FROM user");
    res.json(allUsers[0]);
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(7101, (req, res) => {
  console.log("user services is connected ");
});
