//Step 1 - to setup the server
import express from "express"
const app = express();
const port = 3000;

//step 2 - check at the Root, the home page "/"
app.get("/", (req, res) =>{
    // console.log(req.rawHeaders);
    res.send("<h1>Hello, SneakerBars!</h1><p>Welcome to my Spy Academy</p>");
})

//Step 3: other end points or pages 
app.get("/about", (req, res) =>{
    res.send("<h1>About Me</h1><p>You will required to shoot and fight!</p>");
})
app.get("/contact", (req, res) =>{
    res.send("<h1>Pop me a DM!</h1>");
})

//Step 1 - to setup the server
app.listen(port, () =>{
    console.log(`Server running on port: ${port}, congratulations!`);
    
})