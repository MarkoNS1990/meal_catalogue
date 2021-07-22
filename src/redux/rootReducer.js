import {combineReducers} from 'redux'
import mealReducer from './meal/mealReducer'
import randomMealReducer from './meal/randomMealReducer'
import singleMealReducer from './meal/singleMealReducer'

const rootReducer = combineReducers({
    meals:mealReducer,
    singleMeal: singleMealReducer,
    randomMeal: randomMealReducer
})

export default rootReducer