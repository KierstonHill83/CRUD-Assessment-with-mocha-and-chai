var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// var Exercise = mongoose.model('exercises');
var Exercise = require('../models/exercises');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Exercises' });
});

// GET ALL exercises
router.get('/exercises', function(req, res, next) {
  Exercise.find({}, function(err, exercises) {
    if (err) {
      res.json({'ERROR': err});
    } else {
      res.json(exercises);
    }
  });
});

// GET single exercise
router.get('/exercise/:id', function(req, res, next) {
  Exercise.findById(req.params.id, function(err, exercises) {
    if (err) {
      res.json({'ERROR': err});
    } else {
      res.json(exercises);
    }
  });
});

// POST ALL exercises
router.post('/exercises', function(req, res, next) {
  var newExercise = new Exercise ({
    name: req.body.name,
    description: req.body.description,
    tags: req.body.tags
  });
  newExercise.save(function(err, exercises) {
    if (err) {
      res.json({'ERROR': err});
    } else {
      res.json({'SUCCESS': exercises});
    }
  });
});

// PUT single exercise
router.put('/exercise/:id', function(req, res, next) {
  var update = {
    name: req.body.name,
    description: req.body.description,
    tags: req.body.tags
  };
  Exercise.findById(req.params.id, function(err, exercise) {
    if (err) {
      res.json({'ERROR': err});
    } else {
      exercise.name = update.name;
      exercise.description= update.description;
      exercise.tags = update.tags;
      exercise.save(function(err) {
        res.json({'UPDATED': exercise});
      });
    }
  });
});

// DELETE single exercise
router.delete('/exercise/:id', function(req, res, next) {
  Exercise.findByIdAndRemove(req.params.id, function(err, exercise) {
    console.log(err);
    if (err) {
      res.json({'ERROR': err});
    } else {
      res.json({'REMOVED': exercise});
    }
  });
});

module.exports = router;
