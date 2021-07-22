import { FETCH_MEALS_BEGIN, FETCH_MEALS_FAILURE, FETCH_MEALS_SUCCESS, GET_RANDOM_MEAL, GET_SINGLE_MEAL } from "./mealTypes"
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

export const getSingleMeal = (id)=>{
    return {
        type:GET_SINGLE_MEAL,
        payload:id
    }
}

export const getRandomMeal = (meal)=>{
    return {
        type:GET_RANDOM_MEAL,
        payload:meal
    }
}



export const fetchMeals = (category)=>{
    return (dispatch)=>{
        dispatch(fetchMealsBegin)
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then(res=>{
            console.log(res.data.meals)
            dispatch(fetchMealsSuccess(res.data.meals))
        })
        .catch(error=>dispatch(fetchMealsFailure(error.message)))
    }
}

export const fetchMeal = (id)=>{
    return(dispatch)=>{
        dispatch(fetchMealsBegin)
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res=>{
            console.log(res.data)
           dispatch(getSingleMeal(res.data))
        })
        .catch(error=>dispatch(fetchMealsFailure(error.message)))
    }
}

export const fetchRandomMeal = ()=>{
    return(dispatch)=>{
        dispatch(fetchMealsBegin)
        axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(res=>{
           dispatch(getRandomMeal(res.data))
        })
        .catch(error=>dispatch(fetchMealsFailure(error.message)))
    }
}