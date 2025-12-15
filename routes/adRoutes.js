"use strict";
const express = require("express");
const router = express.Router();
const Controller = require("../controllers/adController");

router.get("/", (req, res) => {
  Controller.getAds(res);
});

router.post("/", (req, res) => {
  Controller.createAd(req.body, res);
});

module.exports = router;
