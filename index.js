// import express
const express = require("express")

//initialize the server
const app = express();



//GET
app.get("/",(req, res) =>{
    res.status(200).send("Welcome to my server")
});
//PUSH
app.push("/",(req, res) =>{
    res.status(200).send("Your data has been saved")
});
//PUT
app.put("/",(req, res) =>{
    res.status(200).send("Your data has been replaced")
});
//PATCH
app.patch("/",(req, res) =>{
    res.status(200).send("Your data has been updated")
});
//DELETE
app.delete("/",(req, res) =>{
    res.status(200).send("Your data has been deleted")
});

//listening the port
app.listen((err) =>{
    console.log(" 🚀 Server is running on https://localstorage:4002")
})