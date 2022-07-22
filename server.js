import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("[test the home route]");
  res.send("Welcome to the homepage");
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
