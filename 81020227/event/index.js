
// var a = require("events");
// var b = new a();

// b.on("saymyname", () => {
//     console.log("my name is nikx");
// });

// b.emit("saymyname");

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// var c = require("events");
// var d = new c();

// d.on("saymyname", () => {
//     console.log("my name is nikx");
// });

// d.on("saymyname", () => {
//     console.log("my name is nikx");
// });

// d.on("tellmyname" , () => {
//     console.log("Hi");
// });

// d.emit("saymyname");
// d.emit("tellmyname");

///////////////////////////////////////////////////////////////////////////////////////////////////////////

var a = require("events");
var b = new a();

b.on("saymyname", (sc,msg) => {
    console.log(`our status code is ${sc} and our code is ${msg}`);
});

b.emit("saymyname",200,"okay");