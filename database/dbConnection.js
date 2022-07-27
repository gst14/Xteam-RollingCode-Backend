const mongoose = require("mongoose");

require("dotenv/config");
const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL_CONNECTION_GAMES);
    console.log("DB connection has been succesfully");
  } catch (error) {
    console.log("Something went wrong, check your connection");
    console.log(error);
  }
};
connectionDB();
