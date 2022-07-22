import { v4 as uuidv4 } from "uuid";

let food = [];

export const getAllFoods = (req, res) => {
  res.send(food);
};

export const createFood = (req, res) => {
  const foodItem = req.body;

  food.push({ ...foodItem, id: uuidv4() });

  res.send(`A food of ${foodItem.name} has been added to the database`);
};

export const readFood = (req, res) => {
  const { id } = req.params;

  const chosenFood = food.find((foodItem) => (foodItem.id = id));
  res.send(chosenFood);
};

export const updateFood = (req, res) => {
  const { id } = req.params;

  const { name, description, price } = req.body;
  const foodToBeUpdated = food.find((foodItem) => foodItem.id === id);

  if (name) foodToBeUpdated.name = name;

  if (description) foodToBeUpdated.description = description;

  if (price) foodToBeUpdated.price = price;

  res.send(`The food with the id of ${id} has been updated`);
};

export const deleteFood = (req, res) => {
  const { id } = req.params;

  food = food.filter((foodItem) => foodItem.id != id);
  res.send(`The food with the id of ${id} has been deleted`);
};
