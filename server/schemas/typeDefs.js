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
    user: [User]
  }

  type Auth {
    token: ID!
    user: User
  }
  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addExercise(userId: ID!, exercise: String!): User
    removeUser(userId: ID!): User
    removeExercise(userId: ID!, exercise: String!): User
  }
`;

module.exports = typeDefs;
