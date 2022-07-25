const { Router } = require("express");
const {
  getGame,
  sendGame,
  deleteGame,
  updateGame,
} = require("../controller/gamesController");
const gamesRoutes = Router();

gamesRoutes.get("/", getGame);

gamesRoutes.post("/", sendGame);

gamesRoutes.delete("/:id", deleteGame);

gamesRoutes.put("/:id", updateGame);

module.exports = gamesRoutes;
