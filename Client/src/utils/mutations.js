import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      User {
        _id
        name
      }
    }
  }
`;

export const ADD_EXERCISE = gql`
  mutation addExercise($userId: ID!, $exercise: String!) {
    addExercise(userId: $userId, exercise: $exercise) {
        exercises {
            exercise_name
            source
          }
          muscle_group
          time
          description
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;
