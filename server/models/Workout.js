const { Schema, model } = require('mongoose');

const exerciseSchema = new Schema({
  exercise_name: {
    type: String,
    required: true,
  },
  muscle_group: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  time: {
    type: Date,
    default: Date.now,
  },
});

const Exercise = model('Exercise', exerciseSchema);

module.exports = Exercise;
