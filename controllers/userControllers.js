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

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findById(id);
    if (user) {
      res.json(user)
    }else{
      res.status(404).json({ msg: "An error has been raised", error });
    }
  } catch (error) {
    res.status(404).json({ msg: "An error has been raised", error });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const SECRET_KEY = process.env.SECRET_KEY_PROD || process.env.SECRET_KEY || 'bebitofiufiu';
  const userFounded = await Users.findOne({ email });
  if (userFounded) {
    const match = bcrypt.compareSync(password, userFounded.password);
    if (match) {
      const payload = {
        id: userFounded._id,
        email: userFounded.email,
        admin: userFounded.admin
      };
      const token = jwt.sign(payload, SECRET_KEY, {
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
  const { fullname, email, password, profile } = req.body;
  try {
    let passwordEncrypted = await bcrypt.hash(password, SALT_ROUNDS);
    const newUser = new Users({
      fullname,
      email,
      password: passwordEncrypted,
      profile,
    });
    console.log(passwordEncrypted);
    const userGenerated = await newUser.save();
    res.send({ created: true, ...userGenerated._doc });
  } catch (error) {
    res.send({ msg: "An error has been raised", error });
  }
};

const modifyUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userFounded = await Users.findByIdAndUpdate(id, {...req.body})
    if(userFounded){
      res
      .json({msg: "The user has been modified", modified: true});
    }else{
      res
      .status(404)
      .json({ msg: "An error has been raised", error });
    }
  } catch (error) {
    res
      .status(404)
      .json({ msg: "An error has been raised", error });
  }
};
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userFounded = await Users.findByIdAndDelete(id)
    if(userFounded){
      res
      .json({msg: "The user has been deleted", deleted: true});
    }else{
      res
      .status(404)
      .json({ msg: "An error has been raised", error });
    }
    res.send({ msg: "Modifying user" });
  } catch (error) {
    res
      .status(404)
      .json({ msg: "An error has been raised", error });
  }
};

module.exports = { getUsers, createUser, getUserById, modifyUser, loginUser,deleteUser };
