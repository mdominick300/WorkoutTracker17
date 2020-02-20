
const router = require("express").Router();
const db = require("../models")

// router.get("/api/exercise", (req, res) => {
//     db.Exercise.find({})
//       .then(dbExercise => {
//         res.json(dbExercise);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });

  router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(dbExercise => {
        res.json(dbExercise);
      })
      .catch(err => {
        res.json(err);
      });
  });
  router.post("/api/workouts", ({ body }, res) => {
      db.Workout.create(body)
        .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.json(err);
        });
    });

  router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(dbworkout => {
        res.json(dbworkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.get('/api/workouts/:id', function (req, res) {
    db.Workout.find({
      where: {
        id: req.params.id
      },
      include: [db.Exercise]
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  router.put('/api/workouts/:id', function (req, res) {
    db.Workout.create({
      where: {
        id: req.params.id
      },
      include: [db.Exercise]
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  router.post('/api/workouts', function (req, res) {
    // console.log("api/users", req.body)
    db.Workout.create(req.body)
    .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
    
  });
  
  
  module.exports = router;

  