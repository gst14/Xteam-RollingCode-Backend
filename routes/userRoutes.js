const { Router } = require("express");
const {
  getUsers,
  createUser,
  modifyUser,
  loginUser,
  banUser,
} = require("../controllers/userControllers");
const { jwtValidator } = require("../middlewares/jwtValidator");
const userRoutes = Router();

userRoutes
  .get("/", jwtValidator, getUsers)
  .post("/login", loginUser)
  .post("/", createUser)
  .delete("/:id", jwtValidator, banUser)
  .put("/:id", jwtValidator, modifyUser)

module.exports = userRoutes;
