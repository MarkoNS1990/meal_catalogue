import axios from 'axios';
import {
  FETCH_MEALS_BEGIN, FETCH_MEALS_FAILURE,
  FETCH_MEALS_SUCCESS, GET_RANDOM_MEAL, GET_SINGLE_MEAL, SEARCH_MEAL,
} from './mealTypes';

export const fetchMealsBegin = () => ({
  type: FETCH_MEALS_BEGIN,
});

export const fetchMealsSuccess = (meals) => ({
  type: FETCH_MEALS_SUCCESS,
  payload: meals,
});

export const fetchMealsFailure = (error) => ({
  type: FETCH_MEALS_FAILURE,
  payload: error,
});

export const getSingleMeal = (id) => ({
  type: GET_SINGLE_MEAL,
  payload: id,
});

export const getRandomMeal = (meal) => ({
  type: GET_RANDOM_MEAL,
  payload: meal,
});

export const searchMeal = (searchResults) => ({
  type: SEARCH_MEAL,
  payload: searchResults,
});

export const fetchMeals = (category) => (dispatch) => {
  dispatch(fetchMealsBegin);
  axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((res) => {
      dispatch(fetchMealsSuccess(res.data.meals));
    })
    .catch((error) => dispatch(fetchMealsFailure(error.message)));
};

export const fetchMeal = (id) => (dispatch) => {
  dispatch(fetchMealsBegin);
  axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => {
      dispatch(getSingleMeal(res.data));
    })
    .catch((error) => dispatch(fetchMealsFailure(error.message)));
};

export const fetchRandomMeal = () => (dispatch) => {
  dispatch(fetchMealsBegin);
  axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((res) => {
      dispatch(getRandomMeal(res.data));
    })
    .catch((error) => dispatch(fetchMealsFailure(error.message)));
};

export const fetchSearchMeal = (input) => (dispatch) => {
  dispatch(fetchMealsBegin);
  axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
    .then((res) => dispatch(searchMeal(res.data)))
    .catch((error) => dispatch(fetchMealsFailure(error.message)));
};
