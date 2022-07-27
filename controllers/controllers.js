import Food from "../models/model.js";

export const getAllFoods = async (req, res) => {
  try {
    const Foods = await Food.find();

    console.log(Foods);

    res.send(200).json(Foods);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createFood = async (req, res) => {
  const foodItem = req.body;

  const newFood = new Food(foodItem);
  try {
    await newFood.save();
    res.send(201).json(newFood);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

/*export const readFood = (req, res) => {
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
*/
