import { gql } from '@apollo/client';

export const QUERY_EXERCISES = gql`
  query Workout {
    workout {
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

export const QUERY_FOOD = gql`
  query Food {
    food {
      foods {
        food_name
        source
      }
      cuisine_name
      description
    }
  }
`;
