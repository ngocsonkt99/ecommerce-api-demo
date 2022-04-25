'use strict';
const db = require("../models");

exports.get = (req, res) => {
  db.Collection.findAll({ 
    include: [
      {
        model: db.Brand
      },
      {
        model: db.Category
      }
    ]
  })
  .then(data => {
    res.status(200).json({responseCode: 200, responseMessage: "Ok", responseData: data});
  })
  .catch(err => {
      res.status(500).json({responseCode: 500, responseMessage: "error", responseData: err.message});
  });
};

exports.getId = (req, res) => {
  db.Collection.findOne({ 
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: db.Brand
      },
      {
        model: db.Category
      }
    ]
  })
  .then(data => {
    res.status(200).json({responseCode: 200, responseMessage: "Ok", responseData: data});
  })
  .catch(err => {
      res.status(500).json({responseCode: 500, responseMessage: "error", responseData: err.message});
  });
};
