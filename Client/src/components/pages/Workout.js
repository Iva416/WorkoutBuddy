import React, { useState } from "react";
// import "../styles/WorkoutPage.css"; //change path
import { useQuery } from "@apollo/client";

import { QUERY_EXERCISES } from "../../utils/queries";

// const exerciseList = ({ }) => {
//   if (!exercises.length) {
//     return <h3>No exercises selected!</h3>;
//   }
// }

export default function Workout() {
  const { loading, data } = useQuery(QUERY_EXERCISES);
  const [exercises, setExercises] = useState([]);

  const handleChange = (event) => {
    const muscle_group = event.target.value;

    var exerciseList;

    if (muscle_group === "Legs") {
      exerciseList = data.find((muscle) => 
        muscle.muscle_group === "Legs"
      );
      setExercises(exerciseList.exercises);
    } else if (muscle_group === "Back") {
      exerciseList = data.find((muscle) => 
        muscle.muscle_group === "Back"
      );
      setExercises(exerciseList.exercises);
    } else if (muscle_group === "Shoulders") {
      exerciseList = data.find((muscle) => 
        muscle.muscle_group === "Shoulders"
      );
      setExercises(exerciseList.exercises);
    } else if (muscle_group === "Chest") {
      exerciseList = data.find((muscle) => 
        muscle.muscle_group === "Chest"
      );
      setExercises(exerciseList.exercises);
    } else if (muscle_group === "Arms") {
      exerciseList = data.find((muscle) => 
        muscle.muscle_group === "Arms"
      );
      setExercises(exerciseList.exercises);
    } else {
      exerciseList = data.find((muscle) => 
        muscle.muscle_group === "Abs"
      );
      setExercises(exerciseList.exercises);
    }
  };

  return (
    <div>
      <h1>Workouts</h1>
      <label>Which muscle group are you targeting?</label>
      <select name="exercises" onChange={handleChange}>
        {data.map((exercise) => {
          return (
            <option value={exercise.muscle_group}>
              {exercise.muscle_group}
            </option>
          );
        })}
      </select>
      <ul>
        {exercises.map((exercise) => {
          return (
            <div>
              <li>{exercise.exercise_name}</li>
              <iframe
                width="560"
                height="315"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                src={exercise.source}
                title={exercise.exercise_name}
              ></iframe>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
