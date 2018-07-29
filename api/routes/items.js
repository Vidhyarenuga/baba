const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Os = require('../models/os');
const Maincategory = require('../models/maincategory');
const Subcategory =require('../models/subcategory');
const Item=require('../models/item');
router.get("/", (req, res, next) => {
  Item.find()
    .populate('subcategory')
    .populate('maincategory')
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
  Subcategory.findById(req.body.subcategoryId)
    .then(subcategory => {
      if (!subcategory) {
        return res.status(404).json({
          message: "item indha kadale illayama"
        });
      }
      const item = new Item({
        _id: new mongoose.Types.ObjectId(),
        subcategory: req.body.subcategoryId,
        title: req.body.title,
        description:req.body.description,
        version:req.body.version,
        createdBy:req.body.createdBy,
        details:req.body.details
      });
      return item.save();
    })
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "varu ahna varadhu",
        createdItem: result
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