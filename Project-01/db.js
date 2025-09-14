const mongoose = require("mongoose");
require("dotenv").config();

console.log("MONGODB_URL from .env =>", process.env.URL);
const DB_URL = process.env.URL;
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => console.log("Mongodb Connect Successfully!"));
db.on("disconnected", () => console.log("Mongodb Not Connect!"));
db.on("error", () => console.log("Some Error in Connected Mongodb!"));

module.exports = db;
