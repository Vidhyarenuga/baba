const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Os = require('../models/os');
const Maincategory = require('../models/maincategory');
router.get("/", (req, res, next) => {
  Maincategory.find()
    .populate('os')
    .exec()
    .then(docs => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});
router.post("/", (req, res, next) => {
  Os.findById(req.body.osId)
    .then(os => {
      if (!os) {
        return res.status(404).json({
          message: "Os indha kadale illayama"
        });
      }
      const maincategory = new Maincategory({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        os: req.body.osId
      });
      return maincategory.save();
    })
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST requests to /products",
        createdCategory: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});
module.exports = router;