// Pass Data 
app.get("/", (req, res) => {
    res.render("index.ejs", 
    { name: "Peter" });
})
//Index.ejs file
/**
 * <body>
 * <h1>
 *  Hell <%= name %>
 * </h1>
 * </body>
*/

// Passing Array
let bowl = ["Apples", "Eggs", "Pies", "Bananas"]

app.get("/", (req, res) => {
    res.render("index.ejs",
    { fruits: bowl });
})
//Index.ejs file
/**
 * <body>
 *  <ul>
 *      <% fruits.forEach((fruit) => {
 *          <li>
 *              <%= fruit %>
 *          </li>
 *      })
 *  </ul>
 * </body>
**/

//PAssing data from the server side to client side
//index.js
app.post("/submit", (req, res) => {
    res.render("index.ejs",
    { name: req.body["FName"] }//remember body-parser
    );
})

//EJS Sd
/**
 * <form action="/submit" method="POST">
 * <input type="text" name="fName" placholder="First Name"
 * <input type="text" name="lName" placholder="Last Name"
 * <input type="submit" value="OK"
 * </form>
 */