var express = require('express');
var app = express();
require('dotenv').config();
var request = require("requests")

var posts = [
    {
        username: "kyle",
        title: "post 1"
    },
    {
        username: "jim",
        title: "post 2"
    }
];

app.get('/posts' , (req,res) => {
    res.json(posts);
    // console.log("Hi");
});

app.get('/login' , (req,res) => {
    var username = req.body.username;
    var user = { name:username};

   var accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
   res.json({accessToken:accessToken})
});

app.listen(2000);