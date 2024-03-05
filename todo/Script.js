const express = require('express')
const mongoose =require("mongoose")
const app = express()
app.set("view engine","ejs")

mongoose.connect("mongodb://localhost:27017/userTesting")

c


app.get("/",(req,res)=>{
    res.render("index")
})

app.listen(3000,()=>{
    console.log("server is up (:")
})