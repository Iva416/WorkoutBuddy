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
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile
  }
`;

module.exports = typeDefs;
