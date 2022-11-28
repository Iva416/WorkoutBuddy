const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Food {
    foods: [Foods]
    description: String
    cuisine_name: String!
  }

  type Workout {
    exercises: [Exercise]
    time: String
    muscle_group: String!
  }

  type Foods {
    food_name: String!
    source: String
  }

  type Exercise {
    exercise_name: String!
    source: String
    description: String
  }
  type User {
    name: String!
    minlength: Int
  }

  type Query {
    food: [Food]
    workout: [Workout]
  }
`;

module.exports = typeDefs;
