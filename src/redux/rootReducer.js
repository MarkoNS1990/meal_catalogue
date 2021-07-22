import {combineReducers} from 'redux'
import mealReducer from './meal/mealReducer'
import randomMealReducer from './meal/randomMealReducer'
import searchMealReducer from './meal/searchMealReducer'
import singleMealReducer from './meal/singleMealReducer'

const rootReducer = combineReducers({
    meals:mealReducer,
    singleMeal: singleMealReducer,
    randomMeal: randomMealReducer,
    searchMeal : searchMealReducer,
})

export default rootReducer