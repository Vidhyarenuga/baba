const express = require('express');
const router = express.Router();
const mongoose=require('mongoose');
const Os= require('../models/os');
router.get("/", (req, res, next) => {
    Os.find()
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

router.post('/', (req, res, next) => {
    const os=new Os({
        _id:new mongoose.Types.ObjectId(),
        title:req.body.title
     });
     os.save()
     .then(result => {
        console.log(result);
        res.status(201).json({
          message: "Handling POST requests to /products",
          createdProduct: result
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });
        
// const express = require("express");
// const router = express.Router();
// const mongoose = require("mongoose");

// const Product = require("../models/os");



// router.post("/", (req, res, next) => {
//   const product = new Product({
//     _id: new mongoose.Types.ObjectId(),
//     name: req.body.name,
//     price: req.body.price
//   });
//   product
//     .save()
    
module.exports=router; 