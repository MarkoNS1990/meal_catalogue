import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Meal from '../components/Meal';
import { fetchMeal } from '../redux/meal/mealActions';

function SearchMealsContainer() {
  const dispatch = useDispatch();
  const fetchedMeals = useSelector((state) => state.searchMeal.searchMeal);

  const onMealClick = (id) => {
    dispatch(fetchMeal(id));
  };
  return (

    <div className="card-list">

      {fetchedMeals !== undefined && fetchedMeals.meals && fetchedMeals.meals.map((meal) => (
        <div key={meal.idMeal} onClick={() => onMealClick(meal.idMeal)} role="button" tabIndex={0} onKeyPress={() => onMealClick(meal.idMeal)}>
          <Link to={`meals/${meal.idMeal}`}>
            <Meal meal={meal} />
          </Link>
        </div>
      ))}

    </div>

  );
}

export default SearchMealsContainer;
