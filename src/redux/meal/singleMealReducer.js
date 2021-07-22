import { GET_SINGLE_MEAL } from "./mealTypes"

const initialState = {
    
    singleMeal:[]
}


const singleMealReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_SINGLE_MEAL :
            return {
                ...state,
                singleMeal: action.payload
            }   
        default:
            return state    
    }
}
export default singleMealReducer