const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://admin:ygklNAPLbtqrmCHP@atlascluster.ohwh42x.mongodb.net/newTodo"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

const formDataSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const UserForm = mongoose.model("UserForm", formDataSchema);

////================================================>>>>ADDING THE DATA TO DATABASE
app.post("/submit", async (req, res) => {
  const userForm = new UserForm({
    name: req.body.name,
    email: req.body.email,
  });
  await userForm.save();
  res.status(200).json({
    status: "sucess",
    data: [
      {
        name: userForm.name,
        gmail: userForm.email,
      },
    ],
  });
});
////================================================>>>>DELETING DATA IN DATABASE
app.post("/delete",async(req,res)=>{
  const deletedUser = await UserForm.findByIdAndDelete(req.body.id)
   res.status(200).send(`deleted user data ${deletedUser}`)
})

////================================================>>>>UPDATE DATA IN DATABASE
app.post("/update",async(req,res)=>{
  const updatedObject ={
    // _id:req.body.id,
    name:req.body.name,
    email:req.body.email
  }
  
  let updatedUser = await UserForm.findByIdAndUpdate(req.body.id,updatedObject)
  res.send(`Previous Data Of User is ${updatedUser}`)
})


////================================================>>>>SENDING THE DATA TO THE USER

app.get("/userData",(req,res)=>{
    UserForm.find()
    .then((data)=>{
     res.json(data)
    })
    .catch(err=>console.log(err.message))
})


app.listen(3000, () => {
  console.log("Server is up");
});
