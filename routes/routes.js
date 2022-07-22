import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const food = [
  {
    name: "Sphagetti bolognaise",
    description: "pasta, rich tomoato sauce with vegetables and ground meat",
    price: 18,
  },
  {
    name: "Lasagna",
    description: "like sphagetti bolognaise just not as good",
    price: 15,
  },
];

router.get("/", (req, res) => {
  res.send(food);
});

router.post("/", (req, res) => {
  const foodItem = req.body;

  food.push({ ...foodItem, id: uuidv4() });

  res.send(`A food of ${foodItem.name} has been added to the database`);
});

export default router;
