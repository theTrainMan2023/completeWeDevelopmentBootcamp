/** 
 * Post is used from a Signup Page
 * Username and password
 * 
 * postman/downloads - download for free
 * 
 */

import express from "express"
const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    res.send("Hello, Stormers!");
});
app.post("/register", (req, res) =>{
    res.send("Hello, Stormers!");
});
app.put("/user/angela", (req, res) =>{
    res.sendStatus(201);
});
app.patch("/user/angela", (req, res) =>{
    res.sendStatus(200);
});
app.delete("/user/angela", (req, res) =>{
    res.sendStatus(200);
});

app.delete("/user/angela", (req, res) =>{
    res.sendStatus(200);
})

app.listen(port, ()=>{
    console.log(`Your Server has started on port: ${port}, mee Lord! `);
    
})