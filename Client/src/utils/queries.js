import { gql } from '@apollo/client';

export const QUERY_EXERCISES = gql`
  {
    exercises {
      exercise_name
      muscle_group
    }
  }
`;

export const QUERY_FOOD = gql`
  {
    food {
      food_name
    }
  }
`;
