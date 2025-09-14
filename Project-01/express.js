const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

require("dotenv").config();
const PORT = process.env.PORT || 3000;

const db = require("./db");

const router = require("./router");
app.use("/person", router);

app.listen(PORT, (req, res) => {
  console.log("server listen on http://localhost:3000");
});
