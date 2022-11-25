const { Schema, model } = require('mongoose');

const foodSchema = new Schema({
  food: {
    cuisine_name: String,
    food_name: String,
  },
  source: {
    type: String,
  },
});

const Food = model('Food', foodSchema);

module.exports = Food;
