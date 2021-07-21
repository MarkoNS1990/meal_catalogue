import { FETCH_MEALS_BEGIN } from "./mealTypes"
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
        axios.get('www.themealdb.com/api/json/v1')
        .then(res=>dispatch(fetchMealsSuccess(res.data)))
        .catch(error=>dispatch(fetchMealsError(error.message)))
    }
}