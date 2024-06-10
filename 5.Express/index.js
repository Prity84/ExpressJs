import express from "express";
const app = express();

// Router Params
//Capturing specifice data from specified url
// app.get("/students/delete/:id", (req, res) => {
//   res.send(req.params.id);
// });

// app.get("/products/iphone/:id", (req, res) => {
//   res.send(req.params.id);
// });

// app.get("/products/iphone/:iphone", (req, res) => {
//   const { iphone } = req.params;
//   res.send(`iphone ${iphone} Pro Max`);
// });

// app.get("/products/:category/:id", (req, res) => {
//   const { category, id } = req.params;
//   res.send(`Product Category (${category}) & Product Id (${id})`);
// });

// app.get("/product/order/:day/:month/:year", (req, res) => {
//   const { day, month, year } = req.params;
//   res.send(`Product order on ${day}${month}${year} `);
// });

//app.params function

// used to callback triggered to the router parameters and commonaly used to
//check the existence of the data requested to the same route params

app.param("id", (req, res, next, id) => {
  console.log(`id: ${id}`);
  next();
});

app.get("/user/:id", (req, res) => {
  console.log("This is user path");
  res.send("Response ok");
});

app.listen(8009, () => console.log("Server up!"));
