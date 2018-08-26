const express = require('express');
const router = express.Router();
const { Providers } = require('../models/modelsShema');

// get all providers
router.get('/getAll', (req, res, next) => {
  Providers.find(function(err, data) {
    if (err) {
      return next(err);
    } else {
      res.json(data);
    }
  });
});

// get provider by id
router.get('/getById/:id', (req, res, next) => {
  Providers.findById(req.params.id, function(err, data) {
    if (err) {
      return next(err);
    } else {
      res.json(data);
    }
  });
});

// insert provider
router.post('/insert', (req, res, next) => {
  Providers.create(req.body, function(err, data) {
    if (err) {
      return next(err);
    } else {
      res.json(data);
    }
  });
});

// delete provider by ID
router.delete('/delete/:id', (req, res, next) => {
  Providers.findByIdAndRemove(req.params.id, function(err, data) {
    if (err) {
      return next(err);
    } else {
      res.json(data);
    }
  });
});

// update provider
router.put('/update/:id', (req, res, next) => {
  Providers.findByIdAndUpdate(req.params.id, req.body, function(err, data) {
    if (err) {
      return next(err);
    } else {
      res.json({ text: 'updated' });
    }
  });
});

module.exports = router;
