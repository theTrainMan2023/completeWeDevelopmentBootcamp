//Step 1 - Basic Express Server Set-Up
//Step 1
import express from "express";

//Step 1
const app = express();
const port = 3001

//Step 2
app.get("/", (req, res) =>{
    //Step 3 Adding Date Code
    const today = new Date();
    const day = today.getDay();

    let type = "a weekday";
    let adv = "It's time to work hard";

    if(day === 0 || day === 6){
        type = "the weekend";
        adv = "It's time to have some fun";
    }

    res.render("index.ejs", {
        dayType: type, 
        advise: adv,
    });
})

//Step 1
app.listen(port, () =>{
    console.log(`Your Server is running on port: ${port}, Successfully!`);
    
})

