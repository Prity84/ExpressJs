//Controllers in express.js

import express from "express";
import students from "./routes/student.js";
const app = express();

app.use("/students", students);

app.listen(8010, () => console.log("Server Up!"));
