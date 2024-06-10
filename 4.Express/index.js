import express from "express";

import students from "./routes/student.js";
import teachers from "./routes/teacher.js";

const app = express();

//. Create routes folder and put your router in a seperatefiles
//.  Create instance of express.Router()
//. Instead of app.method change to "router.method"
//. Export router
//. Import Router
// Use the (app.use) built-in middleware & provide your routes

app.use("/students", students);
app.use("/teachers", teachers);

app.listen(8080, () => console.log("Server up!"));
