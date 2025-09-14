const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const db = require("./db");

const router = require("./router");
app.use("/person", router);

app.listen(3000, (req, res) => {
  console.log("server listen on http://localhost:3000");
});

// Finally i push data by git