const express = require("express");
const person = require("./model");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const completeDetails = new person(data);
    const saverDetails = await completeDetails.save();
    res.status(200).json(saverDetails);
    console.log("Person Details Add In DB Successfully!");
  } catch (error) {
    res.status(404).json({ error: "Some Error Saving Data!" });
    console.log("Some Error Saving Data!");
  }
});

router.get("/", async (req, res) => {
  try {
    const responce = await person.find();
    res.status(200).json(responce);
    console.log("Fetch Full Data Successfully! ");
  } catch (error) {
    res.status(404).json({ error: "Some Error In Fetach Data From Full!" });
    console.log("Some Error In Fetach Data From Full!");
  }
});

router.get("/:typeData", async (req, res) => {
  try {
    const data = req.params.typeData;
    const responce = await person.find({ type: data });
    res.status(200).json(responce);
    console.log("Fetch Parms Data Successfully! ");
  } catch (error) {
    res.status(404).json({ error: "Some Error In Fetach Data From Parms!" });
    console.log("Some Error In Fetach Data From Parms!");
  }
});

module.exports = router;
