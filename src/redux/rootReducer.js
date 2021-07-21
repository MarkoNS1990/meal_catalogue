import {combineReducers} from 'redux'
import mealReducer from './meal/mealReducer'
import singleMealReducer from './meal/singleMealReducer'

const rootReducer = combineReducers({
    meals:mealReducer,
    singleMeal: singleMealReducer
})

export default rootReducer