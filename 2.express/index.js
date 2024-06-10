import express from "express";

const app = express();

const cb1 = (req, res, next) => {
  console.log("First callback");
  next();
};
const cb2 = (req, res, next) => {
  console.log("Second callback");
  next();
};

app.get(
  "/crazy",
  [cb1, cb2],
  (req, res, next) => {
    console.log("Third callback");
    next();
  },
  (req, res, next) => {
    console.log("Fourth Callback");
    res.send("Crazyness");
  }
);

app.listen(8005, () => console.log("Server up!"));
