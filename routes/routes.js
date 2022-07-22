import express from "express";

const router = express.Router();

const food = [
  {
    name: "Sphagetti bolognaise",
    description: "pasta, rich tomoato sauce with vegetables and ground meat",
    price: 18,
  },
];

router.get("/", (req, res) => {
  console.log(food);
  res.send("Hello from the food page");
});

export default router;
