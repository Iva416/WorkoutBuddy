const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Food {
    name: String!
    minlength: Int
    maxlength: Int
  }

  type Workout:  {
    name: String!
    minlength: Int
    maxlength: Int
    description: String!
    time: Int
  }

  type User: {
    name: String!
    minlength: Int
    _id: ID
  }

  type Workout:  {
    name: String!
    minlength: Int
    maxlength: Int
  }



  
  
`;

module.exports = typeDefs;
