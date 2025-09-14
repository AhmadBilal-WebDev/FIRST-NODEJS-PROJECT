const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["student", "teacher", "player", "software engineering", "etc"],
  },
  address: {
    type: String,
    required: true,
  },
});

const person = mongoose.model("person", Schema, "person-details");

module.exports = person;
