// var add = require("./operator");  // imports mopdels
var b = require("./operator");

// console.log(add(5,5));

console.log(b);

////////// it think we can't upload more then one modules at the time /////////////////////////////////////////

// // var add = require("./operator");  
// var name = require("./operator");
// var name2 = require("./operator");

// // console.log(add(5,5));

// console.log(name);
// console.log(name2);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var b = require("./operator");
// console.log(b.add1(5,5));
// console.log(b.sub1(10,5));

///////////////////////////////////////////////////////////////////////////////////////////////////////////

var { sub1 , add1 } = require("./operator");

console.log(add1(5,5));
console.log(sub1(5,5));

// var b = require("./operator");
// console.log(b.add(5,5));
// console.log(b.sub(10,5));

