//Create folder
//npm init-y
//npm i express
//create instance express
//Provide port:8000
//Basic Route /

import express from "express";
const app = express();

// app.get("/", (req, res) => {
//   res.send("Welcome to express.js");
// });

//Basic Routing
//There are so many http method
//GET =>Allow to retrieve data
//POST => Create/Insert data
//PUT => Completely updata data
//PATCH => Partially update data
//DELETE => Delete Data
//ALL => Any HTTP request Method

// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to home</h1>");
// });

// app.get("/about", (req, res) => {
//   res.send("<h2>I am About section</h2>");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h3>I am contact</h3>");
// });

// app.get("/btn", (req, res) => {
//   res.send("<p>Button</p>");
// });

//String pattern Path
//Not to much use in real life

// app.get("/ab?cd", (req, res) => {
//   res.send("If user hit (acd) or (abcd) then this will run");
// });

//Regex  -- Regular Expression

// app.get(/^\/users\/[0-9]{4}$/, (req, res) => {
//   res.send("Working");
// });

// app.get(/x/, (req, res) => {
//   res.send("This will work when route includes x");
// });

// app.get("/products/iphone", (req, res) => {
//   res.send("This will run when only route include products/iphone");
// });

// app.get("/products/product/product-details", (req, res) => {
//   res.send(
//     "This will run when only route include /products/product/product-details"
//   );
// });

//next allow us to jump onto next function

// app.get(
//   "/double-cb",
//   (req, res, next) => {
//     console.log("First Callback");
//     next();
//   },
//   (req, res) => {
//     res.send("Second Callback");
//   }
// );

const cb1 = (req, res, next) => {
  console.log("First Callback");
  next();
};

const cb2 = (req, res, next) => {
  console.log("Second Callback");
  next();
};

const cb3 = (req, res) => {
  console.log("Third Callback");
  res.send("Array of Callback");
};

app.get("/array-cb", [cb1, cb2, cb3]);

app.listen(8000, () => console.log("server up!"));
