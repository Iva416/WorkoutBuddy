import React from "react";
import "../styles/WorkoutPage.css"; //change path
import { useQuery } from '@apollo/client';

import { QUERY_EXERCISES } from '../utils/queries';

export default function Workout() {
    
    const { loading, data } = useQuery(QUERY_EXERCISES);

  return (
    <div>
      <h1>Workouts</h1>
      <label>Which muscle group are you targeting?</label>
      <select name="exercises">
        {data.map((exercise) => {
          return (
            <option>
              {data.muscle_group}
            </option>
          );
        })}
      </select>
    </div>
  );
}
