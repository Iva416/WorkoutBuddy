const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Food {
    cuisine_name: String!
    food_name: String!
  }

  type Workout {
    exercises: [Exercise]
    description: String
    time: String
    muscle_group: String!
  }
  type Exercise {
    exercise_name: String!
    source: String
  }
  type User {
    name: String!
    minlength: Int
  }

  type Query {
    food: [Food]
    workout: [Workout]
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addExercise(userId: ID!, exercise: String!): user
    removeUser(userId: ID!): User
    removeExercises(userId: ID!, exercise: String!): User
  }
`;

module.exports = typeDefs;
