import express from "express";

const router = express.Router();

router.get("/all", (req, res) => {
  res.send("All Teacher");
});

router.post("/create", (req, res) => {
  res.send("Sign in new Teacher");
});
router.put("/update", (req, res) => {
  res.send("update Teacher ID");
});
router.delete("/delete", (req, res) => {
  res.send("Delete Teacher from database");
});

export default router;
