import React ,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import { fetchMeal } from '../redux/meal/mealActions';
import '../styles/SingleMeal.css'

function SingleMeal() {
    const meal = useSelector(state=>state.singleMeal.singleMeal)
    // console.log(meal && meal.meals[0])
    const dispatch = useDispatch();
    const params = useParams();
    
    useEffect(()=>{
        dispatch(fetchMeal(params.id)) 
        
    },[params])

    
    return (
        <div class='single-container'>
           {meal && 
            <>
            <h1>{meal.meals[0].strMeal}</h1>
            
            <img src={meal.meals[0].strMealThumb} alt={meal.meals[0].strMeal} className='single-img' />
            
            
            <p class='instructions'>{meal.meals[0].strInstructions}</p>
            </>
        }
        </div>
    )
}

export default SingleMeal