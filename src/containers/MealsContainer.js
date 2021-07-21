import React ,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { fetchMeals } from '../redux/meal/mealActions'
import Loader from "react-loader-spinner";
import Meal from './Meal';
import '../styles/MealsContainer.css'

function MealsContainer() {

    const dispatch = useDispatch()
    const meals = useSelector(state=>state.meals)
    const loading = useSelector(state=>state.loading)

    useEffect(()=>{
        dispatch(fetchMeals())
        
    },[dispatch])

    if(loading){
        return <Loader
        type="Puff"
        color="#rgb(194, 60, 60)"
        height={100}
        width={100}
      />
    }

    return (
        <div className='card-list'>
        {meals && meals.map(meal=><Meal key={meal.idMeal} meal={meal} />)}
            
        </div>
        
    )
}

export default MealsContainer
