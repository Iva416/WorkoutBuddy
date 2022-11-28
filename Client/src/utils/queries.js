import { gql } from '@apollo/client';

export const QUERY_EXERCISES = gql`
  query Workout {
    workout {
      exercises {
        exercise_name
        source
        description
      }
      muscle_group
      time
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
