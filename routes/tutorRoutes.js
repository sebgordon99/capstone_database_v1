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

router.put("/:tutor_id", (req, res) => {
  Controller.updateTutor(req, res);
});

router.delete("/:tutor_id", (req, res) => {
  Controller.deleteTutor(req, res);
});

module.exports = router;
