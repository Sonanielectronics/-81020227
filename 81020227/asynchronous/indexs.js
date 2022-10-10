var a = require("fs");

a.mkdir("created",(err) => {
    console.log("folder created");
});

a.writeFile("created/created.js","Hi", () => {
    console.log("files created");
})

a.appendFile("created/1.js","Hello",() => {
    console.log("data added");
})

a.readFile("created/1.js","utf-8",(err,data) => {
    // console.log(err);
    console.log(data);
});

a.rename("created/1.js","created/delete.js", () => {
    console.log("rename file name");
})

a.unlink("created/deleted.js" , () => {
    console.log("file deleted")
});

a.rmdir("createded" , () => {
    console.log("folder deleteded");
})

