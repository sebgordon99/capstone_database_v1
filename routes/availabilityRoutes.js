"use strict";
const express = require("express");
const router = express.Router();
const Controller = require("../controllers/availabilityController");

router.get("/", (req, res) => {
  Controller.getAvailability(res);
});

router.post("/", (req, res) => {
  Controller.createAvailability(req.body, res);
});

module.exports = router;
