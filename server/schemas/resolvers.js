const { Food, index, User, Workout } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async () => {
      return User.find();
    },
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
Mutation: {
  addUser: async (parent, { name, email, password }) => {
    const user = await User.create({ name, email, password });
    const token = signToken(user);

    return { token, user };
  },
  login: async (parent, { email, password }) => {
    const user = await User.findOne({ email });

    if (!user) {
      throw new AuthenticationError('No user with this email found!');
    }

    const correctPw = await user.isCorrectPassword(password);

    if (!correctPw) {
      throw new AuthenticationError('Incorrect password!');
    }

    const token = signToken(user);
    return { token, user };
  },

  addExercise: async (parent, { userId, exercise }) => {
    return User.findOneAndUpdate(
      { _id: userId },
      {
        $addToSet: { exercises: exercise },
      },
      {
        new: true,
        runValidators: true,
      }
    );
  },
  removeUser: async (parent, { userId }) => {
    return User.findOneAndDelete({ _id: userId });
  },
  removeExercise: async (parent, { userId, exercise }) => {
    return User.findOneAndUpdate(
      { _id: userId },
      { $pull: { exercises: exercise } },
      { new: true }
    );
  },
}
};

module.exports = resolvers;
