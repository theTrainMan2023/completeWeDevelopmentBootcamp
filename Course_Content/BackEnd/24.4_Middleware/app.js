/**
 * Authentication
 * between server and requests
 * process errors
 * Body-parser
 * handels form data when singing into a website
 * 
 */

import express from "express"
import bodyParser from "body-parser"
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/public/index.html")
});

app.post("/submit", (req, res) =>{
    console.log(re.body);
});

app.listen(port, ()=>{
    console.log(` Listening successfully on port: ${port}. mee Lord!`);
    
})