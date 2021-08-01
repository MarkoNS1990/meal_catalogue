import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';
import { fetchMeal, fetchMeals } from '../redux/meal/mealActions';
import Meal from '../components/Meal';
import '../styles/MealsContainer.css';

function MealsContainer() {
  const dispatch = useDispatch();
  const meals = useSelector((state) => state.meals.meals);
  const loading = useSelector((state) => state.loading);
  const [category, setCategory] = useState('Seafood');

  useEffect(() => {
    dispatch(fetchMeals(category));
  }, [category]);

  const onMealClick = (id) => {
    dispatch(fetchMeal(id));
  };

  if (loading) {
    return (
      <Loader
        type="Puff"
        color="#rgb(194, 60, 60)"
        height={100}
        width={100}
      />
    );
  }

  return (
    <>
      <div className="category mt-2">
        <h3 className="category-h">Select a category: </h3>
        <select className="form-select form-select-sm" aria-label=".form-select-sm example" name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
          <option value="Seafood">Seafood</option>
          <option value="Dessert">Dessert</option>
          <option value="Vegan">Vegan</option>
          <option value="Breakfast">Breakfast</option>
        </select>
      </div>
      <div className="card-list">

        {meals && meals.map((meal) => (
          <div key={meal.idMeal} onClick={() => onMealClick(meal.idMeal)} role="button" tabIndex={0} onKeyPress={() => onMealClick(meal.idMeal)}>
            <Link to={`meals/${meal.idMeal}`}>
              <Meal meal={meal} />
            </Link>
          </div>
        ))}

      </div>
    </>

  );
}

export default MealsContainer;
