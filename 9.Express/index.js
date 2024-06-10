import express from "express";
import userCredentials from "./middleware/logs.js";
const app = express();

//Helps to pass middlware app.use()
app.use(userCredentials);
// app.use( "/about", userCredentials);

//Also pass this way...
//app.get("/", userCredentials, (req, res) => {

app.get("/", (req, res) => {
  res.send("<h1>Hello Admin</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>Hello About</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>My  contact page</h1>");
});

app.listen(303, () => console.log("Server up!"));
