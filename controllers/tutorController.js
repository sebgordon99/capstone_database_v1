"use strict";
const Models = require("../models");

const getTutors = (res) => {
  Models.Tutor.findAll({})
    .then((data) => {
      res.send({ result: 200, data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createTutor = (data, res) => {
  Models.Tutor.create(data)
    .then((data) => {
      res.send({ result: 200, data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateTutor = (req, res) => {
  Models.Tutor.update(req.body, {
    where: { tutor_id: req.params.tutor_id },
    returning: true,
  })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteTutor = (req, res) => {
  Models.Tutor.destroy({ where: { tutor_id: req.params.tutor_id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getTutors,
  createTutor,
  updateTutor,
  deleteTutor
};
