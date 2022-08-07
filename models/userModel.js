const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  banned: {
    type: Boolean
  },
  admin: {
    type: Boolean,
    required: true,
  }
  
});
module.exports = model("Users", userSchema);
