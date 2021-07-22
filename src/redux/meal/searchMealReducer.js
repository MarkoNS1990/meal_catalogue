import { SEARCH_MEAL } from "./mealTypes"

const initialState = {
    searchMeal:[]
}

const searchMealReducer = (state = initialState,action)=>{
    switch(action.type){
        case SEARCH_MEAL:
            return{
                ...state,
                searchMeal: action.payload
            }
        default:
            return state    
    }
}

export default searchMealReducer