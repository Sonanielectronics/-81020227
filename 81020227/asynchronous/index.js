
var a = require("fs");

a.writeFile("read.txt","Hi",(err) => {
    console.log(1);
    console.log(err);
});  // if this files does not exist then fiurst created & then after data added

a.appendFile("read.txt","Hello",(err) => {
    console.log(2);
    console.log(err);
})

a.readFile("read.txt","utf-8",(err,data) => {
    console.log(2);
    console.log(err);
    console.log(data);
})