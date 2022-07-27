import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import foodRoutes from "./routes/routes.js";

const app = express();

app.use("/food", foodRoutes);

app.use(bodyParser.json({ limit: "35mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "35mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://test:test@test.5cbzq.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server is running on http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(error.message));

//this is not a safe way to store a db connection, but right now im not sure how to do it with the .env file
