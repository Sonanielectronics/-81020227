
///////////////////////////////////////////////////////////////////////////////////////////// read this carefully

// var a = require("fs");

// a.mkdirSync("Hello");  // one time created then after comments ortherwise we are get error

// a.writeFileSync("Hello/xyz.txt","Hiii");
// a.writeFileSync("Hello/abc.txt","Hiii");

// a.appendFileSync("Hello/xyz.txt"," How are you");

// // var b = a.readFileSync("Hello/xyz.txt").toString();

// var b = a.readFileSync("Hello/abc.txt", "utf-8");

// console.log(b);

// a.renameSync("Hello/xyz.txt","Hello/readwrite.txt");

// // a.unlinkSync("Hello/readwrite.txt");

// // a.rmdirSync("Hello/readwrite.txt");
// // // a.rmdirSync("Hello");

///////////////////////////////////////////////////// second /////////////////////////////////////////////

// a.mkdir("hello",(err)=>{
//     console.log(err);
//     console.log("ho gaya");
// })

// fs.writeFile("hello/xyz.js","Hii",(err)=>{
// })

var a = require("fs");
a.mkdirSync("Hello");
a.writeFileSync("Hello/xyz.txt","Hello");
a.writeFileSync("Hello/abc.txt","Hello");
a.writeFileSync("Hello/mnp.txt","Hello");

a.appendFileSync("Hello/xyz.txt"," How are you");

var b = require("fs").readFileSync("Hello/abc.txt", "utf-8");
console.log(b);

a.renameSync("Hello/abc.txt","Hello/readwrite.txt");

// a.unlinkSync("Hi/Hi.html");
// a.unlinkSync("Hi/Hello");  // we can't code this type

// a.rmdirSync("Hi/Hi.html");  // we can't run this cmd command 
// a.rmdirSync("Hello");

