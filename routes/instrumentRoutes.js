"use strict";
const express = require("express");
const router = express.Router();
const Controller = require("../controllers/instrumentController");

router.get("/", (req, res) => {
  Controller.getInstruments(res);
});

router.post("/", (req, res) => {
  Controller.createInstrument(req.body, res);
});

module.exports = router;
