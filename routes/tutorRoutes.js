"use strict";
const express = require("express");
const router = express.Router();
const Controller = require("../controllers/tutorController");

router.get("/", (req, res) => {
  Controller.getTutors(res);
});

router.post("/", (req, res) => {
  Controller.createTutor(req.body, res);
});

module.exports = router;