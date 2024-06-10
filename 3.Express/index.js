//Post HTTP method.....

import express from "express";
const app = express();

//Ugly code

// app.get("/student", (req, res) => {
//   res.send("All student");
// });

//Insert data to a database through post method
// app.post("/student", (req, res) => {
//   res.send("Add new student");
// });

// app.put("/student", (req, res) => {
//   res.send("Update student");
// });

// app.delete("/student", (req, res) => {
//   res.send("delete student");
// });

//Refactor all the ugly code

app
  .route("/student")
  .get((req, res) => res.send("All student"))
  .post((req, res) => res.send("Add new student"))
  .put((req, res) => res.send("Update student"))
  .delete((req, res) => res.send("Delete student"));

app.listen(8000, () => console.log("Server up!"));
