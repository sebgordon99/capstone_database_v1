"use strict";
const Models = require("../models");

const getInstruments = (res) => {
  Models.Instrument.findAll({})
    .then(data => {
      res.send({ result: 200, data });
    })
    .catch(err => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createInstrument = (data, res) => {
  Models.Instrument.create(data)
    .then(data => {
      res.send({ result: 200, data });
    })
    .catch(err => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getInstruments,
  createInstrument,
};