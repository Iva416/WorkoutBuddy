const { Schema, model } = require('mongoose');

const exerciseSchema = new Schema({
  exercise_name: {
    type: String,
    minlength: 1,
    maxlength: 50,
  },
  muscle_group: {
    type: String,
    minlength: 1,
    maxlength: 50,
  },
});

const Exercise = model('Exercise', exerciseSchema);

module.exports = Exercise;
