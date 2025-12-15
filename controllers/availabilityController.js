"use strict";
const Models = require("../models");

const getAvailability = (res) => {
  Models.Availability.findAll({})
    .then((data) => {
      res.send({ result: 200, data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createAvailability = (data, res) => {
  Models.Availability.create(data)
    .then((data) => {
      res.send({ result: 200, data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getAvailability,
  createAvailability,
};
