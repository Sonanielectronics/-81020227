var express = require("express");
var app = express();
var mongoose = require("mongoose");
var port = process.env.PORT || 3000 ;
require("../src/db/conn");
require("./models/schema")

app.get("/" , (req,res)=>{
    res.send("Hi");
});

app.listen(port,()=>{
    console.log("conn");
});