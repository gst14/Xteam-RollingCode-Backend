const { Schema, model } = require("mongoose");

const gamesSchema = new Schema({
  image: {
    type: Array,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  price: Number,
  fav: {
    type: Boolean,
    required: false,
  },
  category:{
    type:Schema.ObjectId,
    ref:'Category',
    required : true
  }
});
module.exports = model("Games", gamesSchema);
