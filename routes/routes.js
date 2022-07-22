import express from "express";

import {
  getAllFoods,
  createFood,
  readFood,
  updateFood,
  deleteFood,
} from "../controllers/controllers.js";

const router = express.Router();

router.get("/", getAllFoods);

router.post("/", createFood);

router.get("/:id", readFood);

router.patch("/:id", updateFood);

router.delete("/:id", deleteFood);

export default router;
