const mongoose = require("mongoose");

require("dotenv/config");
const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL_CONNECTION_GAMES);
    console.log("Te conectaste con exito a la base de datos de Games");
  } catch (error) {
    console.log("Algo salio mal, revise la conexion", error);
  }
};
connectionDB();
