import React from 'react';
import '../styles/FoodPage.css'; //change path
import { useQuery } from '@apollo/client';

import { QUERY_FOOD } from '../utils/queries';

export default function Food() {
  const { loading, data } = useQuery(QUERY_FOOD);
  const [food, setFood] = useState([]);

  const handleChange = (event) => {
    const { food_name } = event.target.value;

    if (food.food_name === 'Asain') {
      foodList = data.find((food) => {
        food.food_name === 'Asain';
      });
      setFood(foodList.food);
    } else if (food.food_name === 'Mexican') {
      foodList = data.find((food) => {
        food.food_name === 'Mexican';
      });
      setFood(foodList.food);
    } else if (food.food_name === 'Indian') {
      foodList = data.find((food) => {
        food.food_name === 'Indian';
      });
      setFood(foodList.food);
    } else if (food.food_name === 'Carribean') {
      foodList = data.find((food) => {
        food.food_name === 'Carribean';
      });
      setFood(foodList.food);
    } else if (food.food_name === 'African') {
      foodList = data.find((food) => {
        food.food_name === 'European';
      });
      setFood(foodList.food);
    }
  };
}

return (
  <div>
    <h1>Featured Healthy Recipes</h1>
    <label>Which type of cuisine would you like?</label>
    <select name="food" onChange={handleChange}>
      {data.map((food) => {
        return <option value={food.muscle_group}>{food.muscle_group}</option>;
      })}
    </select>
    <ul>
      {foods.map((food) => {
        return (
          <div>
            <li>{food.food_name}</li>
            <iframe
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              src={food.source}
            ></iframe>
          </div>
        );
      })}
    </ul>
  </div>
);
