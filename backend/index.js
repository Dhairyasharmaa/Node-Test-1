const express=require("express")
const app=express();
const mongoose =require("mongoose");
 require("dotenv").config()

const PORT= process.env.PORT;
const empRoute= require("./route/empRoute");
const cors= require("cors");
const bodyparser= require('body-parser');

app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/employe").then(()=>{
    console.log("data base connected")
})

app.use(bodyparser.urlencoded({ extended: true}))
app.use(bodyparser.json())

app.use("/employe",empRoute)


app.listen(PORT, ()=>{
console.log(`server run on ${PORT}`);
})
