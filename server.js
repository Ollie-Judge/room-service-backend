import express from "express";
import bodyParser from "body-parser";
import foodRoutes from "./routes/routes.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/food", foodRoutes);

app.get("/", (req, res) => res.send("Welcome to the homepage"));

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
