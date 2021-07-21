import { FETCH_MEALS_BEGIN, FETCH_MEALS_FAILURE, FETCH_MEALS_SUCCESS } from "./mealTypes"
import axios from 'axios'

export const fetchMealsBegin = ()=>{
    return {
        type:FETCH_MEALS_BEGIN
    }
}

export const fetchMealsSuccess = (meals)=>{
    return {
        type:FETCH_MEALS_SUCCESS,
        payload:meals
    }
}

export const fetchMealsFailure = (error)=>{
    return {
        type:FETCH_MEALS_FAILURE,
        payload:error
    }
}



export const fetchMeals = ()=>{
    return (dispatch)=>{
        dispatch(fetchMealsBegin)
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then(res=>{
            console.log(res.data.meals)
            dispatch(fetchMealsSuccess(res.data.meals))
        })
        .catch(error=>dispatch(fetchMealsFailure(error.message)))
    }
}