require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todoRoutes");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRoutes);


mongoose
  .connect(process.env.DB_URI)// add according to it
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("error occured", error);
  });
