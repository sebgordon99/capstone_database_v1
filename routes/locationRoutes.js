"use strict";
const express = require("express");
const router = express.Router();
const Controller = require("../controllers/locationController");

router.get("/", (req, res) => {
  Controller.getLocations(res);
});

router.post("/", (req, res) => {
  Controller.createLocation(req.body, res);
});

module.exports = router;