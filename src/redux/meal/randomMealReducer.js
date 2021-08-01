import { GET_RANDOM_MEAL } from './mealTypes';

const initialState = {
  randomMeal: [],
};

const randomMealReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RANDOM_MEAL:
      return {
        ...state,
        randomMeal: action.payload,
      };
    default:
      return state;
  }
};

export default randomMealReducer;
