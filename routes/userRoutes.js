const { Router } = require("express");
const {
  getUsers,
  createUser,
  modifyUser,
  loginUser,
  getUserById,
  deleteUser,
  resetPasswordByEmail
} = require("../controllers/userControllers");
const { jwtValidator } = require("../middlewares/jwtValidator");
const userRoutes = Router();

userRoutes
  .get("/", jwtValidator, getUsers)
  .get("/:id", jwtValidator, getUserById)
  .post("/login", loginUser)
  .post("/", createUser)
  .delete("/:id", jwtValidator, deleteUser)
  .put("/:id", jwtValidator, modifyUser)
  .post("/resetPassword", resetPasswordByEmail);

module.exports = userRoutes;
