const { Router } = require("express");
const { getComments, createComment, getCommentsByGame } = require("../controllers/commentsControllers");
const { jwtValidator } = require("../middlewares/jwtValidator");
const commentsRoutes = Router();

commentsRoutes
  .get("/", getComments)
  .get("/game/:idgame", getCommentsByGame)
  .post("/", jwtValidator,createComment)

module.exports = commentsRoutes;