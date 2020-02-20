const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
        type: String,
        required: "Enter type",
    },
    name: {
        type: String,
        required: "Enter name",
    },
    distance:
    {
        type: Number,
        required: "Enter distance",
    },
    duration:
    {
        type: Number,
        required: "Enter duration",
    },
    weight:
    {
        type: Number,
        required: "Enter weight",
    },
    sets:
    {
        type: Number,
        required: "Enter sets",
    },
    reps:
    {
        type: Number,
        required: "Enter reps",
    }

});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
