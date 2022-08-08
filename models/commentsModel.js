const { Schema, model } = require("mongoose");

const commentsSchema = new Schema(
  {
    user: {
      type: Schema.ObjectId,
      ref: "Users"
    },
    game: {
      type: Schema.ObjectId,
      ref: "Games"
    },
    rate: {
      type: Number,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Comments", commentsSchema);