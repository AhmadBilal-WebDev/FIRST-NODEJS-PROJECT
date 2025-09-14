const mongoose = require("mongoose");

const URL = "mongodb://localhost:27017/Persons";

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => console.log("Mongodb Connect Successfully!"));
db.on("disconnected", () => console.log("Mongodb Not Connect!"));
db.on("error", () => console.log("Some Error in Connected Mongodb!"));

module.exports = db;
