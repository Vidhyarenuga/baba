const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Os = require('../models/os');
const Maincategory = require('../models/maincategory');
const Subcategory =require('../models/subcategory');
router.get("/", (req, res, next) => {
  Subcategory.find()
    .populate('maincategory os')
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
  Maincategory.findById(req.body.maincategoryId)
    .then(maincategory => {
      if (!maincategory) {
        return res.status(404).json({
          message: "maincategory indha kadale illayama"
        });
      }
      const subcategory = new Subcategory({
        title: req.body.title,
        maincategory: req.body.maincategoryId
      });
      return subcategory.save();
    })
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST requests to /products",
        createdSubCategory: result
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