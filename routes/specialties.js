const express = require('express');
const router = express.Router();
const { Specialties } = require('../models/modelsShema');

// get all Specialties
router.get('/getAll', (req, res, next) => {
  Specialties.find(function(err, data) {
    if (err) {
      return next(err);
    } else {
      res.json(data);
    }
  });
});

// get provider by id
router.get('/getById/:id', (req, res, next) => {
  Specialties.findById(req.params.id, function(err, data) {
    if (err) {
      return next(err);
    } else {
      res.json(data);
    }
  });
});

// insert provider
router.post('/insert', (req, res, next) => {
  Specialties.create(req.body, function(err, data) {
    if (err) {
      return next(err);
    } else {
      res.json(data);
    }
  });
});

// delete provider by ID
router.delete('/delete/:id', (req, res, next) => {
  Specialties.findByIdAndRemove(req.params.id, function(err, data) {
    if (err) {
      return next(err);
    } else {
      res.json(data);
    }
  });
});

// update provider
router.put('/update/:id', (req, res, next) => {
  Specialties.findByIdAndUpdate(req.params.id, req.body, function(err, data) {
    if (err) {
      return next(err);
    } else {
      res.json({ text: 'updated' });
    }
  });
});

module.exports = router;
