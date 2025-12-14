"use strict";
const express = require("express");
const router = express.Router();
const Controller = require("../controllers/userController");

router.get("/", (req, res) => {
  Controller.getUsers(res);
});

router.post("/", (req, res) => {
  Controller.createUser(req.body, res);
});

module.exports = router;