const express = require("express");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
require("dotenv").config()
const jwt = require("jsonwebtoken")

const app = express();
app.set("view engine", "ejs");
app.use(express.static("Public"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

////================================================>>>>MONGODB CONNECTION

mongoose
  .connect("mongodb://127.0.0.1:27017/signup")
  .then(() => console.log("connected"));

const userDetail = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const userData = mongoose.model("userNameEmail", userDetail);

////====================================>>>>>> CREATING MIDDLEWARE TO PROTECT PAGE

const verifyToken = (req,res,next)=>{
  const token = req.cookies.token;
  if (!token) {
      return res.redirect('/'); // Redirect to login if token not present
  }else{
   
    try{
    const isValid=jwt.verify(token,process.env.SECRETKEY)
    isValid?next():res.redirect('/')
  }catch(err){
    res.status(400).send("User Details Not Found in DataBase")
   }
  }

 
}



////======================================================>>>>>> END POINTS

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
   res.render("signup");
});

app.get("/home",verifyToken, async(req, res) => {
  const data= await userData.find()
  res.render("home",{data})
});

app.get("/logout", (req, res) => {
  res.clearCookie('token');
  res.redirect("/");
});

////============================================>>>>>> SENDING DATA TO DATABASE
app.post("/signup", async (req, res) => {
  const users = new userData({
    name: req.body.userName,
    email: req.body.userEmail,
    password: req.body.userPassword,
  });
  //checking for existing USER AND EMAIL
  const existingUser = await userData.findOne({ name: users.name });
  const existingEmail = await userData.findOne({ email: users.email });
  //HASHING THE PASSWORD SO THAT ITS DIFFICULT TO DECODE
  const dataSalt = 10;
  const hashedPassword = await bcrypt.hash(users.password, dataSalt);
  //SETTING THE HATCHED PASSWORD TO THE USERS PASSWORD AGAIN
  users.password = hashedPassword;

  if (existingUser) {
    res.send("USER ALREADY EXIST PLEASE SELECT ANOTHER USERNAME");
  } else if (existingEmail) {
    res.send("EMAIL ALREADY EXIST PLEASE SELECT ANOTHER USERNAME");
  } else {
    await users.save();

    const token= jwt.sign({_id:users._id},process.env.SECRETKEY,{
      expiresIn:process.env.EXPIRE_IN
    })

    // res.redirect("/");
    res.status(200).json({
      status:"sucess",
      token,
      data:[
        {
          name: req.body.userName,
          email: req.body.userEmail,
          password: req.body.userPassword,
        }
      ]
    })
  }
});

////============================================>>>>>HANDLING AUTHORISATION

app.post("/login", async (req, res ) => {
  const check = await userData.find({ name: req.body.userName })
  if (check.length < 1) {
    res.redirect("/")
  } else {
    const passwordMatch = await bcrypt.compare(
      req.body.userPassword,
      check[0].password
    );
    if (passwordMatch) {
      let token = jwt.sign({_id:check[0]._id},process.env.SECRETKEY,{
        expiresIn:process.env.EXPIRE_IN
      })
      res.cookie('token', token, { httpOnly: true ,expire:process.env.EXPIRE_IN});
      res.redirect('/home');
    } else {
      res.send("Your Entered PassWord is Wrong):");
    }
  }
});


////=====================================>>>>>Remaining
app.get("/delete/:id",async(req,res)=>{
  const id = req.params.id
  await userData.findByIdAndDelete(id)
  res.redirect("/home")
 })
 
 app.get("/update/:id",async(req,res)=>{
   const id = req.params.id
   const userUpdate=await userData.findById(id)
   res.render("Update",{userUpdate})
   
 })
 
 app.post("/updateUser/:id",async(req,res)=>{
   const id=req.params.id
   try{
   await userData.findByIdAndUpdate(id,{$set:{name:req.body.userName,email:req.body.userEmail}})
   res.redirect("/Home")
   }catch(err)
   {
   console.log(err.message)
   }
 })
 

app.listen(8000, () => {
  console.log("Server is up Baby.. ):");
});