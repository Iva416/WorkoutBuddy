import React, { useState } from "react";
// import "../styles/FoodPage.css"; //change path
import { useQuery } from "@apollo/client";

import { QUERY_FOOD } from "../../utils/queries";

export default function Food() {
  const { loading, data } = useQuery(QUERY_FOOD);
  const [food, setFood] = useState([]);

  const foodData = data || [];

  var foodList;

  const handleChange = (event) => {
    const { cuisine_name } = event.target.value;

    if (cuisine_name === "Asian") {
      foodList = data.find((meal) => meal.cuisine_name === "Asian");
      setFood(foodList.food);
    } else if (cuisine_name === "Mexican") {
      foodList = data.find((meal) => meal.cuisine_name === "Mexican");
      setFood(foodList.food);
    } else if (cuisine_name === "Carribean") {
      foodList = data.find((meal) => meal.cuisine_name === "Carribean");
      setFood(foodList.food);
    } else if (cuisine_name === "Italian") {
      foodList = data.find((meal) => meal.cuisine_name === "Italian");
      setFood(foodList.food);
    } else if (cuisine_name === "European") {
      foodList = data.find((meal) => meal.cuisine_name === "European");
      setFood(foodList.food);
    }
    setFood(foodList.food);
  };

  return (
    <div>
      <h1>Featured Healthy Recipes</h1>
      <label>Which type of cuisine would you like?</label>
      <select name="food" onChange={handleChange}>
        {foodData.map((food) => {
          return <option value={food.cuisine_name}>{food.cuisine_name}</option>;
        })}
      </select>
      <ul>
        {food.map((food) => {
          return (
            <div>
              <li>{food.food_name}</li>
              <iframe
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                src={food.source}
                title={food.food_name}
              ></iframe>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
