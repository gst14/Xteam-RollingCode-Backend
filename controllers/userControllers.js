const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Users = require("../models/userModel");
require("dotenv/config");

const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ msg: "An error has been raised", error });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const userFounded = await Users.findOne({ email });
  if (userFounded) {
    const match = bcrypt.compareSync(password, userFounded.password);
    if (match) {
      const payload = {
        id: userFounded._id,
        email: userFounded.email,
      };
      const token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: "10h",
      });
      res.status(200).json({ msg: "Login success", token, ...payload });
    } else {
      res.status(404).json({ msg: "Please verify your credentials" });
    }
  } else {
    res.status(404).json({ msg: "No user match" });
  }
};

const createUser = async (req, res) => {
  const SALT_ROUNDS = 10;
  const { fullname, email, password } = req.body;
  try {
    let passwordEncrypted = await bcrypt.hash(password, SALT_ROUNDS);
    const newUser = new Users({ fullname, email, password: passwordEncrypted });
    console.log(passwordEncrypted);
    const userGenerated = await newUser.save();
    res.send({ created: true, ...userGenerated._doc });
  } catch (error) {
    res.send({ msg: "An error has been raised", error });
  }
};

const banUser = async (req, res) => {
  res.send({ msg: "Delete user" });
};

const modifyUser = async (req, res) => {
  res.send({ msg: "Modifying user" });
};

module.exports = { getUsers, createUser, banUser, modifyUser, loginUser };
