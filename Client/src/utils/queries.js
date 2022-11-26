import { gql } from '@apollo/client';

export const QUERY_EXERCISES = gql`
   {
    workout {
      exercises {
        exercise_name
      }
      muscle_group
      time
      description
    }
  }
`;

export const QUERY_FOOD = gql`
  {
    food {
      cuisine_name
      food_name
    }
  }
`;
