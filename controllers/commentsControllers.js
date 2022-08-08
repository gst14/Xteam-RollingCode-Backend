const Comment = require("../models/commentsModel");
const jwt = require("jsonwebtoken");
const { ObjectId } = require("mongoose").Types;
require("dotenv/config");

const getComments = async (req, res) => {
  try {
    await Comment.find()
    .populate({path:'game',model:'Games'})
    .populate({path:'user',model:'Users'})
    .exec((err, comments)=>{
      if(err){
        res.status(400).json({ msg: "An error has been raised", error });
      }else{
        res.status(200).json(comments);
      }
    } )
  } catch (error) {
    res.status(404).json({ msg: "An error has been raised", error });
  }
};

const createComment = async (req, res) => {
  const { user, game, comment } = req.body;
  try {
    const commentCreated = new Comment({
      user,
      game,
      comment
    });
    const newComment = await commentCreated.save();
    res.send({ created: true, ...newComment });
  } catch (error) {
    res.send({ msg: "An error has been raised", error });
  }
};

const getCommentsByGame = async (req, res) => {
  try {
    const {idgame}= req.params;
    const idFilter= ObjectId(idgame)
    await Comment.find({game:idFilter})
    .populate({path:'game',model:'Games'})
    .populate({path:'user',model:'Users'})
    .exec((err, comments)=>{
      if(err){
        res.status(400).json({ msg: "An error has been raised", err });
      }else{
        res.status(200).json(comments);
      }
    } )
  } catch (error) {
    res.status(404).json({ msg: "An error has been raised", error });
  }
};

module.exports = { getComments, createComment, getCommentsByGame };
