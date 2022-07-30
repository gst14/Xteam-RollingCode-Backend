const mongoose = require("mongoose");

require("dotenv/config");
const connectionDB = async () => {
  const DB_CONNECTION_STRING = process.env.DB_URL_CONNECTION_GAMES_PROD || process.env.DB_URL_CONNECTION_GAMES
  try {
    await mongoose.connect(DB_CONNECTION_STRING);
    console.log("DB connection has been succesfully");
  } catch (error) {
    console.log("Something went wrong, check your connection");
    console.log(error);
  }
};
connectionDB();
