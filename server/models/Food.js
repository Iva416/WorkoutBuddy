const { Food, model } = require('mongoose');

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
