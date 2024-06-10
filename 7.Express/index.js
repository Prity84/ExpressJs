//Query String ? pass data  from client to server  ..

import express from "express";
const app = express();

// app.get("/product", (req, res) => {
//   res.send(`Response ok ${req.query.category}`);
// });

app.get("/product", (req, res) => {
  const { category, id } = req.query;
  res.send(`Product Category: ${category} & Product ID: ${id}`);
});

app.listen(8011, () => console.log("Server Up!"));
