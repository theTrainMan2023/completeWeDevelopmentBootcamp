//Leverage Node Existing Code that is built-In
//Native Modules is kinda like prebuild games on your OS

//nodejs.org/docs/latest-v18.x/api/index.html - Documentation
//File System
//1. module enables interacting with the file system module
//2. require() gives access to all the Native Node Modules

const fs = require("fs");

// fs.writeFile("message1.txt", "Hello from NodeJS", (err) =>{
//     if(err) throw err;
//     console.log('The file has been saved!');
// });

fs.readFile("./message.txt", "utf8", (err, data) =>{
    if(err) throw err;
    console.log(data);
    
})
