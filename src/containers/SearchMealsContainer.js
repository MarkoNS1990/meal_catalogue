import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Meal from '../components/Meal'
import { fetchMeal } from '../redux/meal/mealActions'
import {Link} from 'react-router-dom';


function SearchMealsContainer() {
    const dispatch = useDispatch()
    const[meals,setMeals] = useState()
    const fetchedMeals = useSelector(state=>state.searchMeal.searchMeal)
    console.log(fetchedMeals.meals[0])
    


    const onMealClick =(id)=>{
        dispatch(fetchMeal(id))
    }
    return (
        
        
        <div className='card-list'>
        
        {fetchedMeals!==undefined  && fetchedMeals.meals &&  fetchedMeals.meals.map(meal=><div key={meal.idMeal} onClick = {()=>onMealClick(meal.idMeal)}>
        <Link to={`meals/${meal.idMeal}`}>
            <Meal meal={meal} />
        </Link>
    </div>)}
        
        
            
        </div>
        
    )
}

export default SearchMealsContainer
