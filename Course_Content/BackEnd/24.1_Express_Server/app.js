import express from "express";
const app = express();
const port = 3001;

app.listen(3001, () => {
    console.log(`Server is runnign  succesfully on port ${port}.`);
})

//run the your app - node app.js
// To checking what is listening on your computer: netstat -ano | findstr "LISTENING"
