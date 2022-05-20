const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/nwd-user-schema")


const cors = require("cors");

//const User = require("./config");
const dbUrl = 'mongodb+srv://chill:chill123@cluster0.emcuc.mongodb.net/ChillDB?retryWrites=true&w=majority'
mongoose.connect(dbUrl)
.then(()=> app.listen(4000,()=>console.log("up and running *4000")),
e=>console.log(`error`,e))

const app = express();
app.use(express.json());
app.use(cors());


app.post("/create",async(req,res)=>{
    const user = new User(req.body)
    //await User.add(data)
    await user.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
   
});






