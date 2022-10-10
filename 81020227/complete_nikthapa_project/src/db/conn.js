var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Ghogharis")
.then( ()=>{
    console.log("Okay");
})
.catch( (e)=>{
    console.log(e);
})