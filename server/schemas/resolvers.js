const { Food, index, User, Workout } = require('../models');

const resolvers = {
  Query: {
    food: async () => {
      // const data = await Food.find();
      console.log(data);
      // // return data;
      // return await Food.find();
    },
    workout: async () => {
      const data = await Workout.find();
      console.log(data);
      return data;
      // return await Workout.find();
    },
  },
};

module.exports = resolvers;
