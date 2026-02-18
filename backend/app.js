const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
 host:"db",
 user:"root",
 password:"root",
 database:"loginapp"
});

app.post("/login",(req,res)=>{
 const {username,password}=req.body;

 db.query(
  "SELECT * FROM users WHERE username=? AND password=?",
  [username,password],
  (err,result)=>{
   if(result.length>0) res.send("Login Success");
   else res.send("Invalid Credentials");
  }
 );
});

app.listen(3000,()=>console.log("Backend running"));