const { Exercise, model } = require('mongoose');

const exerciseSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  time : { 
    type : Date, 
    default: Date.now },
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;