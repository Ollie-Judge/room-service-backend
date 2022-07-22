import express from "express";

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
  console.log(food);
  res.send(food);
});

router.post("/", (req, res) => {
  console.log("POST ROUTE REACHED");

  const foodItem = req.body;

  food.push(foodItem);

  res.send(`A food of ${foodItem.name} has been added to the database`);
});

export default router;
