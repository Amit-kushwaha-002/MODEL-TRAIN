const express = require('express');
const app = express();
const cors= require("cors");
// const pool=require('./database');
const userModel =require("./model/user");

const cookieParser = require('cookie-parser');
const path =require('path');
const bcrypt = require('bcrypt'); 
const jwt=require('jsonwebtoken');
const user = require('./model/user');
const { error } = require('console');

let port =3000;
app.set("view engine","ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(express.json());
app.use(cors())
app.use(cookieParser());


// pool.query("SELECT 1", (err, result) => {
//   if (err) {
//     console.error("DB connection failed:", err);
//   } else {
//     console.log("DB connected successfully:", result);
//   }
// });


app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const sql = "INSERT INTO contact (name, email, message) VALUES (?, ?, ?)";

  pool.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database insert failed" });
    }
    res.json({ status: "success", id: result.insertId });
  });
});

 app.listen(port,()=>{
     console.log(`listening on port 3000`);
})

//authorization 
app.get("/",(req,res)=>{
res.render("signup");
  
})

app.post("/create", (req,res)=>{
let {username,email,password}=req.body;
 bcrypt.genSalt(10,(err,salt)=>{
  
  bcrypt.hash(password,salt,async(err,hash)=>{
   let createUser= await userModel.create({
 
  username,
  email,
  password:hash
})

let token=jwt.sign({email},"shh");
res.cookie("token",token);
  res.send(createUser);

  })
 })

});

app.get("/login",(req,res)=>{
  res.render("login");
})
app.post("/login" ,async function(req,res){
 let user =await userModel.findOne({email:req.body.email});
 if(!user) return res.send("something is wrong");

bcrypt.compare(req.body.password,user.password,function (err,result){
  // 
  console.log(result);
  if(result){
    let token=jwt.sign({email:user.email},"shh");
res.cookie("token",token);
  res.send(createUser);
    
  }
    else res.send("something went wrong");
})
  
});

app.get("/logout",(req,res)=>{
  res.cookie("token","");
  res.redirect("/");
});
app.get("/doctorprofile",(req,res)=>{
  res.render("doctorprofile");
});