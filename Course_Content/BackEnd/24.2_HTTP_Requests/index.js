import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Angela</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


/** HTTP 
 * Hypertext Transfer Protocol
 * Request we get sending 
 * Get - repsonse form server
 * POST - Sending resource to server
 * PUT - Update methods - Replace resource - New item is given 
 * PATCH - Update Method - Patchup a resource -  a fix is sent 
 * DELETE - deletes resources
 * **/