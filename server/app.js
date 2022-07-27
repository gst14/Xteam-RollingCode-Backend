const express = require("express");
const app = express();

const cors = require("cors");
const morgan = require("morgan");

require("dotenv/config");
const gamesRoutes = require("../routes/gamesRoutes");
const userRoutes = require("../routes/userRoutes");
require("../database/dbConnection");

const BASE_URL = process.env.BASE_URL || "localhost";
const APP_PORT = process.env.PORT || 8080;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to root" });
});
app.use("/games", gamesRoutes);
app.use("/users", userRoutes);

app.listen(APP_PORT, () => {
  let msg = `The server is online -> ${BASE_URL}:${APP_PORT}`;
  console.log(msg);
});
