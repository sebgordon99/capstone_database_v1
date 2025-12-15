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

router.put("/:user_id", (req, res) => {
  Controller.updateUser(req, res);
});

router.delete("/:user_id", (req, res) => {
  Controller.deleteUser(req, res);
});

module.exports = router;
