const { Food, index, User, Workout } = require('../models');

const resolvers = {
  Query: {
    food: async () => {
      console.log('i was hit: food query');
      const data = await Food.find();
      console.log(data);
      console.log(
        '-----------------------------------------------------------'
      );
      return data;
      // return await Food.find();
    },
    workout: async () => {
      console.log('i was hit: workout query');
      const data = await Workout.find();
      console.log(data);
      console.log(
        '-----------------------------------------------------------'
      );
      return data;
      // return await Workout.find();
    },
  },
};

module.exports = resolvers;
