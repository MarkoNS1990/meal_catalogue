import React ,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { fetchMeals } from '../redux/meal/mealActions'

function MealsContainer() {

    const dispatch = useDispatch()
    const meals = useSelector(state=>state.meals)

    useEffect(()=>{
        dispatch(fetchMeals())
    },[])

    return (
        <div>
             {meals && meals.map(meal=><li key={Math.random()*100}>{meal.strMeal}</li>)}
            
        </div>
        
    )
}

export default MealsContainer
