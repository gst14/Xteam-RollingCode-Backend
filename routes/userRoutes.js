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

userRoutes.get("/", jwtValidator, getUsers);

userRoutes.get("/login", loginUser);

userRoutes.post("/", createUser);

userRoutes.delete("/:id", jwtValidator, banUser);

userRoutes.put("/:id", jwtValidator, modifyUser);

module.exports = userRoutes;
