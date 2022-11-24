const { Schema, model } = require('mongoose');

const foodSchema = new Schema({
  Recipe: {
    type: String,
    minlength: 1,
    maxlength: 50,
  },
  Link: {
    type: String,
    minlength: 1,
    maxlength: 50,
  },
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
