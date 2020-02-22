
const router = require("express").Router();
const db = require("../models")


router.get("/api/workouts/range", (req, res) => {
    console.log("range")
    db.Workout.find()
    .sort({day: -1}).limit(7)
        .then(dbWorkout => {
            // console.log("Hello",dbWorkout)
            res.json(dbWorkout.reverse());
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    db.Workout.find()
        .then(dbworkout => {
            res.json(dbworkout);
            console.log("display")
        })
        .catch(err => {
            res.json(err);
        });
});

router.post("/api/workouts", (req, res) => {
    console.log("post")
    db.Workout.create({})
      .then(dbworkout => {
        res.json(dbworkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
router.put("/api/workouts/:id", (req, res)=>{
    console.log("put")
    db.Workout.findByIdAndUpdate(req.params.id, {$push : {exercises: req.body}})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;

