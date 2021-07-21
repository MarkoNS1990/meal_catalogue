import { FETCH_MEALS_BEGIN, FETCH_MEALS_FAILURE, FETCH_MEALS_SUCCESS } from "./mealTypes"

const initialState = {
    loading:false,
    meals:[],
    error:''
}

const mealReducer = (state = initialState,action)=>{
    switch(action.type){
        case FETCH_MEALS_BEGIN :
            return {
                ...state,
                loading:true
            }
        case FETCH_MEALS_SUCCESS :
            return {
                ...state,
                meals: action.payload,
                loading:false
            } 
        case FETCH_MEALS_FAILURE :
            return {
                ...state,
                loading:false,
                error: action.payload
            } 
        default:
            return state         
    }
}

export default mealReducer