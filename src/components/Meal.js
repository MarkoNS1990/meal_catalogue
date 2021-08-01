import React from 'react';
import '../styles/Meal.css';
import PropTypes from 'prop-types';

function Meal({ meal }) {
  return (
    <div className="card">
      <img src={meal.strMealThumb} alt={meal.strMeal} className="card-img" />
      <h3 className="card-title">{meal.strMeal}</h3>
    </div>
  );
}

Meal.propTypes = {
  meal: PropTypes.shape({
    strMealThumb: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,

  }).isRequired,
};

export default Meal;
