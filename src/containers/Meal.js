import React from 'react'
import '../styles/Meal.css'

function Meal({meal}) {
    return (
        <div className='card'>
            
            <img src={meal.strMealThumb} alt={meal.strMeal} className='card-img' />
            <h3 className='card-title'>{meal.strMeal}</h3>
        </div>
    )
}

export default Meal
