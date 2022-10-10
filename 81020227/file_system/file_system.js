var a = require("fs");

a.writeFileSync("read.txt","Welcome to my channel nikx");  // if read.txt file does not exists then first create and then after remove previous data & add this data

a.appendFileSync("read.txt","How are you");  // if read.txt file does not exists then first create and then after add this data

var b = a.readFileSync("read.txt") ;  // buffer data generate

// console.log(b);

var c = b.toString();  // convert into original data 

console.log(c);

a.renameSync("read.txt","readwrite.txt");  // rename file name  // 6 lines comments for check forwrite a file code 

a.unlinkSync("readwrite.txt");

