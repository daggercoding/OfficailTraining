const express = require("express");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("Public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

mongoose
  .connect("mongodb://127.0.0.1:27017/signup")
  .then(() => console.log("connected"));

const userDetail = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const userData = mongoose.model("userNameEmail", userDetail);

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
    res.redirect("/");
  }
});

////============================================>>>>>HANDLING AUTHORISATION

app.post("/login", async (req, res) => {
  const check = await userData.find({ name: req.body.userName });
  if (check.length < 1) {
    res.send("THE ENTERED USER IS NOT A VALID USER PLEASE SIGNUP ):");
    setTimeout(()=>{
        res.redirect("/")
    },1000)
  } else {
    const passwordMatch = await bcrypt.compare(
      req.body.userPassword,
      check[0].password
    );
    if (passwordMatch) {
      let allData = await userData.find();
      app.get("/Home", (req, res) => {
        res.render("Home", { data: allData });
      });
      res.redirect("/Home");
    } else {
      res.send("Your Entered PassWord is Wrong ):");
    }
  }
});

app.get("/logout", (req, res) => {
  res.redirect("/");
});

app.listen(8000, () => {
  console.log("Server is up Baby ):");
});
