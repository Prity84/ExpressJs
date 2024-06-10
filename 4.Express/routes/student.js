import express from "express";

const router = express.Router();

router.get("/all", (req, res) => {
  res.send("All student");
});

router.post("/create", (req, res) => {
  res.send("Sign in new student");
});
router.put("/update", (req, res) => {
  res.send("update student ID");
});
router.delete("/delete", (req, res) => {
  res.send("Delete student from database");
});

export default router;
