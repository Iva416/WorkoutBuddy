const { Schema, model } = require('mongoose');

const exerciseSchema = new Schema({
  exercises: [
    {
      exercise_name: String,
      source: String,
    },
  ],
  muscle_group: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  reps: {
    type: Number,
    required: false
  },
  date: {
     type: Date, 
     required: false },
  // timestamps: true,
});

const Workout = model('Workout', exerciseSchema);

module.exports = Workout;
