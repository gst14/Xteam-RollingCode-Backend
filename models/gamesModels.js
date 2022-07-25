const { Schema, model } = require("mongoose");

const gamesSchema = new Schema({
  image: {
    type: Array,
    required: true,
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
  prominent: {
    type: Boolean,
    required: true,
  },
});
module.exports = model("Games", gamesSchema);
