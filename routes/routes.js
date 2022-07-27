import express from "express";
const router = express.Router();

import {
  getAllFoods,
  createFood,
  /*readFood,
  updateFood,
  deleteFood,*/
} from "../controllers/controllers.js";

router.get("/", getAllFoods);

router.post("/", createFood);

/* router.get("/:id", readFood);
router.patch("/:id", updateFood);
router.delete("/:id", deleteFood);
*/
export default router;
