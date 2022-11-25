import React from 'react';
import '../styles/FoodPage.css'; //change path
import { useQuery } from '@apollo/client';

import { QUERY_FOOD } from '../utils/queries';

const foodList = ({}) => {
  if (!food.length) {
    return <h3>No exercise selected</h3>;
  }
};

export default function Food() {
  const { loading, data } = useQuery(QUERY_FOOD);
  const [food, setFood] = useState([]);

  var foodList;

  const handleChange = (event) => {
    const { cusine_name } = event.target.value;

    if (cusine_name === 'Asain') {
      foodList = data.find((meal) => {
        meal.cusine_name === 'Asain';
      });
      setFood(foodList.food);
    } else if (cusine_name === 'Mexican') {
      foodList = data.find((meal) => {
        meal.cusine_name === 'Mexican';
      });
      setFood(foodList.food);
    } else if (cusine_name === 'Carribean') {
      foodList = data.find((meal) => {
        meal.cusine_name === 'Carribean';
      });
      setFood(foodList.food);
    } else if (cusine_name === 'Italian') {
      foodList = data.find((meal) => {
        meal.cusine_name === 'Italian';
      });
      setFood(foodList.food);
    } else if (cusine_name === 'European') {
      foodList = data.find((meal) => {
        meal.cusine_name === 'European';
      });
      setFood(foodList.food);
    }
    setFood(foodList.food);
  };
}

return (
  <div>
    <h1>Featured Healthy Recipes</h1>
    <label>Which type of cuisine would you like?</label>
    <select name="food" onChange={handleChange}>
      {data.map((food) => {
        return <option value={food.cusine_name}>{food.cusine_name}</option>;
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
              title={food.food_name}
            ></iframe>
          </div>
        );
      })}
    </ul>
  </div>
);
