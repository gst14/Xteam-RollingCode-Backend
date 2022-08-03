const Games = require("../models/gamesModels");

const getGame = async (req, res) => {
  try {
    const games = await Games.find({});
    res.status(201).json(games);
  } catch (error) {
    res.status(404).json(error);
  }
};

const sendGame = async (req, res) => {
  const { image, title, details, price, fav } = req.body;
  try {
    const game = new Games({
      image,
      title,
      details,
      price,
      fav,
    });
    const newGame = await game.save();
    res.status(201).json(newGame);
  } catch (error) {
    res.status(404).json(error);
  }
};

const deleteGame = async (req, res) => {
  const { id } = req.params;
  const getById = await Games.findByIdAndDelete(id);
  if (getById !== null) {
    res.status(200).json({msg: "The game has been deleted", deleted: true});
  } else {
    res.status(404).json({ msg: "An error has been raised", error });
  }
};

const updateGame = async (req, res) => {
  const { id } = req.params;
  const { image, title, details, price, prominent } = req.body;
  const getIdUpdate = await Games.findByIdAndUpdate(id, {
    image,
    title,
    details,
    price,
    fav,
  });
  if (getIdUpdate !== null) {
    res.status(200).json({msg: "The game has been modified", modified: true});
  } else {
    res
      .status(404)
      .json({ msg: "An error has been raised", error });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  const getId = await Games.findById(id);
  if (getId !== null) {
    res.status(200).json(getId);
  } else {
    res
      .status(404)
      .json({ msg: "An error has been raised", error });
  }
};

const sendFav = async(req,res)=>{
const {idGame,idUser} = req.params
res.json({game : idGame , user : idUser})
}


module.exports = { getGame, sendGame, deleteGame, updateGame, sendFav,getById };
