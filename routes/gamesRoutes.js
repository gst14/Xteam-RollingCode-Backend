const { Router } = require("express");
const {
  getGame,
  sendGame,
  deleteGame,
  updateGame,
  sendFav, 
  getById
} = require("../controllers/gamesController");

const { jwtValidator } = require("../middlewares/jwtValidator");

const gamesRoutes = Router();

gamesRoutes
            .get("/", getGame)

            .post("/",jwtValidator, sendGame)

            .delete("/:id",jwtValidator, deleteGame)

            .put("/:id",jwtValidator, updateGame)

            .post("/fav/:idGame/:idUser" , jwtValidator, sendFav)

            .get("/:id",getById)

module.exports = gamesRoutes;
