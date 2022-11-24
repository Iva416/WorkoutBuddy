import React from "react";
import "../styles/WorkoutPage.css"; //change path
import //exercise

export default function Workout() {
  return (
    <div>
      <h1>Workouts</h1>
      <label>Which muscle group are you targeting?</label>
      <select name="exercises" onChange={handleInputChange}>
        {exerciseList.map((exercise) => {
          return (
            <option>
              {exercise.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
