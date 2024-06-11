import express from "express";
import { homeController } from "../controller/homecontroller.js";
import { aboutController } from "../controller/aboutcontroller.js";

const router = express.Router();

router.get("/", homeController);
router.get("/about", aboutController);

export default router;
