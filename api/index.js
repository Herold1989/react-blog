const express = require("express");
const app = express();

app.use("/jens", (req, res) =>{
    console.log("Hey this is Jens")
})

app.listen("8080", ()=>{
    console.log("Backend is running.");
})